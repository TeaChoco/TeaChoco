// -Path: 'Vite-React-Router-TypeScript/app/routes/about.tsx'
import AboutPage from '~/pages/about/About';
import { personJsonLd, seo } from '~/lib/seo';
import type { Route } from './+types/about';

export function meta({ params }: Route.MetaArgs) {
    const lang = params.lang ?? 'en-US';
    const title = 'About TeaChoco | Full-Stack Developer & Creative Designer';
    const description =
        'Learn about TeaChoco, a full-stack developer and creative designer. Discover my background, coding skills, language abilities, work experience and the technologies I use to build modern web applications.';

    return seo({
        lang,
        title,
        description,
        keywords:
            'About TeaChoco, full-stack developer bio, developer experience, coding skills, language skills, freelance developer, creative designer',
        path: '/about',
        image: '/TeaChoco-Developer-logo.png',
        type: 'profile',
        jsonLd: personJsonLd(lang),
    });
}

export default function About() {
    return <AboutPage />;
}