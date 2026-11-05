// -Path: 'TeaChoco-Portfolio/client/app/pages/favorites/hooks/useCharacterSources.ts'
import { useCallback } from 'react';
import { animeList } from '~/data/favorites/anime';
import { gameList } from '~/data/favorites/game';
import type { CharacterFrom } from '~/types/favorites';

/**
 * Resolves a character's `from` ids into the linked anime/game list items.
 */
export function useCharacterSources() {
    return useCallback((from: CharacterFrom) => {
        return {
            anime: animeList.find((item) => item.id === `anime-${from.anime}`),
            game: gameList.find((item) => item.id === `game-${from.game}`),
        };
    }, []);
}
