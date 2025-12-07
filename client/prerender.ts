//-Path: "TeaChoco-Portfolio/client/prerender.ts"
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p: string) => path.resolve(__dirname, p);

const manifest = JSON.parse(
    fs.readFileSync(toAbsolute('dist/client/.vite/ssr-manifest.json'), 'utf-8'),
);
const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8');
// @ts-expect-error - generated file, no types available
const { render } = await import('./dist/server/entry-server.js');

const routesToPrerender = fs
    .readdirSync(toAbsolute('src/pages'))
    .map((file) => {
        const name = file.replace(/\.tsx$/, '').toLowerCase();
        return name === 'home' ? '/' : `/${name}`;
    });

(async () => {
    // pre-render each route...
    for (const url of routesToPrerender) {
        const [appHtml, head] = await render(url, manifest);

        const html = template
            .replace(`<!--app-head-->`, head ?? '')
            .replace(`<!--app-html-->`, appHtml);

        const filePath = `dist/client${url === '/' ? '/index' : url}.html`;

        // Ensure directory exists
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(toAbsolute(filePath), html);
        console.log('pre-rendered:', filePath);
    }
})();
