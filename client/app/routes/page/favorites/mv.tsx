// -Path: 'Vite-React-Router-TypeScript/app/routes/page/favorites-mv.tsx'
import type { Route } from './+types/mv';
import MvPage from '~/pages/favorites/category/MvPage';
import { SITE_NAME, SITE_URL, seo } from '~/lib/seo';

export function meta({ params }: Route.MetaArgs) {
    const lang = params.lang ?? 'en-US';
    const title = 'Favorite Music Videos | TeaChoco MV Picks';
    const description =
        'Check out TeaChoco favorite music videos — a hand-picked collection of music videos and MV edits with personal ratings.';

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: title,
        url: `${SITE_URL}/${lang}/favorites/mv`,
        description,
        isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: `${SITE_URL}/${lang}` },
    };

    return seo({
        lang,
        title,
        description,
        keywords:
            'favorite music videos, MV list, TeaChoco music videos, music video favorites, MV ratings',
        path: '/favorites/mv',
        image: '/TeaChoco-logo.png',
        jsonLd,
    });
}

export default function FavoritesMv() {
    return <MvPage />;
}