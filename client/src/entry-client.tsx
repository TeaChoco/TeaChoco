//-Path: "TeaChoco-Portfolio/client/src/entry-client.tsx"
import "./index.css";
import App from "./router/App";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

hydrateRoot(
    document.getElementById("root")!,
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
);
