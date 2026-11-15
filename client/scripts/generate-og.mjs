// -Path: 'TeaChoco-Portfolio/client/scripts/generate-og.mjs'
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/** Repository-relative paths used by the generator. */
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DATA_FILE = resolve(ROOT, 'app/data/projects.ts');
const LOCALE_FILE = resolve(ROOT, 'app/i18n/locales/en.json');
const LOGO_FILE = resolve(ROOT, 'public/TeaChoco-Developer-logo.png');
const FONT_DIR = resolve(ROOT, 'scripts/og/fonts');
const OUT_DIR = resolve(ROOT, 'public/og');

/** Card size used by Open Graph consumers such as X, Facebook and Discord. */
const WIDTH = 1200;
const HEIGHT = 630;

/** Palette taken from the design tokens in `app/app.css`. */
const COLORS = {
    ink: '#0f0b1a',
    text: '#f5f3ff',
    muted: '#b8b0d0',
    primary: '#a78bfa',
    secondary: '#f472b6',
    chip: 'rgba(167, 139, 250, 0.16)',
    chipBorder: 'rgba(167, 139, 250, 0.45)',
};

/**
 * Reads the static project list and extracts the fields the card needs.
 *
 * @returns Minimal project records with id, i18n key and tags.
 */
async function readProjects() {
    const source = await readFile(DATA_FILE, 'utf8');
    /** Every object literal in the exported array. */
    const blocks = source.split(/\n    \{\n/).slice(1);

    return blocks.map((block) => {
        const id = block.match(/^\s*id:\s*'([^']+)'/m)?.[1];
        const key = block.match(/^\s*key:\s*'([^']+)'/m)?.[1];
        const tags = block
            .match(/^\s*tags:\s*\[([\s\S]*?)\]/m)?.[1]
            ?.split(',')
            .map((tag) => tag.trim().replace(/^'|'$/g, ''))
            .filter(Boolean);

        if (!id || !key) throw new Error(`Could not parse a project block: ${block.slice(0, 80)}`);

        return { id, key, tags: tags ?? [] };
    });
}

/**
 * Truncates text to a character budget, keeping whole words when possible.
 *
 * @param value - Source text.
 * @param limit - Maximum number of characters.
 * @returns The original text or a shortened copy ending with an ellipsis.
 */
function clamp(value, limit) {
    if (value.length <= limit) return value;
    return `${value.slice(0, limit - 1).replace(/[\s,.;:-]+\S*$/, '')}…`;
}

/**
 * Builds the satori node tree for one project card.
 *
 * @param project - Parsed project record.
 * @param locale - English translations used for the title and summary.
 * @param logo - Data URI of the site logo.
 * @returns A satori-compatible element tree.
 */
function buildCard(project, locale, logo) {
    const text = locale.portfolio.projects[project.key] ?? {};
    const title = clamp(text.title ?? project.id, 44);
    const desc = clamp(text.desc ?? '', 150);
    const tags = project.tags.slice(0, 5);

    return {
        type: 'div',
        props: {
            style: {
                width: `${WIDTH}px`,
                height: `${HEIGHT}px`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '64px 72px',
                fontFamily: 'Inter',
                color: COLORS.text,
                backgroundImage: `linear-gradient(135deg, ${COLORS.ink} 0%, #1b1330 55%, #2b1742 100%)`,
            },
            children: [
                {
                    type: 'div',
                    props: {
                        style: { display: 'flex', alignItems: 'center', gap: '20px' },
                        children: [
                            {
                                type: 'img',
                                props: {
                                    src: logo,
                                    width: 64,
                                    height: 64,
                                    style: { borderRadius: '16px' },
                                },
                            },
                            {
                                type: 'div',
                                props: {
                                    style: { display: 'flex', flexDirection: 'column' },
                                    children: [
                                        {
                                            type: 'div',
                                            props: {
                                                style: { fontSize: '30px', fontWeight: 700 },
                                                children: 'TeaChoco',
                                            },
                                        },
                                        {
                                            type: 'div',
                                            props: {
                                                style: {
                                                    fontSize: '20px',
                                                    color: COLORS.muted,
                                                    letterSpacing: '1px',
                                                },
                                                children: 'PORTFOLIO',
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
                {
                    type: 'div',
                    props: {
                        style: { display: 'flex', flexDirection: 'column', gap: '24px' },
                        children: [
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        display: 'flex',
                                        fontSize: '68px',
                                        fontWeight: 700,
                                        lineHeight: 1.08,
                                        letterSpacing: '-1.5px',
                                    },
                                    children: title,
                                },
                            },
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        display: 'flex',
                                        fontSize: '28px',
                                        color: COLORS.muted,
                                        lineHeight: 1.4,
                                    },
                                    children: desc,
                                },
                            },
                        ],
                    },
                },
                {
                    type: 'div',
                    props: {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '24px',
                        },
                        children: [
                            {
                                type: 'div',
                                props: {
                                    style: { display: 'flex', flexWrap: 'wrap', gap: '12px' },
                                    children: tags.map((tag) => ({
                                        type: 'div',
                                        props: {
                                            style: {
                                                display: 'flex',
                                                padding: '10px 20px',
                                                borderRadius: '999px',
                                                fontSize: '22px',
                                                fontWeight: 500,
                                                color: COLORS.primary,
                                                backgroundColor: COLORS.chip,
                                                border: `2px solid ${COLORS.chipBorder}`,
                                            },
                                            children: tag,
                                        },
                                    })),
                                },
                            },
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        display: 'flex',
                                        fontSize: '24px',
                                        fontWeight: 700,
                                        color: COLORS.secondary,
                                    },
                                    children: 'teachoco.dev',
                                },
                            },
                        ],
                    },
                },
            ],
        },
    };
}

/**
 * Generates one PNG Open Graph image per project into `public/og`.
 *
 * @returns Resolves once every image has been written.
 */
async function main() {
    const [projects, localeSource, logo] = await Promise.all([
        readProjects(),
        readFile(LOCALE_FILE, 'utf8'),
        readFile(LOGO_FILE),
    ]);
    const locale = JSON.parse(localeSource);
    const logoUri = `data:image/png;base64,${logo.toString('base64')}`;
    const fonts = await Promise.all(
        [400, 500, 700].map(async (weight) => ({
            name: 'Inter',
            weight,
            style: 'normal',
            data: await readFile(resolve(FONT_DIR, `inter-${weight}.woff`)),
        })),
    );

    await mkdir(OUT_DIR, { recursive: true });

    for (const project of projects) {
        const svg = await satori(buildCard(project, locale, logoUri), {
            width: WIDTH,
            height: HEIGHT,
            fonts,
        });
        const png = new Resvg(svg, { fitTo: { mode: 'width', value: WIDTH } }).render().asPng();

        await writeFile(resolve(OUT_DIR, `portfolio-${project.id}.png`), png);
        console.log(`og: portfolio-${project.id}.png`);
    }

    console.log(`og: ${projects.length} images written to public/og`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
