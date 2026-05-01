//-Path: "TeaChoco-Portfolio/client/src/entry-server.tsx"
import App from './App';
import i18n from './i18n/i18n';
import { StrictMode } from 'react';
import { StaticRouter } from 'react-router-dom';
import Providers from './components/layout/Providers';
import { renderToPipeableStream, type RenderToPipeableStreamOptions } from 'react-dom/server';

interface RouteMeta {
    title: string;
    description: string;
}

const routeMetaMap: Record<string, RouteMeta> = {
    '/': {
        title: 'TeaChoco - Portfolio',
        description: 'Portfolio of TeaChoco',
    },
};

/** Generate SEO head tags based on the current route */
export function getHeadForRoute(url: string): string {
    const meta = routeMetaMap[url] || routeMetaMap['/']!;
    return [
        `<title>${meta.title}</title>`,
        `<meta name="description" content="${meta.description}" />`,
        `<meta property="og:title" content="${meta.title}" />`,
        `<meta property="og:description" content="${meta.description}" />`,
        `<meta property="og:type" content="website" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${meta.title}" />`,
        `<meta name="twitter:description" content="${meta.description}" />`,
    ].join('\n        ');
}

export function render(url: string, lang: string = 'en', options?: RenderToPipeableStreamOptions) {
    i18n.changeLanguage(lang);
    return renderToPipeableStream(
        <StrictMode>
            <Providers>
                <StaticRouter location={url}>
                    <App />
                </StaticRouter>
            </Providers>
        </StrictMode>,
        options,
    );
}
