import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
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

const SPRING = { type: 'spring', stiffness: 260, damping: 24 } as const;

function getFlexGrow(axis: TierRowAxis, side: 'favorite' | 'waifu'): number {
    if (axis === 'both') return 1;
    return axis === side ? 1 : 0;
}

/**
 * Renders one row of the tier board.
 * The dual-axis view puts the "favorite" axis on the left (growing outward
 * from the center badge) and the "waifu" axis on the right. In single-axis
 * view the badge sits on the outer edge so characters still grow outward
 * from it, mirroring the dual layout. The active side's flex-grow animates
 * smoothly while characters fade/scale in and out via Framer Motion.
 */
export function TierRow({
    tier,
    style,
    axis = 'both',
    favoriteCharacters,
    waifuCharacters,
}: TierRowProps) {
    const tierStyle = style || TIER_STYLES[tier];
    const badge = (
        <BoxTier className={clsx(tierStyle.bg, tierStyle.text)}>{tierStyle.label}</BoxTier>
    );

    const favVisible = axis !== 'waifu';
    const waifuVisible = axis !== 'favorite';

    const renderSide = (
        characters: CharacterItem[],
        visible: boolean,
        reverse: boolean,
        flexGrow: number,
    ) => (
        <motion.div
            className={`flex min-w-0 basis-0 overflow-hidden ${
                reverse ? 'flex-row-reverse' : 'flex-row'
            }`}
            animate={{ flexGrow }}
            transition={SPRING}
        >
            <AnimatePresence mode='popLayout'>
                {(visible ? characters : []).map((character) => (
                    <motion.div
                        key={character.id}
                        layout
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        transition={SPRING}
                        className='shrink-0'
                    >
                        <CharacterAvatar character={character} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );

    return (
        <div className='flex w-full min-h-12 sm:min-h-16 lg:min-h-20 bg-surface-overlay overflow-hidden'>
            {renderSide(
                favoriteCharacters,
                favVisible,
                true,
                getFlexGrow(axis, 'favorite'),
            )}
            {badge}
            {renderSide(
                waifuCharacters,
                waifuVisible,
                false,
                getFlexGrow(axis, 'waifu'),
            )}
        </div>
    );
}
