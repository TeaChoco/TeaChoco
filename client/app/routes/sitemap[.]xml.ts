// -Path: 'TeaChoco-Portfolio/client/app/routes/sitemap[.]xml.ts'
import { SITE_URL } from '~/lib/seo';
import { projects } from '~/data/projects';
import { SUPPORTED_LANGS } from '~/i18n/locales';

/** Locale used for the `x-default` alternate links. */
const DEFAULT_LANG = 'en';

/** Pages that exist once per locale; the root page is the empty string. */
const STATIC_PATHS = [
    '',
    '/about',
    '/contact',
    '/portfolio',
    '/favorites',
    '/favorites/mv',
    '/favorites/game',
    '/favorites/anime',
    '/favorites/character',
];

/** Every indexable path: static pages plus one page per project. */
const PATHS = [...STATIC_PATHS, ...projects.map((project) => `/portfolio/${project.id}`)];

/**
 * Builds the absolute URL of a path in one locale.
 *
 * @param lang - Supported locale code.
 * @param path - Path without the locale prefix; the root page is `''`.
 * @returns Absolute URL used by the sitemap and the canonical tags.
 */
function absoluteUrl(lang: string, path: string) {
    return `${SITE_URL}/${lang}${path}`;
}

/**
 * Renders one `<url>` entry together with its hreflang alternates, so search
 * engines treat the five locales as one page instead of duplicates.
 *
 * @param lang - Locale of this entry.
 * @param path - Path the entry points at.
 * @returns The serialized `<url>` element, indented with four spaces.
 */
function urlEntry(lang: string, path: string) {
    /** `hreflang` alternates covering every supported locale plus the default. */
    const alternates = [
        ...SUPPORTED_LANGS.map(
            (code) => `        <xhtml:link rel="alternate" hreflang="${code}" href="${absoluteUrl(code, path)}" />`,
        ),
        `        <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(DEFAULT_LANG, path)}" />`,
    ];

    return ['    <url>', `        <loc>${absoluteUrl(lang, path)}</loc>`, ...alternates, '    </url>'].join(
        '\n',
    );
}

/**
 * Serves `/sitemap.xml` generated from the real route list and project data.
 *
 * @returns An XML sitemap response covering every page in every locale.
 */
export function loader() {
    /** One entry per page and locale pair. */
    const entries = PATHS.flatMap((path) => SUPPORTED_LANGS.map((lang) => urlEntry(lang, path)));

    /** Complete sitemap document. */
    const xml = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
        ...entries,
        '</urlset>',
        '',
    ].join('\n');

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
        },
    });
}
