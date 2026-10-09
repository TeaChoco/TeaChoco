import type { GameItem, GameType } from '~/types/favorites';

export const gameTypeLabels: Record<GameType, string> = {
    openworld: 'Open World',
    creative: 'Creative',
    rpg: 'RPG',
    sandbox: 'Sandbox',
    adventure: 'Adventure',
    indie: 'Indie',
    gacha: 'Gacha',
    fighting: 'Fighting',
    moba: 'MOBA',
    fps: 'FPS',
    horror: 'Horror',
    novel: 'Novel',
    pokemon: 'Pokémon',
};

export const gameList: GameItem[] = [
    {
        id: 'game-1',
        names: { en: 'MineCraft' },
        rating: 4.7,
        type: ['creative', 'sandbox'],
        note: 'Exploration done right.',
    },
    {
        id: 'game-2',
        names: { en: 'Genshin Impact' },
        rating: 4.8,
        type: ['openworld', 'rpg', 'gacha'],
        note: 'Open-world adventure with gacha.',
    },
    {
        id: 'game-3',
        names: { en: 'Zenless Zone Zero' },
        rating: 4.3,
        type: ['adventure', 'gacha'],
        note: 'Masterclass of atmosphere and controls.',
    },
    {
        id: 'game-4',
        names: { en: 'Blue Archive' },
        rating: 4.0,
        type: ['gacha'],
        note: 'Open-world adventure with gacha.',
    },
    {
        id: 'game-5',
        names: { en: 'Bloody Roar 2' },
        rating: 2.8,
        type: ['fighting'],
    },
    {
        id: 'game-6',
        names: { en: 'Pokémon Emerald' },
        rating: 3,
        type: ['adventure', 'rpg', 'openworld', 'pokemon'],
        note: "Pokémon Generation 3 in game boy advance."
    },
    {
        id: 'game-7',
        names: { en: 'Arena of Valor (ROV)' },
        rating: 4.2,
        type: ['moba'],
    },
    {
        id: 'game-8',
        names: { en: 'MilkChoco - Online FPS' },
        rating: 3.2,
        type: ['fps'],
    },
    {
        id: 'game-9',
        names: {
            en: 'Miside',
        },
        rating: 3.0,
        type: ['horror', 'novel', 'indie'],
    },
];
