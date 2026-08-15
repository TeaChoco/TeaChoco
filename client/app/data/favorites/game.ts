import type { GameItem, GameType } from '~/types/favorites';

export const gameTypeLabels: Record<GameType, string> = {
    openworld: 'Open World',
    creative: 'Creative',
    rpg: 'RPG',
    sandbox: 'Sandbox',
    adventure: 'Adventure',
    indie: 'Indie',
    gacha: 'Gacha',
};

export const gameList: GameItem[] = [
    {
        id: 'game-1',
        title: 'MineCraft',
        rating: 5,
        type: ['creative', 'sandbox'],
        note: 'Exploration done right.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeXKwvWwudHGn7jJqO9Q0g99VkNDPoQAlDUzseRg52XcE_j_NjYuS4Zqs&s=10',
    },
    {
        id: 'game-2',
        title: 'Genshin Impact',
        rating: 4,
        type: ['openworld', 'rpg', 'gacha'],
        note: 'Open-world adventure with gacha.',
    },
    {
        id: 'game-3',
        title: 'Zenless Zone Zero',
        rating: 5,
        type: ['indie', 'adventure', 'gacha'],
        note: 'Masterclass of atmosphere and controls.',
    },
    {
        id: 'game-4',
        title: 'Blue Arcive',
        rating: 4,
        type: ['gacha'],
        note: 'Open-world adventure with gacha.',
    },
];
