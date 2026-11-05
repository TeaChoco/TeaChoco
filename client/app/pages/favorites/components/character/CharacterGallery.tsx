// -Path: 'TeaChoco-Portfolio/client/app/pages/favorites/components/character/CharacterGallery.tsx'
import clsx from 'clsx';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaShuffle } from 'react-icons/fa6';

interface CharacterGalleryProps {
    name: string;
    images: string[];
}

const CONTROL =
    'absolute z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70';

/**
 * Fallback tile shown when a character has no artwork.
 */
export function CharacterPlaceholder({
    name,
    className = '',
}: {
    name: string;
    className?: string;
}) {
    return (
        <div
            className={clsx(
                'flex items-center justify-center bg-surface-sunken px-2 text-center text-sm font-bold text-surface-muted',
                className,
            )}
        >
            {name}
        </div>
    );
}

/**
 * Responsive character gallery: stacked full-width on mobile, fixed column on
 * wider screens, with previous/next, random and thumbnail navigation.
 */
export default function CharacterGallery({ name, images }: CharacterGalleryProps) {
    const [index, setIndex] = useState(0);
    const hasMany = images.length > 1;

    const select = (next: number) => setIndex((next + images.length) % images.length);

    const random = () => {
        if (!hasMany) return;
        let next = index;
        while (next === index) next = Math.floor(Math.random() * images.length);
        setIndex(next);
    };

    return (
        <div className='flex min-w-0 flex-col gap-2'>
            <div className='relative aspect-3/4 max-h-96 w-full overflow-hidden rounded-xl border border-border bg-surface-sunken sm:max-h-none'>
                {images.length === 0 ? (
                    <CharacterPlaceholder name={name} className='absolute inset-0' />
                ) : (
                    <>
                        {images.map((src, i) => (
                            <img
                                key={src}
                                src={src}
                                alt={name}
                                aria-hidden={i !== index}
                                className={clsx(
                                    'absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out',
                                    i === index ? 'opacity-100' : 'opacity-0',
                                )}
                            />
                        ))}
                        {hasMany && (
                            <>
                                <button
                                    type='button'
                                    aria-label='previous'
                                    onClick={() => select(index - 1)}
                                    className={`${CONTROL} left-1.5 top-1/2 -translate-y-1/2`}
                                >
                                    <FaArrowLeft className='text-xs' />
                                </button>
                                <button
                                    type='button'
                                    aria-label='next'
                                    onClick={() => select(index + 1)}
                                    className={`${CONTROL} right-1.5 top-1/2 -translate-y-1/2`}
                                >
                                    <FaArrowRight className='text-xs' />
                                </button>
                                <button
                                    type='button'
                                    aria-label='random'
                                    onClick={random}
                                    className={`${CONTROL} right-1.5 top-1.5`}
                                >
                                    <FaShuffle className='text-xs' />
                                </button>
                            </>
                        )}
                    </>
                )}
            </div>

            {hasMany && (
                <div className='flex gap-1.5 overflow-x-auto pb-1'>
                    {images.map((src, i) => (
                        <button
                            key={src}
                            type='button'
                            aria-label={`show image ${i + 1}`}
                            onClick={() => setIndex(i)}
                            className={clsx(
                                'size-10 shrink-0 cursor-pointer overflow-hidden rounded-md border-2 transition',
                                i === index
                                    ? 'border-primary ring-1 ring-primary'
                                    : 'border-transparent opacity-70 hover:opacity-100',
                            )}
                        >
                            <img src={src} alt='' className='h-full w-full object-cover' />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
