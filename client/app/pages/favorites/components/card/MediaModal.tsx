// -Path: 'TeaChoco-Portfolio/client/app/pages/favorites/components/card/MediaModal.tsx'
import { getAssetUrl } from '~/utils/url';
import { useTranslation } from 'react-i18next';
import Rating from '~/components/custom/Rating';
import { Modal } from '~/components/custom/Modal';
import { FaGamepad, FaXmark, FaClapperboard } from 'react-icons/fa6';
import { MediaNames, MediaTypeChips, type MediaItem } from './MediaBits';

interface MediaModalProps {
    item: MediaItem;
    isOpen: boolean;
    onClose: () => void;
    type: 'anime' | 'game';
    ratingType?: 'heart' | 'star';
    getTypeLabel?: (type: string) => string | undefined;
}

/**
 * Full detail view for a media item, opened from a media card.
 */
export default function MediaModal({
    type,
    item,
    isOpen,
    onClose,
    ratingType = 'star',
    getTypeLabel,
}: MediaModalProps) {
    const { t } = useTranslation();
    const typeLabel = t(`favorites.${type}`);
    const title = Object.values(item.names)[0] ?? '';
    const TypeIcon = type === 'anime' ? FaClapperboard : FaGamepad;
    const image = item.image ?? getAssetUrl(`/images/${type}/${item.id}.png`);

    return (
        <Modal size='xl' isOpen={isOpen} onClose={onClose} className='overflow-hidden'>
            <div className='relative flex flex-col sm:flex-row'>
                <button
                    type='button'
                    onClick={onClose}
                    aria-label={t('favorites.close')}
                    className='absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface-elevated/80 text-surface-muted backdrop-blur transition-colors hover:bg-surface-overlay hover:text-surface-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none'
                >
                    <FaXmark className='h-4 w-4' aria-hidden='true' />
                </button>

                <div className='relative aspect-3/4 max-h-[60dvh] w-full shrink-0 overflow-hidden bg-surface-sunken sm:aspect-auto sm:h-auto sm:max-h-none sm:w-56 md:w-96'>
                    <img
                        src={image}
                        alt={title}
                        className='h-full w-full object-cover object-[center_18%]'
                    />
                    <div className='ml-auto w-48 pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 to-transparent sm:bg-linear-to-r sm:from-transparent sm:via-transparent sm:to-surface-elevated' />
                </div>

                <div className='flex min-h-0 min-w-0 flex-1 flex-col gap-4 overflow-y-auto p-6'>
                    <div className='flex items-center gap-2 pr-10 text-xs font-semibold tracking-[0.18em] text-primary uppercase'>
                        <TypeIcon className='h-3.5 w-3.5' aria-hidden='true' />
                        {typeLabel}
                    </div>

                    <header>
                        <MediaNames
                            names={item.names}
                            wrap
                            className='gap-1.5 text-base leading-tight text-surface-foreground'
                            nameWeight='font-semibold'
                        />
                    </header>

                    <MediaTypeChips types={item.type} getTypeLabel={getTypeLabel} />

                    <div className='h-px bg-border' aria-hidden='true' />

                    <Rating type={ratingType} rating={item.rating} />

                    {item.note && (
                        <p className='rounded-xl border-l-2 border-primary/50 bg-primary/5 py-3 pr-3 pl-4 text-sm leading-relaxed text-surface-foreground/80'>
                            {item.note}
                        </p>
                    )}
                </div>
            </div>
        </Modal>
    );
}
