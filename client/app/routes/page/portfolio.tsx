// -Path: 'Vite-React-Router-TypeScript/app/routes/portfolio.tsx'
import PortfolioPage from '~/pages/portfolio/Portfolio';
import i18n from '~/i18n';
import { projects } from '~/data/projects';
import { SITE_NAME, SITE_URL, seo } from '~/lib/seo';
import type { Route } from './+types/portfolio';

export function meta({ params }: Route.MetaArgs) {
    const lang = params.lang ?? 'en-US';
    const title = 'Portfolio | TeaChoco Projects & Web Applications';
    const description =
        'Browse the TeaChoco portfolio — web applications, developer tools, Discord bots and starter templates built with TypeScript, React, Vite, Node.js and Tailwind CSS.';

    const itemListElement = projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: i18n.t(`portfolio.projects.${project.key}.title`, { lng: lang, defaultValue: project.id }),
        url: project.live && project.live !== '/' ? project.live : project.github ?? `${SITE_URL}/${lang}/portfolio`,
    }));

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: title,
        url: `${SITE_URL}/${lang}/portfolio`,
        description,
        isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: `${SITE_URL}/${lang}` },
        mainEntity: {
            '@type': 'ItemList',
            itemListElement,
        },
    };

    return seo({
        lang,
        title,
        description,
        keywords:
            'TeaChoco portfolio, developer projects, open source, react projects, typescript templates, vite templates, discord bot, web applications, frontend, backend',
        path: '/portfolio',
        image: '/TeaChoco-Developer-logo.png',
        jsonLd,
    });
}

export default function Portfolio() {
    return <PortfolioPage />;
}