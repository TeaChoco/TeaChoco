import clsx from 'clsx';
import type { CharacterItem, CharacterTier } from '~/types/favorites';
import { TIER_STYLES } from '~/constants/Tier';
import { CharacterAvatar } from './CharacterAvatar';
import BoxTier from './BoxTier';

export type TierRowAxis = 'both' | 'favorite' | 'waifu';

interface TierRowProps {
    tier: CharacterTier;
    waifuCharacters: CharacterItem[];
    favoriteCharacters: CharacterItem[];
    style?: (typeof TIER_STYLES)[CharacterTier];
    axis?: TierRowAxis;
}

/**
 * Renders one row of the tier board.
 * The dual-axis view puts the "favorite" axis on the left (growing outward
 * from the center badge) and the "waifu" axis on the right. In single-axis
 * view the badge sits on the outer edge so characters still grow outward
 * from it, mirroring the dual layout.
 */
export function TierRow({
    tier,
    style,
    axis = 'both',
    favoriteCharacters,
    waifuCharacters,
}: TierRowProps) {
    const tierStyle = style || TIER_STYLES[tier];
    const badge = <BoxTier className={clsx(tierStyle.bg, tierStyle.text)}>{tierStyle.label}</BoxTier>;

    if (axis === 'favorite') {
        return (
            <div className='flex w-full min-h-12 sm:min-h-16 lg:min-h-20 bg-surface-overlay'>
                <div className='flex flex-1 flex-row-reverse flex-wrap items-start justify-start'>
                    {favoriteCharacters.map((character) => (
                        <CharacterAvatar key={character.id} character={character} />
                    ))}
                </div>
                {badge}
            </div>
        );
    }

    if (axis === 'waifu') {
        return (
            <div className='flex w-full min-h-12 sm:min-h-16 lg:min-h-20 bg-surface-overlay'>
                {badge}
                <div className='flex flex-1 flex-row flex-wrap items-start justify-start'>
                    {waifuCharacters.map((character) => (
                        <CharacterAvatar key={character.id} character={character} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className='flex w-full min-h-12 sm:min-h-16 lg:min-h-20 bg-surface-overlay'>
            <div className='flex flex-1 flex-row-reverse flex-wrap items-start justify-start'>
                {favoriteCharacters.map((character) => (
                    <CharacterAvatar key={character.id} character={character} />
                ))}
            </div>

            {badge}

            <div className='flex flex-1 flex-row flex-wrap items-start justify-start'>
                {waifuCharacters.map((character) => (
                    <CharacterAvatar key={character.id} character={character} />
                ))}
            </div>
        </div>
    );
}
