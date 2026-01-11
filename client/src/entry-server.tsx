//-Path: "TeaChoco-Portfolio/client/src/entry-server.tsx"
import App from './router/App';
import { StrictMode } from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

export function render(url: string, _manifest?: any) {
    const html = renderToString(
        <StrictMode>
            <StaticRouter location={url} basename="/TeaChoco">
                <App />
            </StaticRouter>
        </StrictMode>,
    );
    return { html, head: '' };
}
