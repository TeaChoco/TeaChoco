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

const games: Omit<GameItem, 'id'>[] = [
    {
        names: { en: 'MineCraft' },
        rating: 4.7,
        type: ['creative', 'sandbox'],
        note: 'Exploration done right.',
    },
    {
        names: { en: 'Genshin Impact' },
        rating: 4.8,
        type: ['openworld', 'rpg', 'gacha'],
        note: 'Open-world adventure with gacha.',
    },
    {
        names: { en: 'Zenless Zone Zero' },
        rating: 4.3,
        type: ['adventure', 'gacha'],
        note: 'Masterclass of atmosphere and controls.',
    },
    {
        names: { en: 'Blue Archive' },
        rating: 4.0,
        type: ['gacha'],
        note: 'Open-world adventure with gacha.',
    },
    {
        names: { en: 'Bloody Roar 2' },
        rating: 2.8,
        type: ['fighting'],
    },
    {
        names: { en: 'Pokémon Emerald' },
        rating: 3,
        type: ['adventure', 'rpg', 'openworld', 'pokemon'],
        note: 'Pokémon Generation 3 in game boy advance.',
    },
    {
        names: { en: 'Arena of Valor (ROV)' },
        rating: 4.2,
        type: ['moba'],
    },
    {
        names: { en: 'MilkChoco - Online FPS' },
        rating: 3.2,
        type: ['fps'],
    },
    {
        names: {
            en: 'Miside',
        },
        rating: 3.0,
        type: ['horror', 'novel', 'indie'],
    },
];

export const gameList: GameItem[] = games.map((game, index) => ({
    id: `game-${index + 1}`,
    ...game,
}));
