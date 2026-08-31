import clsx from 'clsx';
import { useCallback, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Skeleton from '~/components/custom/Skeleton';
import type { CharacterItem } from '~/types/favorites';
import BoxTier from './BoxTier';
import { useRandomImage } from '../../hooks/useRandomImage';
import CharacterDetailsCard from './CharacterDetailsCard';
import CharacterDetailsModal from './CharacterDetailsModal';

const POPOVER_GAP = 8;
const POPOVER_WIDTH = 240;
const POPOVER_HEIGHT = 250;

interface CharacterAvatarProps {
    hide?: boolean;
    character: CharacterItem;
}

/**
 * Renders a single character avatar used inside a tier row.
 * Hovering shows a mini details popup; clicking opens a full details modal.
 * Supports multiple images via `character.images`.
 */
export function CharacterAvatar({ hide = false, character }: CharacterAvatarProps) {
    const [loaded, setLoaded] = useState(false);
    const [hover, setHover] = useState(false);
    const [rect, setRect] = useState<DOMRect | null>(null);
    const [open, setOpen] = useState(false);
    const hideTimer = useRef<number | undefined>(undefined);
    const sizeClass = 'w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20';
    const images = character.images ?? [];
    const { image, index } = useRandomImage(images);

    const close = useCallback(() => setOpen(false), []);

    const showPopover = () => {
        if (hideTimer.current) window.clearTimeout(hideTimer.current);
        setHover(true);
    };

    const hidePopover = () => {
        if (hideTimer.current) window.clearTimeout(hideTimer.current);
        hideTimer.current = window.setTimeout(() => setHover(false), 120);
    };

    const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
        setRect(event.currentTarget.getBoundingClientRect());
        showPopover();
    };

    let popoverTop = 0;
    let popoverLeft = 0;
    if (rect && typeof window !== 'undefined') {
        const fitsBelow =
            rect.bottom + POPOVER_GAP + POPOVER_HEIGHT < window.innerHeight - POPOVER_GAP;
        popoverTop = fitsBelow
            ? rect.bottom + POPOVER_GAP
            : Math.max(POPOVER_GAP, rect.top - POPOVER_HEIGHT - POPOVER_GAP);
        popoverLeft = Math.max(
            POPOVER_GAP,
            Math.min(rect.left, window.innerWidth - POPOVER_WIDTH - POPOVER_GAP),
        );
    }

    return (
        !hide && (
            <>
                <button
                    type='button'
                    onClick={() => setOpen(true)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={hidePopover}
                    aria-label={`${character.name} details`}
                    className='flex shrink-0 flex-col items-center justify-center cursor-pointer focus:outline-none'
                >
                    <BoxTier className={clsx(sizeClass)}>
                        {image ? (
                            <>
                                {!loaded && (
                                    <Skeleton className={clsx('absolute inset-0', sizeClass)} />
                                )}
                                {images.map((src, i) => (
                                    <img
                                        key={src}
                                        src={src}
                                        alt={character.name}
                                        onLoad={() => setLoaded(true)}
                                        className={clsx(
                                            'absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out',
                                            i === index ? 'opacity-100' : 'opacity-0',
                                        )}
                                    />
                                ))}
                            </>
                        ) : (
                            <div
                                className={clsx(
                                    'flex items-center justify-center bg-slate-300 px-1 text-center text-xs font-bold text-slate-700',
                                    sizeClass,
                                )}
                            >
                                {character.name}
                            </div>
                        )}
                    </BoxTier>
                </button>

                {rect &&
                    typeof document !== 'undefined' &&
                    createPortal(
                        <AnimatePresence>
                            {hover && (
                                <motion.div
                                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                                    transition={{ duration: 0.15 }}
                                    onMouseEnter={showPopover}
                                    onMouseLeave={hidePopover}
                                    className='fixed z-40'
                                    style={{ top: popoverTop, left: popoverLeft }}
                                >
                                    <CharacterDetailsCard character={character} variant='mini' />
                                </motion.div>
                            )}
                        </AnimatePresence>,
                        document.body,
                    )}

                {open && (
                    <CharacterDetailsModal isOpen={open} character={character} onClose={close} />
                )}
            </>
        )
    );
}
