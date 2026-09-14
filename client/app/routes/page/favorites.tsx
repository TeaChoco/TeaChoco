// -Path: 'Vite-React-Router-TypeScript/app/routes/favorites.tsx'
import FavoritesPage from '~/pages/favorites/Favorites';
import { SITE_NAME, SITE_URL, seo } from '~/lib/seo';
import type { Route } from './+types/favorites';

export function meta({ params }: Route.MetaArgs) {
    const lang = params.lang ?? 'en-US';
    const title = 'Favorites | TeaChoco Anime, Games, Music Videos & Characters';
    const description =
        'A look at TeaChoco personal favorites — favorite anime, games, music videos and waifu characters, with ratings, tier lists and personal preferences.';

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: title,
        url: `${SITE_URL}/${lang}/favorites`,
        description,
        isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: `${SITE_URL}/${lang}` },
    };

    return seo({
        lang,
        title,
        description,
        keywords:
            'TeaChoco favorites, favorite anime, favorite games, favorite music videos, waifu tier list, personal rankings, anime list, game list',
        path: '/favorites',
        image: '/TeaChoco-logo.png',
        jsonLd,
    });
}

export default function Favorites() {
    return <FavoritesPage />;
}