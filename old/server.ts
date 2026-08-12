//-Path: "TeaChoco-Portfolio/client/server.ts"
import fs from 'node:fs';
import os from 'node:os';
import dotenv from 'dotenv';
import path from 'node:path';
import express from 'express';
import compression from 'compression';
import { fileURLToPath } from 'node:url';
import type { ViteDevServer } from 'vite';
import tailwindcss from '@tailwindcss/vite';

dotenv.config();

const base = process.env.VITE_CLIENT_BASE || '/';
const port = process.env.VITE_CLIENT_PORT || 8000;
const isProduction = process.env.VITE_MODE === 'production';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
    const app = express();

    app.use(compression());

    let vite: ViteDevServer;
    if (!isProduction) {
        const { createServer: createViteServer } = await import('vite');
        vite = await createViteServer({
            server: { middlewareMode: true },
            appType: 'custom',
            plugins: [tailwindcss()],
        });
        app.use(vite.middlewares);
    } else
        app.use(
            express.static(path.resolve(__dirname, 'dist/client'), {
                index: false,
            }),
        );

    app.use('/{*path}', async (req, res, next) => {
        const url = req.originalUrl;

        try {
            let template: string;
            let render: (url: string) => { html: string };

            if (!isProduction) {
                template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
                template = await vite.transformIndexHtml(url, template);
                render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
            } else {
                template = fs.readFileSync(
                    path.resolve(__dirname, 'dist/client/index.html'),
                    'utf-8',
                );
                // @ts-ignore
                render = (await import('./dist/server/entry-server.js')).render;
            }

            const { html: appHtml } = render(url);

            const html = template.replace('<!--app-html-->', appHtml);

            res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
        } catch (e: any) {
            if (!isProduction) vite.ssrFixStacktrace(e);
            console.error(e.stack);
            next(e);
        }
    });

    app.listen(Number(port), '0.0.0.0', () => {
        const interfaces = os.networkInterfaces();
        const addresses: string[] = [];
        Object.values(interfaces).forEach((ifaces) =>
            ifaces?.forEach((iface) => {
                if (iface.family === 'IPv4' && !iface.internal) addresses.push(iface.address);
            }),
        );

        console.log(`🚀 Server running at:`);
        console.log(`   - Local:   http://localhost:${port}${base}`);
        addresses.forEach((addr) => console.log(`   - Network: http://${addr}:${port}${base}`));
    });
}

createServer();
