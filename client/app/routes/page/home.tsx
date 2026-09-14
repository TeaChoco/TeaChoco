// -Path: 'Vite-React-Router-TypeScript/app/routes/home.tsx'
import HomePage from '~/pages/home/Home';
import { seo, SITE_NAME, SITE_URL, SOCIAL_URLS } from '~/lib/seo';
import type { Route } from './+types/home';

export function meta({ params }: Route.MetaArgs) {
    const lang = params.lang ?? 'en-US';
    const title = 'TeaChoco Portfolio | Full-Stack Developer & Creative Designer';
    const description =
        'Explore the TeaChoco portfolio — a full-stack developer and creative designer building modern web apps with React, TypeScript, Vite and Tailwind CSS. View projects, coding skills, tech stack and personal favorites.';
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        url: `${SITE_URL}/${lang}`,
        description,
        author: { '@type': 'Person', name: SITE_NAME, sameAs: Object.values(SOCIAL_URLS) },
    };

    return seo({
        lang,
        title,
        description,
        keywords:
            'TeaChoco, TeaChoco portfolio, full-stack developer, creative designer, web developer, software engineer, React developer, TypeScript, Vite, TailwindCSS',
        path: '/',
        image: '/TeaChoco-logo.png',
        jsonLd,
    });
}

export default function Home() {
    return <HomePage />;
}