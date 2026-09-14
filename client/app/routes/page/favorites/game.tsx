// -Path: 'Vite-React-Router-TypeScript/app/routes/page/favorites-game.tsx'
import type { Route } from './+types/game';
import GamePage from '~/pages/favorites/category/GamePage';
import { gameList } from '~/data/favorites/game';
import { localizedName, SITE_NAME, SITE_URL, seo } from '~/lib/seo';

export function meta({ params }: Route.MetaArgs) {
    const lang = params.lang ?? 'en-US';
    const title = 'Favorite Games | TeaChoco Game List & Ratings';
    const description =
        'Explore TeaChoco favorite games — a curated list of the games I love across open world, RPG, sandbox, gacha and indie genres, with ratings and notes.';

    const itemListElement = gameList.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: localizedName(item.names, lang),
    }));

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: title,
        url: `${SITE_URL}/${lang}/favorites/game`,
        description,
        isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: `${SITE_URL}/${lang}` },
        mainEntity: { '@type': 'ItemList', itemListElement },
    };

    return seo({
        lang,
        title,
        description,
        keywords:
            'favorite games list, game ratings, TeaChoco games, best video games, open world games, RPG games, gacha games, indie games',
        path: '/favorites/game',
        image: '/TeaChoco-logo.png',
        jsonLd,
    });
}

export default function FavoritesGame() {
    return <GamePage />;
}