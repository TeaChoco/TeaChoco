// -Path: "TeaChoco-Portfolio/client/prerender.ts"
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Helper to get absolute path
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p: string) => path.resolve(__dirname, p);

// Base URL matching vite.config.ts
const BASE_URL = "/TeaChoco";

// Read template and ssr manifest
const template = fs.readFileSync(toAbsolute("dist/client/index.html"), "utf-8");

// Import render function from server build
// Note: We use the built server entry
const { render } = await import("./dist/server/entry-server.js");

// Routes to pre-render
const routesToPrerender = ["/", "/about", "/blog", "/contact"];

(async () => {
    console.log("🚀 Starting pre-rendering...");

    for (const url of routesToPrerender) {
        // Construct full URL as the server/router expects it
        // If url is '/', fullUrl is '/TeaChoco'
        // If url is '/about', fullUrl is '/TeaChoco/about'
        const fullUrl = url === "/" ? BASE_URL : `${BASE_URL}${url}`;

        try {
            const appHtml = await render(fullUrl);

            const html = template.replace(`<!--app-html-->`, appHtml.html);

            const filePath = `dist/client${
                url === "/" ? "/index.html" : `${url}/index.html`
            }`;
            const absoluteFilePath = toAbsolute(filePath);

            // Ensure directory exists
            const dir = path.dirname(absoluteFilePath);
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

            fs.writeFileSync(absoluteFilePath, html);
            console.log(`✅ Pre-rendered: ${url} -> ${filePath}`);
        } catch (e) {
            console.error(`❌ Failed to render ${url}:`, e);
        }
    }

    // Copy index.html to 404.html for GitHub Pages fallback
    const indexHtmlPath = toAbsolute("dist/client/index.html");
    const notFoundPath = toAbsolute("dist/client/404.html");
    fs.copyFileSync(indexHtmlPath, notFoundPath);
    console.log("✅ Created 404.html fallback");

    console.log("✨ Pre-rendering complete!");
})();
