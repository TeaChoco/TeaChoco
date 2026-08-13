// -Path: "TeaChoco-Portfolio/client/src/data/favorites.ts"
import type {
    MvItem,
    GameItem,
    GameType,
    AnimeItem,
    CharacterTier,
    CharacterItem,
} from '~/types/favorites';

export const gameTypeLabels: Record<GameType, string> = {
    openworld: 'Open World',
    creative: 'Creative',
    rpg: 'RPG',
    sandbox: 'Sandbox',
    adventure: 'Adventure',
    indie: 'Indie',
    gacha: 'Gacha',
};

export const characterTiers: CharacterTier[] = ['ssss', 'sss', 'ss', 's', 'a', 'b', 'c', 'd', 'f'];

export const animeList: AnimeItem[] = [
    {
        id: 'anime-1',
        title: 'Bocchi the Rock!',
        rating: 5,
        image: 'https://i.redd.it/uihz2dhhim2a1.png',
    },
    {
        id: 'anime-2',
        title: 'Re:Zero',
        rating: 4.9,
    },
    {
        id: 'anime-3',
        title: 'Jujutsu Kaisen',
        rating: 4.5,
    },
    {
        id: 'anime-4',
        title: 'Demon Slayer: Kimetsu no Yaiba',
        rating: 4.5,
        image: 'https://1000logos.net/wp-content/uploads/2022/06/Demon-Slayer-Logo.png',
    },
];

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

export const mvList: MvItem[] = [
    {
        id: 'mv-1',
        title: 'Idol',
        artist: 'YOASOBI',
        rating: 5,
        videoId: 'ZRtdQ81jPUQ',
    },
    {
        id: 'mv-2',
        title: 'Zankyosanka',
        artist: 'Aimer',
        rating: 5,
        videoId: 'CxKWTzrTP6E',
    },
    {
        id: 'mv-3',
        title: 'Odo',
        artist: 'Ado',
        rating: 4,
        videoId: '9y9nT1I0fEo',
    },
    {
        id: 'mv-4',
        title: 'Mosi mosi',
        artist: 'kotoha',
        rating: 3,
        videoId: 'yaP1aaU-8Rk',
    },
    {
        id: 'mv-5',
        title: 'Zenzenzense',
        artist: 'RADWIMPS',
        rating: 4,
        videoId: 'oKGLgMvBMFk',
    },
    {
        id: 'mv-6',
        title: 'Gurenge',
        artist: 'LiSA',
        rating: 4,
        videoId: 'CwkzK-F0Y00',
    },
];

export const characters: CharacterItem[] = [
    {
        id: 'char-1',
        name: 'Takanashi Hoshino',
        from: {
            game: 'Blue Archive',
        },
        tier: {
            favorite: 'ssss',
            waifu: 'b',
        },
    },
    {
        id: 'char-2',
        name: 'Gotoh Hitori',
        from: {
            anime: 'Bocchi the Rock!',
        },
        tier: {
            favorite: 'ssss',
            waifu: 'a',
        },
    },
    {
        id: 'char-3',
        name: 'Hu Tao',
        from: {
            game: 'Genshin Impact',
        },
        tier: {
            favorite: 'ssss',
            waifu: 's',
        },
    },
];
