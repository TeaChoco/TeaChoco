// -Path: 'TeaChoco-Portfolio/client/app/pages/favorites/components/card/MediaPicture.tsx'
import type { CSSProperties } from 'react';
import { getAssetUrl } from '~/utils/url';
import { imageLqip } from '~/data/favorites/image-lqip';

/** Props for {@link MediaPicture}. */
interface MediaPictureProps {
    /** Poster file id, e.g. `anime-1`. */
    id: string;
    /** Media folder the poster lives in. */
    type: 'anime' | 'game';
    /** Accessible name of the media item. */
    alt: string;
    /** `sizes` attribute matching the rendered width. */
    sizes: string;
    /** Extra classes for the `<img>` element. */
    className?: string;
    /** Skips lazy loading for above-the-fold or on-demand images. */
    priority?: boolean;
}

/** Default image classes: fill the parent box and crop around the face area. */
const DEFAULT_CLASS = 'h-full w-full object-cover object-[center_18%]';
/** Classes applied while the real poster is still downloading. */
const FADE_CLASS = 'opacity-0 transition-opacity duration-500 data-[loaded=true]:opacity-100';

/**
 * Builds the inline blurred-preview style for a poster container.
 *
 * @param key - LQIP map key, `<type>/<id>`.
 * @returns Inline style, or `undefined` when no placeholder exists.
 */
export function lqipStyle(key: string): CSSProperties | undefined {
    const entry = imageLqip[key];
    if (!entry) return undefined;

    return {
        backgroundImage: `url(${entry.lqip})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 18%',
    };
}

/**
 * Responsive poster image: AVIF first, WebP fallback, with a blurred inline
 * placeholder and a fade-in once the real file arrives.
 *
 * @param props - Poster identity, sizes and styling.
 * @returns The `<picture>` element, or a plain image when no variants exist.
 */
export default function MediaPicture({
    id,
    type,
    alt,
    sizes,
    priority,
    className = DEFAULT_CLASS,
}: MediaPictureProps) {
    const key = `${type}/${id}`;
    const base = `/images/${type}/${id}`;
    /** Widths that exist on disk, ascending. */
    const widths = imageLqip[key]?.widths ?? [];

    if (widths.length === 0) {
        return (
            <img
                alt={alt}
                src={getAssetUrl(`${base}/600.webp`)}
                loading={priority ? 'eager' : 'lazy'}
                className={`${className} ${FADE_CLASS}`}
                onLoad={(event) => {
                    event.currentTarget.dataset.loaded = 'true';
                }}
            />
        );
    }

    /** Source set for one format, using the generated widths as descriptors. */
    const srcSet = (format: 'avif' | 'webp') =>
        widths.map((width) => `${getAssetUrl(`${base}/${width}.${format}`)} ${width}w`).join(', ');

    return (
        <picture>
            <source type='image/avif' srcSet={srcSet('avif')} sizes={sizes} />
            <source type='image/webp' srcSet={srcSet('webp')} sizes={sizes} />
            <img
                alt={alt}
                sizes={sizes}
                loading={priority ? 'eager' : 'lazy'}
                decoding='async'
                src={getAssetUrl(`${base}/${widths[widths.length - 1]}.webp`)}
                className={`${className} ${FADE_CLASS}`}
                onLoad={(event) => {
                    event.currentTarget.dataset.loaded = 'true';
                }}
            />
        </picture>
    );
}
