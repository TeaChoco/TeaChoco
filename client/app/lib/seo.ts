//-Path: "TeaChoco-Portfolio/client/src/lib/seo.ts"
import type { MetaDescriptor } from 'react-router';
import type { Lang } from '~/i18n/locales';
import type { LangNames } from '~/types/favorites';

export const SITE_NAME = 'TeaChoco';
export const SITE_URL = 'https://teachoco.dev';
export const TWITTER_HANDLE = '@TeaChocolater';
export const DEFAULT_OG_IMAGE = '/TeaChoco-logo.png';

export const SOCIAL_URLS = {
    github: 'https://github.com/TeaChoco',
    youtube: 'https://youtube.com/@TeaChoco',
    twitter: 'https://x.com/TeaChocolater',
    facebook: 'https://facebook.com/TeaChocoLater',
    discord: 'https://discord.com/users/499788896184565760/',
};

type SeoOptions = {
    lang?: string;
    title: string;
    description: string;
    keywords?: string;
    path: string;
    image?: string;
    type?: string;
    noIndex?: boolean;
    jsonLd?: Record<string, unknown>;
};

export function seo(options: SeoOptions): MetaDescriptor[] {
    const lang = options.lang ?? 'en-US';
    const canonical = `${SITE_URL}/${lang}${options.path}`;
    const image = options.image ?? DEFAULT_OG_IMAGE;
    const ogImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;
    const type = options.type ?? 'website';

    const meta: MetaDescriptor[] = [
        { title: options.title },
        { name: 'description', content: options.description },
        { name: 'robots', content: options.noIndex ? 'noindex, nofollow' : 'index, follow' },
        { name: 'author', content: SITE_NAME },
        { property: 'og:site_name', content: SITE_NAME },
        { property: 'og:type', content: type },
        { property: 'og:title', content: options.title },
        { property: 'og:description', content: options.description },
        { property: 'og:url', content: canonical },
        { property: 'og:image', content: ogImage },
        { property: 'og:locale', content: lang },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: TWITTER_HANDLE },
        { name: 'twitter:title', content: options.title },
        { name: 'twitter:description', content: options.description },
        { name: 'twitter:image', content: ogImage },
        { tagName: 'link', rel: 'canonical', href: canonical },
    ];

    if (options.keywords) meta.push({ name: 'keywords', content: options.keywords });
    if (options.jsonLd) meta.push({ 'script:ld+json': options.jsonLd });

    return meta;
}

export function localizedName(names: LangNames, lng: string): string {
    return (
        names[lng as Lang] ??
        names['en-US'] ??
        Object.values(names)[0] ??
        ''
    );
}

export function personJsonLd(lang?: string): Record<string, unknown> {
    const lng = lang ?? 'en-US';
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: SITE_NAME,
        url: `${SITE_URL}/${lng}/about`,
        jobTitle: 'Full-Stack Developer',
        knowsAbout: [
            'TypeScript',
            'React',
            'Vite',
            'Node.js',
            'Tailwind CSS',
            'Three.js',
            'Web Development',
        ],
        sameAs: [
            SOCIAL_URLS.github,
            SOCIAL_URLS.youtube,
            SOCIAL_URLS.twitter,
            SOCIAL_URLS.facebook,
            SOCIAL_URLS.discord,
        ],
    };
}