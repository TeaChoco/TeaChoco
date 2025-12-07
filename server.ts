//-Path: "TeaChoco-Portfolio/server.ts"
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import compression from "compression";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 3000;

async function createServer() {
    const app = express();

    // Compression middleware
    app.use(compression());

    let vite: any;
    if (!isProduction) {
        // Development mode - use Vite dev server as middleware
        const { createServer: createViteServer } = await import("vite");
        vite = await createViteServer({
            server: { middlewareMode: true },
            appType: "custom",
        });
        app.use(vite.middlewares);
    } else {
        // Production mode - serve static files
        app.use(
            express.static(path.resolve(__dirname, "dist/client"), {
                index: false,
            }),
        );
    }

    // Handle all routes with SSR
    app.use("*", async (req, res, next) => {
        const url = req.originalUrl;

        try {
            let template: string;
            let render: (url: string) => { html: string };

            if (!isProduction) {
                // Development - read and transform template
                template = fs.readFileSync(
                    path.resolve(__dirname, "index.html"),
                    "utf-8",
                );
                template = await vite.transformIndexHtml(url, template);
                render = (await vite.ssrLoadModule("/src/entry-server.tsx"))
                    .render;
            } else {
                // Production - use pre-built files
                template = fs.readFileSync(
                    path.resolve(__dirname, "dist/client/index.html"),
                    "utf-8",
                );
                render = (await import("./dist/server/entry-server.js")).render;
            }

            // Render the app
            const { html: appHtml } = render(url);

            // Inject app HTML into template
            const html = template.replace("<!--app-html-->", appHtml);

            res.status(200).set({ "Content-Type": "text/html" }).send(html);
        } catch (e: any) {
            if (!isProduction) {
                vite.ssrFixStacktrace(e);
            }
            console.error(e.stack);
            next(e);
        }
    });

    app.listen(port, () => {
        console.log(`🚀 Server running at http://localhost:${port}`);
    });
}

createServer();
