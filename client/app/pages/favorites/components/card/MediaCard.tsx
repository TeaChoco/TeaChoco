import { useState } from 'react';
import { Link } from '~/i18n/routing';
import type { IconType } from 'react-icons';
import Rating from '~/components/custom/Rating';
import { Modal, ModalBody, ModalHeader } from '~/components/custom/Modal';
import type { Lang } from '~/i18n/locales';
import { languageFlags } from '~/data/languageIcon';
import { getAssetUrl } from '~/utils/url';

const LANG_FLAG: Record<string, keyof typeof languageFlags> = {
    en: 'US',
    th: 'TH',
    ja: 'JP',
    zh: 'CN',
};

export interface MediaItem {
    id: string;
    names: Partial<Record<Lang, string>>;
    rating: number | null;
    note?: string;
    image?: string | null;
    type?: string[];
}

interface MediaCardProps {
    href?: string;
    item: MediaItem;
    forceOpen?: boolean;
    interactive?: boolean;
    type: 'anime' | 'game';
    layout?: 'grid' | 'list';
    thumbnailClass?: string;
    ratingType?: 'heart' | 'star';
    nameWeight?: 'font-medium' | 'font-semibold';
    getTypeLabel?: (type: string) => string | undefined;
}

function TypeChips({
    types,
    getTypeLabel,
}: {
    types?: string[];
    getTypeLabel?: (type: string) => string | undefined;
}) {
    if (!types || types.length === 0) return null;
    const labels = types
        .map((type) => ({ type, label: getTypeLabel?.(type) }))
        .filter((t) => t.label);
    if (labels.length === 0) return null;
    return (
        <div className='mt-1 flex flex-wrap gap-1'>
            {labels.map(({ type, label }) => (
                <span
                    key={type}
                    className='rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary-light dark:text-primary-dark'
                >
                    {label}
                </span>
            ))}
        </div>
    );
}

function Names({
    names,
    nameWeight = 'font-medium',
    className = '',
}: {
    names: MediaItem['names'];
    nameWeight?: 'font-medium' | 'font-semibold';
    className?: string;
}) {
    return (
        <div className={`min-w-0 flex flex-col gap-0.5 ${className}`}>
            {Object.entries(names).map(([lang, name]) => {
                const Flag: IconType | undefined = languageFlags[LANG_FLAG[lang]];
                return (
                    <div key={lang} className='flex items-center gap-2 leading-snug'>
                        {Flag ? <Flag className='h-3 w-4 shrink-0 rounded-xs' /> : null}
                        <span className={`leading-tight ${nameWeight}`}>{name}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default function MediaCard({
    item,
    type,
    href,
    layout = 'grid',
    thumbnailClass,
    forceOpen = false,
    interactive = true,
    ratingType = 'star',
    nameWeight = 'font-medium',
    getTypeLabel,
}: MediaCardProps) {
    const primaryName = Object.values(item.names)[0] ?? '';
    const isList = layout === 'list';
    const [open, setOpen] = useState(forceOpen);

    const content = (
        <>
            <div
                className={`relative shrink-0 overflow-hidden bg-surface-overlay-light dark:bg-surface-overlay-dark ${
                    isList
                        ? `aspect-video w-full sm:aspect-square ${thumbnailClass ?? 'sm:w-32'}`
                        : 'aspect-3/4 w-full'
                }`}
            >
                <img
                    loading='lazy'
                    alt={primaryName}
                    src={item.image ? item.image : getAssetUrl(`/images/${type}/${item.id}.png`)}
                    className='absolute inset-0 w-full transition-transform duration-300 hover:scale-105'
                />
            </div>

            <div className='flex w-full min-w-0 flex-col gap-3 p-5'>
                <Names names={item.names} nameWeight={nameWeight} />
                <TypeChips types={item.type} getTypeLabel={getTypeLabel} />
                {item.note && (
                    <p className='text-sm text-text-secondary-light dark:text-text-secondary-dark'>
                        {item.note}
                    </p>
                )}
                <Rating type={ratingType} rating={item.rating} />
            </div>
        </>
    );

    return (
        <>
            {href ? (
                <Link
                    to={href}
                    onClick={() => window.scrollTo(0, 0)}
                    className={`block overflow-hidden rounded-2xl border border-border bg-surface-overlay/50 transition-all duration-200 hover:border-primary-emphasis hover:bg-surface-overlay hover:shadow-lg hover:shadow-primary-emphasis/30 ${
                        isList
                            ? 'flex flex-col items-stretch hover:-translate-y-0.5 sm:flex-row'
                            : 'flex flex-col hover:-translate-y-1'
                    }`}
                >
                    {content}
                </Link>
            ) : (
                <article
                    onClick={interactive ? () => setOpen(true) : undefined}
                    className={`overflow-hidden rounded-2xl border border-border bg-surface-overlay/50 transition-all duration-200 hover:border-primary-emphasis hover:bg-surface-overlay hover:shadow-lg hover:shadow-primary-emphasis/30 ${
                        isList
                            ? 'flex flex-col items-stretch hover:-translate-y-0.5 sm:flex-row'
                            : 'flex flex-col hover:-translate-y-1'
                    } ${interactive ? 'cursor-pointer' : ''}`}
                >
                    {content}
                </article>
            )}

            <Modal isOpen={open} onClose={() => setOpen(false)} size='lg'>
                <ModalHeader title={primaryName} onClose={() => setOpen(false)} />
                <ModalBody>
                    <div className='flex flex-col gap-5'>
                        {item.image && (
                            <div className='mx-auto flex w-full max-w-xs overflow-hidden rounded-xl bg-surface-overlay-light dark:bg-surface-overlay-dark'>
                                <img
                                    src={item.image}
                                    alt={primaryName}
                                    className='aspect-3/4 w-full object-cover'
                                />
                            </div>
                        )}
                        <Names names={item.names} nameWeight={nameWeight} className='gap-1.5' />
                        <TypeChips types={item.type} getTypeLabel={getTypeLabel} />
                        {item.note && (
                            <p className='text-sm leading-relaxed text-text-secondary-light dark:text-text-secondary-dark'>
                                {item.note}
                            </p>
                        )}
                        <Rating type={ratingType} rating={item.rating} />
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
}
