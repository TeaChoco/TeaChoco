//-Path: "vite-extra-react-ssr-ts/server.js"
import dotenv from 'dotenv';
import express from 'express';
import fs from 'node:fs/promises';
import { Transform } from 'node:stream';

dotenv.config();

// Constants
const ABORT_DELAY = 10000;
const base = process.env.VITE_CLIENT_BASE || '/';
const port = process.env.VITE_CLIENT_PORT || 5173;
const host = process.env.VITE_CLIENT_HOST || '127.0.0.1';
const isProduction = process.env.VITE_MODE === 'production';

// Cached production assets
const templateHtml = isProduction ? await fs.readFile('./dist/server/index.html', 'utf-8') : '';

// Create http server
const app = express();

// Add Vite or respective production middlewares
/** @type {import('vite').ViteDevServer | undefined} */
let vite;
if (!isProduction) {
    const { createServer } = await import('vite');
    vite = await createServer({
        base,
        appType: 'custom',
        server: { middlewareMode: true },
    });
    app.use(vite.middlewares);
} else {
    const sirv = (await import('sirv')).default;
    const compression = (await import('compression')).default;
    app.use(compression());
    app.use(base, sirv('./dist/client', { extensions: [] }));
}

// Serve HTML
app.use('*all', async (req, res) => {
    // ข้าม request ที่ไม่ใช่ HTML page
    const url = req.originalUrl;

    // ตรวจสอบว่าเป็น request สำหรับไฟล์หรือไม่
    const isAsset = /\.(css|js|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|map|json)$/i.test(url);
    const isWellKnown = url.includes('/.well-known/');
    const isSocket = url.includes('/socket.io');
    const isApi = url.includes('/api/');

    // ถ้าเป็น asset, well-known, socket, หรือ api => ไม่ต้อง render React
    if (isAsset || isWellKnown || isSocket || isApi) {
        // ส่ง 404 หรือ next
        return res.status(404).end();
    }

    // ถ้าเป็น root และไม่มี basename ให้ redirect
    const base = process.env.VITE_CLIENT_BASE || '/';
    if (base !== '/' && (url === '/' || url === '')) {
        return res.redirect(302, base);
    }
    try {
        /** @type {import('./src/entry-server.ts').render} */
        let render;
        /** @type {import('./src/entry-server.ts').getHeadForRoute} */
        let getHeadForRoute;
        /** @type {string} */
        let template;
        let didError = false;
        const url = req.originalUrl.replace(base, '').replace(/^\/?/, '/');

        if (!isProduction) {
            // Always read fresh template in development
            template = await fs.readFile('./index.html', 'utf-8');
            template = await vite.transformIndexHtml(url, template);
            const devModule = await vite.ssrLoadModule('/src/entry-server.tsx');
            render = devModule.render;
            getHeadForRoute = devModule.getHeadForRoute;
        } else {
            template = templateHtml;
            const prodModule = await import('./dist/server/entry-server.js');
            render = prodModule.render;
            getHeadForRoute = prodModule.getHeadForRoute;
        }

        const cookies = req.headers.cookie || '';
        const themeMatch = cookies.match(/theme=([^;]+)/);
        const theme = themeMatch ? themeMatch[1] : 'dark';

        if (theme === 'dark') {
            template = template.replace('<html lang="en">', '<html lang="en" class="dark">');
        }

        const langMatch = cookies.match(/i18next=([^;]+)/);
        const lang = langMatch ? langMatch[1] : 'en';

        const head = getHeadForRoute(url);
        template = template.replace('<!--app-head-->', head);

        const { pipe, abort } = render(url, lang, {
            async onShellError(error) {
                console.error('Shell Error:', error);
                // ไม่ต้องส่ง error กลับไป client ถ้าเป็น Navigate error
                if (error?.message?.includes('<Navigate>')) {
                    // ส่งหน้า index กลับไปให้ client จัดการ navigation เอง
                    const html = template.replace('<!--app-html-->', '');
                    res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
                    return;
                }
                res.status(500);
                console.error(error);
                res.set({ 'Content-Type': 'text/html' });
                try {
                    let html = await fs.readFile('./error.html', 'utf-8');
                    html = html.replace(
                        '<body></body>',
                        `<body><h1>Something went wrong</h1><pre style="white-space: pre-wrap;">${error.stack || error.message || error}</pre></body>`,
                    );
                    res.send(html);
                } catch {
                    res.send(
                        `<h1>Something went wrong</h1><pre style="white-space: pre-wrap;">${error.stack || error.message || error}</pre>`,
                    );
                }
            },
            onShellReady() {
                res.status(didError ? 500 : 200);
                res.set({ 'Content-Type': 'text/html' });

                const [htmlStart, htmlEnd] = template.split(`<!--app-html-->`);

                const transformStream = new Transform({
                    transform(chunk, encoding, callback) {
                        res.write(chunk, encoding);
                        callback();
                    },
                });
                transformStream.on('finish', () => {
                    res.write(htmlEnd);
                    res.end();
                });

                res.write(htmlStart);
                pipe(transformStream);
            },
            onError(error) {
                didError = true;
                console.error(error);
            },
        });

        setTimeout(() => abort(), ABORT_DELAY);
    } catch (error) {
        if (!isProduction && vite) vite.ssrFixStacktrace(error);
        console.error(error.stack);
        try {
            let html = await fs.readFile('./error.html', 'utf-8');
            html = html.replace(
                '<body></body>',
                `<body><h1>Server Error</h1><pre style="white-space: pre-wrap;">${error.stack || error.message || error}</pre></body>`,
            );
            res.status(500).set({ 'Content-Type': 'text/html' }).end(html);
        } catch {
            res.status(500).end(error.stack);
        }
    }
});

// Start http server
app.listen(port, host, () => console.log(`Server started at http://${host}:${port}${base}`));
