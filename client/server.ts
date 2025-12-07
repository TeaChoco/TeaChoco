//-Path: "TeaChoco-Portfolio/client/server.ts"
import fs from "node:fs";
import path from "node:path";
import express from "express";
import compression from "compression";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";

const port = process.env.PORT || 8000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === "production";

async function createServer() {
    const app = express();

    app.use(compression());

    let vite: any;
    if (!isProduction) {
        const { createServer: createViteServer } = await import("vite");
        vite = await createViteServer({
            server: { middlewareMode: true },
            appType: "custom",
            plugins: [tailwindcss()],
        });
        app.use(vite.middlewares);
    } else
        app.use(
            express.static(path.resolve(__dirname, "dist/client"), {
                index: false,
            }),
        );

    app.use("/{*path}", async (req, res, next) => {
        const url = req.originalUrl;

        try {
            let template: string;
            let render: (url: string) => { html: string };

            if (!isProduction) {
                template = fs.readFileSync(
                    path.resolve(__dirname, "index.html"),
                    "utf-8",
                );
                template = await vite.transformIndexHtml(url, template);
                render = (await vite.ssrLoadModule("/src/entry-server.tsx"))
                    .render;
            } else {
                template = fs.readFileSync(
                    path.resolve(__dirname, "dist/client/index.html"),
                    "utf-8",
                );
                render = (await import("./dist/server/entry-server.js")).render;
            }

            const { html: appHtml } = render(url);

            const html = template.replace("<!--app-html-->", appHtml);

            res.status(200).set({ "Content-Type": "text/html" }).send(html);
        } catch (e: any) {
            if (!isProduction) vite.ssrFixStacktrace(e);
            console.error(e.stack);
            next(e);
        }
    });

    app.listen(port, () =>
        console.log(`🚀 Server running at http://localhost:${port}`),
    );
}

createServer();
