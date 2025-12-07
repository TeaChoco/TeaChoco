//-Path: "TeaChoco-Portfolio/src/entry-server.tsx"
import App from "./App";
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

export function render(url: string) {
    const html = renderToString(
        <StrictMode>
            <StaticRouter location={url}>
                <App />
            </StaticRouter>
        </StrictMode>,
    );
    return { html };
}
