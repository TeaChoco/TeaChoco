// -Path: 'TeaChoco-Portfolio/client/app/pages/favorites/components/card/MediaCard.tsx'
import { getAssetUrl } from '~/utils/url';
import { useQuery } from '~/hooks/useQuery';
import { useEffect, useState } from 'react';
import MediaModal from './MediaModal';
import { Link } from '~/i18n/routing';
import Rating from '~/components/custom/Rating';
import { MediaNames, MediaTypeChips, type MediaItem } from './MediaBits';

interface MediaCardProps {
    href?: string;
    item: MediaItem;
    forceOpen?: boolean;
    interactive?: boolean;
    type: 'anime' | 'game';
    layout?: 'grid' | 'list';
    thumbnailClass?: string;
    ratingType?: 'heart' | 'star';
    textClass?: string;
    contentClass?: string;
    ratingClass?: string;
    chipClass?: string;
    chipBoxClass?: string;
    nameWeight?: 'font-medium' | 'font-semibold';
    getTypeLabel?: (type: string) => string | undefined;
}

/**
 * Media tile (grid or list) that opens a detail modal unless it links somewhere.
 */
export default function MediaCard({
    item,
    type,
    href,
    layout = 'grid',
    thumbnailClass,
    forceOpen = false,
    interactive = true,
    ratingType = 'star',
    textClass,
    contentClass = 'p-5 gap-3',
    ratingClass,
    chipClass,
    chipBoxClass,
    nameWeight = 'font-medium',
    getTypeLabel,
}: MediaCardProps) {
    const isList = layout === 'list';
    const [open, setOpen] = useState(forceOpen);
    const [itemOpen, setItem] = useQuery('item');
    const primaryName = Object.values(item.names)[0] ?? '';

    useEffect(() => {
        setItem(itemOpen);
    }, [itemOpen]);

    const close = () => {
        setItem();
        setOpen(false);
    };

    const content = (
        <>
            <div
                className={`relative shrink-0 overflow-hidden bg-surface-sunken ${
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

            <div className={`@container flex w-full min-w-0 flex-col ${contentClass}`}>
                <MediaNames names={item.names} className={textClass} nameWeight={nameWeight} />
                <div className='@[9rem]:hidden'>
                    <Rating
                        compact
                        type={ratingType}
                        rating={item.rating}
                        sizeClass={ratingClass}
                    />
                </div>
                <div className='hidden @[9rem]:block'>
                    <Rating type={ratingType} rating={item.rating} sizeClass={ratingClass} />
                </div>
                <MediaTypeChips
                    types={item.type}
                    boxClass={chipBoxClass}
                    sizeClass={chipClass}
                    getTypeLabel={getTypeLabel}
                />
                {item.note && (
                    <p className={`line-clamp-2 ${textClass ?? 'text-sm'} text-surface-subtle`}>
                        {item.note}
                    </p>
                )}
            </div>
        </>
    );

    return (
        <>
            {href ? (
                <Link
                    to={href}
                    onClick={() => window.scrollTo(0, 0)}
                    className={`block min-w-0 overflow-hidden rounded-2xl border border-border bg-surface-overlay/50 transition-all duration-200 hover:border-primary-emphasis hover:bg-surface-overlay hover:shadow-lg hover:shadow-primary-emphasis/30 ${
                        isList
                            ? 'flex flex-col items-stretch hover:-translate-y-0.5 sm:flex-row'
                            : 'flex flex-col hover:-translate-y-1'
                    }`}
                >
                    {content}
                </Link>
            ) : (
                <article
                    onClick={() => {
                        if (!interactive) return;
                        setOpen(true);
                        setItem(item.id);
                    }}
                    className={`min-w-0 overflow-hidden rounded-2xl border border-border bg-surface-overlay/50 transition-all duration-200 hover:border-primary-emphasis hover:bg-surface-overlay hover:shadow-lg hover:shadow-primary-emphasis/30 ${
                        isList
                            ? 'flex flex-col items-stretch hover:-translate-y-0.5 sm:flex-row'
                            : 'flex flex-col hover:-translate-y-1'
                    } ${interactive ? 'cursor-pointer' : ''}`}
                >
                    {content}
                </article>
            )}

            <MediaModal
                item={item}
                type={type}
                isOpen={open}
                onClose={close}
                ratingType={ratingType}
                getTypeLabel={getTypeLabel}
            />
        </>
    );
}
