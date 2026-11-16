// -Path: "TeaChoco-Portfolio/client/src/data/favorites.ts"
import type { CharacterTier, CharacterItem } from '~/types/favorites';

export const characterTiers: CharacterTier[] = ['ssss', 'sss', 'ss', 's', 'a', 'b', 'c', 'd', 'f'];

const chars: Omit<CharacterItem, 'id'>[] = [
    {
        name: 'Takanashi Hoshino',
        from: { game: 4 },
        tier: {
            favorite: 'ssss',
            waifu: 'b',
        },
        rating: {
            appearance: 5,
            nature: 4.9,
            voice: 4.8,
            warm: 3.6,
        },
        info: {
            age: 17,
            height: 145,
            birthday: 'January 2nd',
        },
        image: 2,
    },
    {
        name: 'Gotoh Hitori',
        from: { anime: 1 },
        tier: {
            favorite: 'ssss',
            waifu: 'a',
        },
        rating: {
            appearance: 4.9,
            nature: 5,
            voice: 4.9,
            warm: 3.5,
        },
        info: {
            age: 17,
            weight: 50,
            height: 156,
            birthday: 'February 21',
        },
        image: 2,
    },
    {
        name: 'Hu Tao',
        from: { game: 2 },
        tier: {
            favorite: 'ssss',
            waifu: 's',
        },
        rating: {
            appearance: 4.5,
            nature: 4.6,
            voice: 5,
            warm: 3.2,
        },
        info: {
            age: 22,
            height: 155,
            birthday: 'July 15th',
        },
        image: 4,
    },
    {
        name: 'Nijika Ijichi',
        from: { anime: 1 },
        tier: {
            favorite: 'b',
            waifu: 'a',
        },
        rating: {
            appearance: 0,
            nature: 0,
            voice: 0,
            warm: 0,
        },
        info: {
            age: 18,
            weight: 48,
            height: 154,
            birthday: 'May 29',
        },
        image: 2,
    },
    {
        name: 'Shizuka Mikazuki',
        from: { anime: 6 },
        tier: {
            favorite: 'sss',
            waifu: 's',
        },
        rating: {
            appearance: 4.9,
            nature: 4.2,
            voice: 4.3,
            warm: 3.1,
        },
        info: {
            age: 26,
            height: 158,
            birthday: 'April 12',
        },
        image: 4,
    },
    {
        name: 'Megumi Kato',
        from: { anime: 7 },
        tier: {
            favorite: 'sss',
            waifu: 'sss',
        },
        rating: {
            appearance: 4.0,
            nature: 4.2,
            voice: 4.5,
            warm: 4.7,
        },
        info: {
            age: 16,
            weight: 46,
            height: 160,
            birthday: 'September 23th (Virgo)',
        },
        image: 1,
    },
    {
        name: 'Yuutani Yuu',
        from: { anime: 8 },
        tier: {
            favorite: 'ss',
            waifu: 'a',
        },
        rating: {
            appearance: 0,
            nature: 0,
            voice: 0,
            warm: 0,
        },
        info: {
            age: 16,
            height: 145.5,
            birthday: 'September 9',
        },
        image: 2,
    },
    {
        name: 'Marie Evans',
        from: { anime: 9 },
        tier: {
            favorite: 'a',
            waifu: 'a',
        },
        rating: {
            appearance: 0,
            nature: 0,
            voice: 0,
            warm: 0,
        },
        info: {
            age: 16,
        },
        image: 2,
    },
    {
        name: 'Noelle',
        from: { game: 2 },
        tier: {
            favorite: 's',
            waifu: 'ss',
        },
        rating: {
            appearance: 0,
            nature: 0,
            voice: 0,
            warm: 0,
        },
        info: {
            age: 15,
            height: 158.8,
            birthday: 'March 21',
        },
        image: 3,
    },
    {
        name: 'Kubo Nagisa',
        from: { anime: 10 },
        tier: {
            favorite: 'a',
            waifu: 'b',
        },
        rating: {
            appearance: 0,
            nature: 0,
            voice: 0,
            warm: 0,
        },
        info: {
            age: 16,
            height: 160,
            birthday: 'August 2nd',
        },
        image: 3,
    },
    {
        name: 'Hoshimi Miyabi',
        from: { game: 3 },
        tier: {
            favorite: 'ss',
            waifu: 's',
        },
        rating: {
            appearance: 0,
            nature: 0,
            voice: 0,
            warm: 0,
        },
        info: {
            age: 24,
            height: 170,
            birthday: 'June 19th',
        },
        image: 4,
    },
    {
        name: 'Sylpha Langlis',
        from: { anime: 11 },
        tier: {
            favorite: 's',
            waifu: 'b',
        },
        rating: {
            appearance: 0,
            nature: 0,
            voice: 0,
            warm: 0,
        },
        info: {
            age: 18,
        },
        image: 5,
    },
    {
        name: 'Satou Matsuzaka',
        from: { anime: 12 },
        tier: {
            favorite: 's',
            waifu: 'f',
        },
        rating: {
            appearance: 0,
            nature: 0,
            voice: 0,
            warm: 0,
        },
        info: {
            age: 16,
            height: 161,
            birthday: 'December 31st',
        },
        image: 3,
    },
    {
        name: 'Mahiru Shiina',
        from: { anime: 13 },
        tier: {
            favorite: 'a',
            waifu: 'sss',
        },
        rating: {
            appearance: 0,
            nature: 0,
            voice: 0,
            warm: 0,
        },
        info: {
            age: 17,
            height: 155,
            birthday: 'December 6',
        },
        image: 2,
    },
    {
        name: 'Varesa',
        from: { game: 2 },
        tier: {
            favorite: 'b',
            waifu: 'c',
        },
        rating: {
            appearance: 0,
            nature: 0,
            voice: 0,
            warm: 0,
        },
        info: {
            height: 159,
            birthday: 'November 15',
        },
        image: 2,
    },
    {
        name: 'Kurokawa Akane',
        from: { anime: 14 },
        tier: {
            favorite: 'a',
            waifu: 's',
        },
        rating: {
            appearance: 0,
            nature: 0,
            voice: 0,
            warm: 0,
        },
        info: {
            age: 17,
            height: 163,
        },
        image: 4,
    },
    {
        name: 'Nukumizu Kaju',
        from: {},
        tier: {
            favorite: 'a',
            waifu: 's',
        },
        rating: {
            appearance: 0,
            nature: 0,
            voice: 0,
            warm: 0,
        },
        info: {
            age: 14,
            weight: 40,
            height: 147,
            birthday: 'June 6th, 2006',
        },
        image: 2,
    },
    {
        name: 'Yuna Kuma',
        from: { anime: 16 },
        tier: {
            favorite: 'b',
            waifu: 'a',
        },
        rating: {
            appearance: 0,
            nature: 0,
            voice: 0,
            warm: 0,
        },
        info: {
            age: 16,
        },
        image: 2,
    },
    {
        name: 'Kaguya Shinomiya',
        from: { anime: 17 },
        tier: {
            favorite: 'c',
            waifu: 'd',
        },
        rating: {
            appearance: 0,
            nature: 0,
            voice: 0,
            warm: 0,
        },
        info: {
            age: 17,
            height: 158,
            birthday: 'January 1',
        },
        image: 2,
    },
    {
        name: 'Minakami Noa',
        from: { anime: 18 },
        tier: {
            favorite: 'b',
            waifu: 'c',
        },
        rating: {
            appearance: 0,
            nature: 0,
            voice: 0,
            warm: 0,
        },
        info: {
            age: 22,
        },
        image: 2,
    },
    {
        name: 'Mao Mao',
        from: { anime: 19 },
        tier: {
            favorite: 'a',
            waifu: 's',
        },
        rating: {
            appearance: 0,
            nature: 0,
            voice: 0,
            warm: 0,
        },
        info: {
            age: 17,
            height: 153,
        },
        image: 3,
    },
    {
        name: 'Nanakura Rin',
        from: { anime: 20 },
        tier: {
            favorite: 'b',
            waifu: 'b',
        },
        rating: {
            appearance: 0,
            nature: 0,
            voice: 0,
            warm: 0,
        },
        info: {
            age: 16,
            birthday: 'March 20th',
        },
        image: 2,
    },
    {
        name: 'Ai Hoshino',
        from: { anime: 14 },
        tier: {
            favorite: 'a',
            waifu: 'a',
        },
        rating: {
            appearance: 0,
            nature: 0,
            voice: 0,
            warm: 0,
        },
        info: {
            age: 16,
            height: 151,
        },
        image: 3,
    },
    {
        name: 'Ogiwara Sayu',
        from: { anime: 21 },
        tier: {
            favorite: 'a',
            waifu: 'ss',
        },
        rating: {
            appearance: 0,
            nature: 0,
            voice: 0,
            warm: 0,
        },
        info: {
            age: 17,
            height: 159,
            birthday: 'June 27',
        },
        image: 2,
    },
    {
        name: 'Elfaria Albis Serfort',
        from: { anime: 5 },
        tier: {
            favorite: 's',
            waifu: 'a',
        },
        rating: {
            appearance: 0,
            nature: 0,
            voice: 0,
            warm: 0,
        },
        info: {
            age: 16,
            height: 163,
            birthday: 'December 24th',
        },
        image: 3,
    },
    {
        name: 'Beatrice',
        from: { anime: 2 },
        tier: {
            favorite: 's',
            waifu: 'd',
        },
        rating: {
            appearance: 0,
            nature: 0,
            voice: 0,
            warm: 0,
        },
        voice: {
            jp: 'Arai Satomi',
            en: 'Kira Buckland',
        },
        info: {
            age: 400,
            height: 140,
        },
        image: 2,
    },
    {
        name: 'Rem',
        from: { anime: 2 },
        tier: {
            favorite: 's',
            waifu: 's',
        },
        rating: {
            appearance: 0,
            nature: 0,
            voice: 0,
            warm: 0,
        },
        info: {
            age: 17,
            height: 154,
            birthday: 'February 2nd',
        },
        image: 2,
    },
    {
        name: 'Hiiragi Nana',
        from: { anime: 22 },
        tier: {
            favorite: 'ss',
            waifu: 'f',
        },
        rating: {
            appearance: 0,
            nature: 0,
            voice: 0,
            warm: 0,
        },
        info: {},
        image: 6,
    },
    {
        name: 'Yuno Gasai',
        from: { anime: 23 },
        tier: {
            favorite: 'c',
            waifu: 'f',
        },
        rating: {
            appearance: 2.6,
            nature: 0.4,
            voice: 2.8,
            warm: 0.6,
        },
        info: {
            age: 16,
            weight: 49,
            height: 160,
            birthday: 'November 16th',
        },
        image: 3,
    },
    {
        name: 'Mita Cappie',
        from: { game: 9 },
        tier: {
            favorite: 'b',
            waifu: 'b',
        },
        rating: {
            appearance: 3.4,
            nature: 3.1,
            voice: 4.1,
            warm: 4.6,
        },
        info: {
            height: 157,
        },
        image: 4,
    },
];

export const characters: CharacterItem[] = chars.map((char, index) => ({
    id: `char-${index + 1}`,
    ...char,
}));
