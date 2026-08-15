// -Path: "TeaChoco-Portfolio/client/src/types/favorites.ts"

export type AnimeItem = {
    id: string;
    title: string;
    rating: number;
    note?: string;
    image?: string;
};

export type GameType =
    | 'openworld'
    | 'creative'
    | 'rpg'
    | 'sandbox'
    | 'adventure'
    | 'indie'
    | 'gacha';

export type GameItem = {
    id: string;
    title: string;
    rating: number;
    type?: GameType[];
    note?: string;
    image?: string;
};

export type MvItem = {
    rating: number;
    videoId: string;
};

export type CharacterFrom = Partial<Record<'anime' | 'game', string>>;
export type CharacterTier = 'ssss' | 'sss' | 'ss' | 's' | 'a' | 'b' | 'c' | 'd' | 'f';
export type CharacterTiers = Record<'favorite' | 'waifu', CharacterTier>;
export type CharacterRating = Partial<Record<'appearance' | 'nature' | 'voice' | 'warm', number>>;

export type CharacterItem = {
    id: string;
    name: string;
    from: CharacterFrom;
    tier: CharacterTiers;
    rating: CharacterRating;
    info?: {
        age?: number;
        height?: number;
        birtday?: string;
    };
    images?: string[];
};
