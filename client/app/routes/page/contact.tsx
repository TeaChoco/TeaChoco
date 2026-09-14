// -Path: 'Vite-React-Router-TypeScript/app/routes/contact.tsx'
import ContactPage from '~/pages/contact/Contact';
import { SITE_NAME, SITE_URL, seo, SOCIAL_URLS } from '~/lib/seo';
import type { Route } from './+types/contact';

export function meta({ params }: Route.MetaArgs) {
    const lang = params.lang ?? 'en-US';
    const title = 'Contact TeaChoco | Get in Touch With a Full-Stack Developer';
    const description =
        'Contact TeaChoco for collaboration, freelance projects or just to say hi. Reach me through GitHub, YouTube, X (Twitter), Facebook, Discord or email.';

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: `Contact ${SITE_NAME}`,
        url: `${SITE_URL}/${lang}/contact`,
        description,
        isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: `${SITE_URL}/${lang}` },
        about: {
            '@type': 'Person',
            name: SITE_NAME,
            email: 'teachocodeveloper@gmail.com',
            sameAs: Object.values(SOCIAL_URLS),
        },
    };

    return seo({
        lang,
        title,
        description,
        keywords:
            'contact TeaChoco, hire developer, freelance developer contact, collab, full-stack developer email, GitHub, Discord, YouTube, developer social links',
        path: '/contact',
        image: '/TeaChoco-Official-logo.png',
        jsonLd,
    });
}

export default function Contact() {
    return <ContactPage />;
}