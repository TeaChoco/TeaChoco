// -Path: 'TeaChoco-Portfolio/client/app/pages/favorites/components/card/MediaBits.tsx'
import type { IconType } from 'react-icons';
import type { Lang } from '~/i18n/locales';
import { languageFlags } from '~/data/languageIcon';

/** Maps i18n locale codes to the flag icon key used by `languageFlags`. */
export const LANG_FLAG: Record<string, keyof typeof languageFlags> = {
    en: 'US',
    th: 'TH',
    ja: 'JP',
    zh: 'CN',
};

/** Minimal media record shared by the media card and its detail modal. */
export interface MediaItem {
    id: string;
    note?: string;
    type?: string[];
    image?: string | null;
    rating: number | null;
    names: Partial<Record<Lang, string>>;
}

interface MediaNamesProps {
    names: MediaItem['names'];
    wrap?: boolean;
    className?: string;
    skipFirst?: boolean;
    nameWeight?: 'font-medium' | 'font-semibold';
}

/**
 * Renders localized names with their language flags, in the stored order.
 * One row per language; rows truncate by default or wrap when `wrap` is set.
 */
export function MediaNames({
    names,
    wrap = false,
    className = '',
    skipFirst = false,
    nameWeight = 'font-medium',
}: MediaNamesProps) {
    const entries = Object.entries(names).slice(skipFirst ? 1 : 0);

    return (
        <div className={`flex w-full min-w-0 flex-col gap-0.5 ${className}`}>
            {entries.map(([lang, name]) => {
                const Flag: IconType | undefined = languageFlags[LANG_FLAG[lang]];
                return (
                    <div
                        key={lang}
                        className={`flex min-w-0 gap-2 leading-snug ${wrap ? 'items-start' : 'items-center'}`}
                    >
                        {Flag ? (
                            <Flag
                                className={`h-3 w-4 shrink-0 rounded-xs ${wrap ? 'mt-1' : ''}`}
                                aria-hidden='true'
                            />
                        ) : null}
                        <span
                            className={`${wrap ? 'break-words' : 'truncate'} leading-tight ${nameWeight}`}
                        >
                            {name}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

interface MediaTypeChipsProps {
    types?: string[];
    boxClass?: string;
    sizeClass?: string;
    getTypeLabel?: (type: string) => string | undefined;
}

/**
 * Renders one tinted pill per resolvable media type.
 * `boxClass` can cap the container height (the card keeps two rows).
 */
export function MediaTypeChips({
    types,
    boxClass = '',
    sizeClass = 'h-5 px-2.5 text-xs',
    getTypeLabel,
}: MediaTypeChipsProps) {
    if (!types || types.length === 0) return null;

    const labels = types
        .map((type) => ({ type, label: getTypeLabel?.(type) }))
        .filter((entry) => entry.label);

    if (labels.length === 0) return null;

    return (
        <div className={`flex flex-wrap gap-1.5 ${boxClass}`}>
            {labels.map(({ type, label }) => (
                <span
                    key={type}
                    className={`inline-flex items-center rounded-full border border-primary/20 bg-primary/10 font-medium text-primary ${sizeClass}`}
                >
                    {label}
                </span>
            ))}
        </div>
    );
}
