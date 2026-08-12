// -Path: 'Vite-React-Router-TypeScript/app/routes.ts'
import { type RouteConfig, layout, index, route } from '@react-router/dev/routes';

export default [
    route(':lang', 'routes/$lang.tsx', [
        layout('routes/layout.tsx', [
            index('routes/page/home.tsx'),
            route('about', 'routes/page/about.tsx'),
            route('portfolio', 'routes/page/portfolio.tsx'),
            route('contact', 'routes/page/contact.tsx'),
            route('*', 'routes/not-found.tsx'),
        ]),
    ]),
] satisfies RouteConfig;
