import clsx from 'clsx';
import { useState } from 'react';
import Skeleton from '~/components/custom/Skeleton';
import type { CharacterItem } from '~/types/favorites';

interface CharacterAvatarProps {
    character: CharacterItem;
    /** Show the character's name under the avatar. Default: false. */
    showName?: boolean;
    size?: 'sm' | 'md';
}

/**
 * Renders a single character avatar used inside a tier row.
 * Shows a loading skeleton until the image finishes loading, and exposes
 * the character's name and source (anime/game) as a hover tooltip.
 */
export function CharacterAvatar({
    character,
    size = 'md',
    showName = false,
}: CharacterAvatarProps) {
    const [loaded, setLoaded] = useState(false);
    const sizeClass = size === 'sm' ? 'w-14 h-14' : 'w-20 h-20';
    const source = character.from.anime ?? character.from.game ?? 'Unknown';

    return (
        <div
            title={`${character.name} · ${source}`}
            className='flex shrink-0 flex-col items-center justify-center border border-border'
        >
            <div className={clsx('relative rounded-md overflow-hidden', sizeClass)}>
                {character.image ? (
                    <>
                        {!loaded && <Skeleton className={clsx('absolute inset-0', sizeClass)} />}
                        <img
                            src={character.image}
                            alt={character.name}
                            onLoad={() => setLoaded(true)}
                            className={clsx(
                                'border border-black/10 object-cover transition-opacity duration-200',
                                sizeClass,
                                loaded ? 'opacity-100' : 'opacity-0',
                            )}
                        />
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
            </div>
            {showName && (
                <span className='mt-1 max-w-22 truncate text-[10px] text-slate-100'>
                    {character.name}
                </span>
            )}
        </div>
    );
}
