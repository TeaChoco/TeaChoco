//-Path: "vite-extra-react-ssr-ts/src/entry-server.tsx"
import App from './App';
import i18n from './i18n/i18n';
import env from './secure/env';
import { StrictMode } from 'react';
import { StaticRouter } from 'react-router-dom';
import { getRouteMeta } from './secure/routeMeta';
import Providers from './components/layout/Providers';
import { renderToPipeableStream, type RenderToPipeableStreamOptions } from 'react-dom/server';

/** Generate SEO head tags based on the current route */
export function getHeadForRoute(pathname: string): string {
    const meta = getRouteMeta(pathname);
    return [
        `<title>${meta.title}</title>`,
        `<meta name="description" content="${meta.description}" />`,
        `<meta name="keywords" content="${meta.keywords.join(', ')}" />`,
        `<meta name="author" content="${meta.author}" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:title" content="${meta.title}" />`,
        `<meta property="og:description" content="${meta.description}" />`,
        `<meta property="og:image" content="${meta.image}" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${meta.title}" />`,
        `<meta name="twitter:description" content="${meta.description}" />`,
        `<meta name="twitter:image" content="${meta.image}" />`,
    ].join('\n        ');
}

export function render(url: string, lang: string = 'en', options?: RenderToPipeableStreamOptions) {
    i18n.changeLanguage(lang);
    return renderToPipeableStream(
        <StrictMode>
            <Providers>
                <StaticRouter location={url} basename={env.BASE}>
                    <App />
                </StaticRouter>
            </Providers>
        </StrictMode>,
        options,
    );
}
