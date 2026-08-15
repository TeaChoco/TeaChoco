import { useMemo } from 'react';
import { characterTiers } from '~/data/favorites/character';
import type { CharacterItem, CharacterTier, CharacterTiers } from '~/types/favorites';

/**
 * Groups a list of characters by their rank on a given tier axis.
 * @param characters - characters to group
 * @param axis - which axis to read the rank from ('favorite' | 'waifu')
 * @returns a record mapping each tier to the characters ranked at that tier
 */
export function useTierGroups(
    characters: CharacterItem[],
    axis: keyof CharacterTiers,
): Record<CharacterTier, CharacterItem[]> {
    return useMemo(() => {
        const groups = Object.fromEntries(
            characterTiers.map((tier) => [tier, [] as CharacterItem[]]),
        ) as Record<CharacterTier, CharacterItem[]>;

        for (const character of characters) {
            groups[character.tier[axis]].push(character);
        }

        return groups;
    }, [characters, axis]);
}
