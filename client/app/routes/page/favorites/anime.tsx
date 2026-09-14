// -Path: 'Vite-React-Router-TypeScript/app/routes/page/favorites-anime.tsx'
import type { Route } from './+types/anime';
import AnimePage from '~/pages/favorites/category/AnimePage';
import { animeList } from '~/data/favorites/anime';
import { localizedName, SITE_NAME, SITE_URL, seo } from '~/lib/seo';

export function meta({ params }: Route.MetaArgs) {
    const lang = params.lang ?? 'en-US';
    const title = 'Favorite Anime | TeaChoco Anime List & Ratings';
    const description =
        'Discover TeaChoco favorite anime — a curated list of anime series with ratings, including titles like Bocchi the Rock, Re:Zero and Jujutsu Kaisen.';

    const itemListElement = animeList.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: localizedName(item.names, lang),
    }));

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: title,
        url: `${SITE_URL}/${lang}/favorites/anime`,
        description,
        isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: `${SITE_URL}/${lang}` },
        mainEntity: { '@type': 'ItemList', itemListElement },
    };

    return seo({
        lang,
        title,
        description,
        keywords:
            'favorite anime list, anime ratings, TeaChoco anime, best anime, anime recommendations, Bocchi the Rock, ReZero, Jujutsu Kaisen',
        path: '/favorites/anime',
        image: '/TeaChoco-logo.png',
        jsonLd,
    });
}

export default function FavoritesAnime() {
    return <AnimePage />;
}