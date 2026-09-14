// -Path: 'Vite-React-Router-TypeScript/app/routes/page/favorites-character.tsx'
import type { Route } from './+types/character';
import CharacterPage from '~/pages/favorites/category/CharacterPage';
import { characters } from '~/data/favorites/character';
import { SITE_NAME, SITE_URL, seo } from '~/lib/seo';

export function meta({ params }: Route.MetaArgs) {
    const lang = params.lang ?? 'en-US';
    const title = 'Favorite Characters | TeaChoco Waifu Tier List';
    const description =
        'Browse TeaChoco favorite characters — a waifu and favorite character tier list with appearance, nature, voice and warmth ratings across anime and games.';

    const itemListElement = characters.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
    }));

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: title,
        url: `${SITE_URL}/${lang}/favorites/character`,
        description,
        isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: `${SITE_URL}/${lang}` },
        mainEntity: { '@type': 'ItemList', itemListElement },
    };

    return seo({
        lang,
        title,
        description,
        keywords:
            'favorite characters, waifu tier list, character rankings, anime characters, game characters, TeaChoco favorites',
        path: '/favorites/character',
        image: '/TeaChoco-logo.png',
        jsonLd,
    });
}

export default function FavoritesCharacter() {
    return <CharacterPage />;
}