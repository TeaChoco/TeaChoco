//-Path: "TeaChoco-Portfolio/client/src/entry-server.tsx"
import App from './router/App';
import { StrictMode } from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

export function render(url: string) {
    const html = renderToString(
        <StrictMode>
            <StaticRouter
                location={url}
                basename={
                    Boolean(import.meta.env.VITE_IS_GITHUB_PAGE)
                        ? '/TeaChoco'
                        : undefined
                }
            >
                <App />
            </StaticRouter>
        </StrictMode>,
    );
    return { html };
}
