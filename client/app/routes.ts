// -Path: 'TeaChoco-Portfolio/client/app/routes.ts'
import { type RouteConfig, layout, index, route } from '@react-router/dev/routes';

export default [
    route('sitemap.xml', 'routes/sitemap[.]xml.ts'),
    route(':lang', 'routes/$lang.tsx', [
        layout('routes/layout.tsx', [
            index('routes/page/home.tsx'),
            route('about', 'routes/page/about.tsx'),
            route('favorites', 'routes/page/favorites.tsx'),
            route('favorites/anime', 'routes/page/favorites/anime.tsx'),
            route('favorites/game', 'routes/page/favorites/game.tsx'),
            route('favorites/mv', 'routes/page/favorites/mv.tsx'),
            route('favorites/character', 'routes/page/favorites/character.tsx'),
            route('portfolio', 'routes/page/portfolio.tsx'),
            route('portfolio/:id', 'routes/page/portfolio-detail.tsx'),
            route('contact', 'routes/page/contact.tsx'),
            route('*', 'routes/not-found.tsx'),
        ]),
    ]),
] satisfies RouteConfig;
