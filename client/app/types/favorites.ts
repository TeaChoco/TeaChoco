// -Path: "TeaChoco-Portfolio/client/src/types/favorites.ts"
import type { Lang } from '~/i18n/locales';

export type FavoriteType = 'anime' | 'game' | 'mv' | 'character';

export type LangNames = Partial<Record<Lang, string>>;

export type AnimeType = 'yuri';

export interface DataItem {
    id: string;
    names: LangNames;
    rating: number | null;
}

export interface AnimeItem extends DataItem {
    type?: AnimeType[];
    note?: string;
    image?: string | null;
}

export type GameType =
    | 'pokemon'
    | 'openworld'
    | 'creative'
    | 'rpg'
    | 'sandbox'
    | 'adventure'
    | 'indie'
    | 'gacha'
    | 'fighting'
    | 'moba'
    | 'fps'
    | 'horror'
    | 'novel';

export interface GameItem extends DataItem {
    type?: GameType[];
    note?: string;
    image?: string | null;
}

export interface MvItem extends DataItem {
    videoId: string;
}

export type CharacterFrom = Partial<Record<'anime' | 'game', LangNames>>;
export type CharacterTier = 'ssss' | 'sss' | 'ss' | 's' | 'a' | 'b' | 'c' | 'd' | 'f';
export type CharacterTiers = Record<'favorite' | 'waifu', CharacterTier>;
export type CharacterRating = Partial<Record<'appearance' | 'nature' | 'voice' | 'warm', number>>;

export type CharacterItem = {
    id: string;
    name: string;
    from: CharacterFrom;
    tier: CharacterTiers;
    rating: CharacterRating;
    voice?: {
        jp?: string;
        en?: string;
        th?: string;
    };
    info?: {
        age?: number;
        weight?: number;
        height?: number;
        birthday?: string;
    };
    images: string[];
};
