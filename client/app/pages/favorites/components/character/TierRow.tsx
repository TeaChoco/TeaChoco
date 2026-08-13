import clsx from 'clsx';
import type { CharacterItem, CharacterTier } from '~/types/favorites';
import { TIER_STYLES } from '~/constants/Tier';
import { CharacterAvatar } from './CharacterAvatar';

interface TierRowProps {
    tier: CharacterTier;
    favoriteCharacters: CharacterItem[];
    waifuCharacters: CharacterItem[];
    showName?: boolean;
    style?: (typeof TIER_STYLES)[CharacterTier];
}

/**
 * Renders one row of the dual-axis tier board.
 * The left half lists characters ranked at this tier on the "favorite" axis
 * (growing outward from the center), the right half lists characters ranked
 * at this tier on the "waifu" axis, with the tier badge fixed in the middle.
 */
export function TierRow({
    tier,
    favoriteCharacters,
    waifuCharacters,
    showName,
    style,
}: TierRowProps) {
    const tierStyle = style || TIER_STYLES[tier];

    return (
        <div className='flex w-full min-h-20 bg-surface-overlay'>
            <div className='flex flex-1 flex-row-reverse flex-wrap items-center justify-start'>
                {favoriteCharacters.map((character) => (
                    <CharacterAvatar key={character.id} character={character} showName={showName} />
                ))}
            </div>

            <div
                className={clsx(
                    'flex w-20 shrink-0 items-center justify-center text-xl font-extrabold border border-border rounded-md',
                    tierStyle.bg,
                    tierStyle.text,
                )}
            >
                {tierStyle.label}
            </div>

            <div className='flex flex-1 flex-row flex-wrap items-center justify-start'>
                {waifuCharacters.map((character) => (
                    <CharacterAvatar key={character.id} character={character} showName={showName} />
                ))}
            </div>
        </div>
    );
}
