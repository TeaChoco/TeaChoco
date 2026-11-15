// -Path: 'TeaChoco-Portfolio/client/scripts/optimize-images.mjs'
import sharp from 'sharp';
import { stat, readdir, mkdir, writeFile, unlink, readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/** Widths written for every poster; wider-than-source targets are skipped. */
const TARGET_WIDTHS = [300, 600];
/** Formats written per width: AVIF first (smallest), WebP as the fallback. */
const FORMATS = ['avif', 'webp'];
/** Encoding cost per format, tuned for poster art shown at card size. */
const QUALITY = { avif: 50, webp: 80 };
/** Tiny blurred preview used as the card background while the real image loads. */
const LQIP = { width: 16, quality: 40 };
/** Source folders (originals, not deployed) mapped to their served targets. */
const FOLDERS = [
    { type: 'anime', source: 'assets/posters/anime', output: 'public/images/anime' },
    { type: 'game', source: 'assets/posters/game', output: 'public/images/game' },
];
/** Optional comma-separated ids for a partial run, e.g. `ONLY=anime-1 pnpm images`. */
const ONLY = process.env.ONLY?.split(',').map((id) => id.trim()).filter(Boolean);
/** Generated LQIP map consumed by `MediaPicture`. */
const LQIP_FILE = 'app/data/favorites/image-lqip.ts';
/** Machine-readable copy, kept between runs so partial runs cannot wipe entries. */
const LQIP_JSON = 'assets/posters/image-lqip.json';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/**
 * Writes one encoded variant and returns its byte size.
 *
 * @param source - Absolute path of the source image.
 * @param output - Absolute path of the variant.
 * @param width - Target width in pixels.
 * @param format - `avif` or `webp`.
 * @returns The number of bytes written.
 */
async function writeVariant(source, output, width, format) {
    const buffer = await sharp(source)
        .resize({ width, withoutEnlargement: true })
        .toFormat(format, { quality: QUALITY[format] })
        .toBuffer();

    await writeFile(output, buffer);

    return buffer.length;
}

/**
 * Builds the inline blurred placeholder for one image.
 *
 * @param source - Absolute path of the source image.
 * @returns A `data:image/webp;base64,...` string.
 */
async function buildLqip(source) {
    const buffer = await sharp(source)
        .resize({ width: LQIP.width })
        .blur(1)
        .webp({ quality: LQIP.quality })
        .toBuffer();

    return `data:image/webp;base64,${buffer.toString('base64')}`;
}

/**
 * Warns about gaps in the numeric image sequence, which usually means a data
 * entry and its poster file drifted apart.
 *
 * @param type - Folder name (`anime` or `game`).
 * @param bases - File base names found in that folder.
 */
function reportGaps(type, bases) {
    const numbers = bases
        .map((base) => Number(base.replace(/^\D+/, '')))
        .filter((value) => Number.isFinite(value))
        .sort((a, b) => a - b);

    /** Numbers missing between 1 and the highest one present. */
    const missing = [];
    for (let index = 1; index <= (numbers.at(-1) ?? 0); index += 1) {
        if (!numbers.includes(index)) missing.push(`${type}-${index}`);
    }

    if (missing.length > 0) console.warn(`images: warning, no poster for ${missing.join(', ')}`);
}

/**
 * Converts every source image into responsive AVIF/WebP variants and collects
 * one blurred placeholder per image.
 *
 * @returns Resolves with the LQIP entries, keyed by `<folder>/<name>`.
 */
async function main() {
    let before = 0;
    let after = 0;
    let count = 0;
    /** Placeholder data written to {@link LQIP_FILE}, merged over the previous run. */
    const lqipEntries = await readFile(resolve(ROOT, LQIP_JSON), 'utf8')
        .then((raw) => JSON.parse(raw))
        .catch(() => ({}));

    for (const folder of FOLDERS) {
        const dir = resolve(ROOT, folder.source);
        const out = resolve(ROOT, folder.output);
        /** Folder name used as the LQIP map prefix (`anime` or `game`). */
        const type = folder.type;
        /** Source files in this folder (PNG or JPEG). */
        const files = (await readdir(dir).catch(() => [])).filter((file) =>
            /\.(png|jpe?g)$/i.test(file),
        );

        if (files.length === 0) {
            console.warn(`images: no sources in ${folder.source}, skipped`);
            continue;
        }

        for (const file of files) {
            const source = join(dir, file);
            const base = file.replace(/\.(png|jpe?g)$/i, '');

            if (ONLY && !ONLY.includes(base)) continue;

            /** Each poster owns a folder: `public/images/<type>/<id>/<width>.<format>`. */
            const target = join(out, base);
            const meta = await sharp(source).metadata();
            const widths = TARGET_WIDTHS.filter((width) => width <= (meta.width ?? 0));
            const targets = widths.length > 0 ? widths : [meta.width ?? TARGET_WIDTHS[0]];

            before += (await stat(source)).size;
            await mkdir(target, { recursive: true });

            for (const width of targets) {
                for (const format of FORMATS) {
                    after += await writeVariant(
                        source,
                        join(target, `${width}.${format}`),
                        width,
                        format,
                    );
                }
            }

            lqipEntries[`${type}/${base}`] = {
                lqip: await buildLqip(source),
                widths: targets,
            };

            /** Flat files written by the older layout; removed so nothing dangles. */
            const stale = [join(out, `${base}.webp`)];
            for (const width of TARGET_WIDTHS) {
                for (const format of FORMATS) stale.push(join(out, `${base}-${width}.${format}`));
            }
            await Promise.all(stale.map((path) => unlink(path).catch(() => {})));

            count += 1;
        }

        reportGaps(type, files.map((file) => file.replace(/\.(png|jpe?g)$/i, '')));
    }

    const header = [
        '// -Path: \'TeaChoco-Portfolio/client/app/data/favorites/image-lqip.ts\'',
        '',
        '/** Blurred placeholder and generated widths for one poster image. */',
        'export type ImageLqip = {',
        '    /** Inline `data:image/webp` preview shown while the poster loads. */',
        '    lqip: string;',
        '    /** Widths that actually exist on disk, ascending. */',
        '    widths: number[];',
        '};',
        '',
        '/** Generated by `pnpm images` — do not edit by hand. */',
        `export const imageLqip: Record<string, ImageLqip> = ${JSON.stringify(lqipEntries, null, 4)};`,
        '',
    ].join('\n');

    await writeFile(resolve(ROOT, LQIP_FILE), header);
    await writeFile(resolve(ROOT, LQIP_JSON), `${JSON.stringify(lqipEntries, null, 4)}\n`);

    console.log(
        `images: ${count} sources, ${(before / 1e6).toFixed(1)}MB -> ${(after / 1e6).toFixed(1)}MB across ${count * TARGET_WIDTHS.length * FORMATS.length} variants`,
    );
    console.log(`images: placeholders written to ${LQIP_FILE}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
