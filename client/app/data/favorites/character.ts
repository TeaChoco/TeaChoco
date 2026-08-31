// -Path: "TeaChoco-Portfolio/client/src/data/favorites.ts"
import type { CharacterTier, CharacterItem } from '~/types/favorites';

export const characterTiers: CharacterTier[] = ['ssss', 'sss', 'ss', 's', 'a', 'b', 'c', 'd', 'f'];

export const characters: CharacterItem[] = [
    {
        id: 'char-1',
        name: 'Takanashi Hoshino',
        from: {
            game: {
                'en-US': 'Blue Archive',
            },
        },
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
        images: [
            'https://i.pinimg.com/736x/84/0c/b0/840cb031cddd6c4e70242e565e6b4809.jpg',
            'https://i.pinimg.com/736x/3c/c9/bd/3cc9bdfb34534db81b9bff2cadffe80e.jpg',
        ],
    },
    {
        id: 'char-2',
        name: 'Gotoh Hitori',
        from: {
            anime: {
                'en-US': 'Bocchi the Rock!',
            },
        },
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
        images: [
            'https://i.pinimg.com/736x/79/51/ff/7951ff737f5f29041548d41bb855916e.jpg',
            'https://i.pinimg.com/736x/49/34/ec/4934ecd13034eaa1dcf1529d2dd54733.jpg',
        ],
    },
    {
        id: 'char-3',
        name: 'Hu Tao',
        from: {
            game: {
                'en-US': 'Genshin Impact',
            },
        },
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
        images: [
            'https://i.pinimg.com/736x/e9/2a/25/e92a25f84db8dea7e9aeca2c2668ca1c.jpg',
            'https://i.pinimg.com/736x/c4/52/34/c45234bc8615ef3505c0f831d93be80d.jpg',
            'https://i.pinimg.com/736x/fd/af/20/fdaf20d568302d08fd19bb12b5f030ad.jpg',
            'https://i.pinimg.com/736x/8c/94/ce/8c94ceaef1923fa0dfbb56bb4088ebfe.jpg',
        ],
    },
    {
        id: 'char-4',
        name: 'Nijika Ijichi',
        from: {
            anime: {
                'en-US': 'Bocchi the Rock!',
            },
        },
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
        images: [
            'https://i.pinimg.com/736x/d6/fc/d8/d6fcd8baa11dc40f4ebfa35112db192c.jpg',
            'https://i.pinimg.com/1200x/ba/de/63/bade6359529d5f20cf3f9fd225bd802c.jpg',
        ],
    },
    {
        id: 'char-5',
        name: 'Shizuka Mikazuki',
        from: {
            anime: {
                'en-US': 'Zom 100: Bucket List of the Dead',
            },
        },
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
        images: [
            'https://i.pinimg.com/736x/6d/18/4e/6d184e4647b2a0fbf42995f8e630f0b3.jpg',
            'https://i.pinimg.com/736x/28/76/9e/28769ef1442a2ba06379e5db0ee77e7d.jpg',
            'https://i.pinimg.com/1200x/15/31/e4/1531e418fe4167c59aba125c704329a2.jpg',
            'https://i.pinimg.com/1200x/0b/66/b5/0b66b5497a213cd0f33f37f2dadc7334.jpg',
        ],
    },
    {
        id: 'char-6',
        name: 'Megumi Kato',
        from: {
            anime: {
                'ja-JP': 'Saenai Heroine no Sodatekata',
                'en-US': 'Saekano: How to Raise a Boring Girlfriend',
            },
        },
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
        images: ['https://i.pinimg.com/736x/90/13/59/901359b75eb85e46456b7cbe4ef8e8c3.jpg'],
    },
    {
        id: 'char-7',
        name: 'Yuutani Yuu',
        from: {
            anime: {
                'en-US': 'Bad Girl',
            },
        },
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
        images: [
            'https://i.pinimg.com/736x/17/77/ab/1777abe4e8c47c64cefc224aa6e899c4.jpg',
            'https://i.pinimg.com/736x/a1/2f/77/a12f77fb76577b94bdf3952f8dc3f316.jpg',
            'https://i.pinimg.com/736x/a1/2f/77/a12f77fb76577b94bdf3952f8dc3f316.jpg',
        ],
    },
    {
        id: 'char-8',
        name: 'Marie Evans',
        from: {
            anime: {
                'en-US': 'Mechanical Marie',
                'ja-JP': 'Kikaijikake no Mari',
            },
        },
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
        images: [
            'https://i.pinimg.com/736x/2e/6e/59/2e6e5938dc6c0be3bdbe1b7dfd29593e.jpg',
            'https://i.pinimg.com/736x/22/25/b2/2225b221555daada3f77346ad87de006.jpg',
        ],
    },
    {
        id: 'char-9',
        name: 'Noelle',
        from: {
            game: {
                'en-US': 'Genshin Impact',
            },
        },
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
        images: [
            'https://i.pinimg.com/736x/14/95/e4/1495e4c48af49fb501ba8386eadd5992.jpg',
            'https://i.pinimg.com/736x/5f/bf/6c/5fbf6c114d8676fa3f47d2b5063938fa.jpg',
            'https://i.pinimg.com/1200x/e4/02/71/e4027155552ea5a205fe878453f8c365.jpg',
        ],
    },
    {
        id: 'char-10',
        name: 'Kubo Nagisa',
        from: {
            anime: {
                'en-US': "Kubo Won't Let Me Be Invisible",
                'ja-JP': 'Kubo-san wa Boku wo Yurusanai',
            },
        },
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
        images: [
            'https://i.pinimg.com/736x/77/cb/57/77cb57fd1db60c5ce671b39a3191b94e.jpg',
            'https://i.pinimg.com/1200x/13/5f/1d/135f1d8f3fdd7c829f472e0cde0b246d.jpg',
            'https://i.pinimg.com/736x/22/61/43/22614366b21b639bbbbfac590e5b1122.jpg',
        ],
    },
    {
        id: 'char-11',
        name: 'Hoshimi Miyabi',
        from: {
            game: {
                'en-US': 'Zenless Zone Zero',
            },
        },
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
        images: [
            'https://i.pinimg.com/736x/b5/b2/54/b5b254178045d26b5658de201a8bcd7b.jpg',
            'https://i.pinimg.com/736x/2e/1e/2f/2e1e2f842bc592dfa230cf9550bda3c6.jpg',
            'https://i.pinimg.com/736x/ef/0b/df/ef0bdfbe1c97512d5cbf7abf1373993a.jpg',
            'https://i.pinimg.com/736x/69/62/f8/6962f81e6d983b5538d56bb60e22d1cf.jpg',
        ],
    },
    {
        id: 'char-12',
        name: 'Sylpha Langlis',
        from: {
            anime: {
                'en-US': 'I Was Reincarnated as the 7th Prince',
                'ja-JP': 'Tensei Shitara Dai Nana Ouji Dattanode',
            },
        },
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
        images: [
            'https://i.pinimg.com/736x/89/1a/4b/891a4b0e0674c165b936bc9dbc71f0cb.jpg',
            'https://i.pinimg.com/1200x/32/22/95/322295fbfa2dcb52288705685fbf4be6.jpg',
            'https://i.pinimg.com/736x/a0/d1/1d/a0d11d58906556166dd0544bc28789c1.jpg',
            'https://i.pinimg.com/1200x/4c/97/ca/4c97ca33c22913cbbae8b46927bb67e6.jpg',
            'https://i.pinimg.com/1200x/4c/97/ca/4c97ca33c22913cbbae8b46927bb67e6.jpg',
        ],
    },
    {
        id: 'char-13',
        name: 'Satou Matsuzaka',
        from: {
            anime: {
                'en-US': 'Happy Sugar Life',
            },
        },
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
        images: [
            'https://i.pinimg.com/736x/88/64/0e/88640e8e56985d0d412ed81c37ee31fc.jpg',
            'https://i.pinimg.com/1200x/c5/31/7a/c5317a3675fff9d4cf1d7bcc3b86a79c.jpg',
            'https://i.pinimg.com/736x/7b/2a/4a/7b2a4afef1c4a46d5a0f2671db824633.jpg',
        ],
    },
    {
        id: 'char-14',
        name: 'Mahiru Shiina',
        from: {
            anime: {
                'en-US': 'The Angel Next Door Spoils Me Rotten',
                'ja-JP': 'Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken',
            },
        },
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
        images: [
            'https://i.pinimg.com/736x/48/a4/b3/48a4b3d164e8ab492fcc762e8350649b.jpg',
            'https://i.pinimg.com/736x/a9/20/e1/a920e1bac97e8fcc9b3f427e154d49a9.jpg',
        ],
    },
    {
        id: 'char-15',
        name: 'Varesa',
        from: {
            game: {
                'en-US': 'Genshin Impact',
            },
        },
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
        images: [
            'https://i.pinimg.com/736x/17/84/6e/17846ef2b89789fc4fe8077e15e94299.jpg',
            'https://i.pinimg.com/736x/27/9e/0b/279e0b0e267d3daf3521adbb136335ed.jpg',
        ],
    },
    {
        id: 'char-16',
        name: 'Kurokawa Akane',
        from: {
            anime: {
                'en-US': 'Oshi no Ko',
            },
        },
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
        images: [
            'https://i.pinimg.com/736x/59/73/93/5973933d3b3e5b8967b48eec72e34ce0.jpg',
            'https://i.pinimg.com/736x/2c/57/8c/2c578c83f74684fd094d7952497c2e2d.jpg',
            'https://i.pinimg.com/736x/6e/a6/4d/6ea64db3bd1ea0c7a703666962837ac5.jpg',
            'https://i.pinimg.com/736x/9c/46/f7/9c46f730a5ffd46b2aeaed309085976f.jpg',
        ],
    },
    {
        id: 'char-17',
        name: 'Nukumizu Kaju',
        from: {
            anime: {
                'en-US': 'The Story of a Girl Who Decided to Live Alone',
                'ja-JP': 'Hitorigurashi no Shougakusei',
            },
        },
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
        images: [
            'https://i.pinimg.com/736x/9d/64/36/9d64362338d692e7f1954b267e93beaa.jpg',
            'https://i.pinimg.com/736x/33/c5/92/33c59296798e7b1984aa7f1782a4d089.jpg',
        ],
    },
    {
        id: 'char-18',
        name: 'Yuna Kuma',
        from: {
            anime: {
                'en-US': 'Kuma Kuma Kuma Bear',
            },
        },
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
        images: [
            'https://i.pinimg.com/736x/73/86/8f/73868f61c9d7d467b95b8151995595d5.jpg',
            'https://i.pinimg.com/1200x/c0/5d/7a/c05d7a6eb08e109b271ee37a2957da3c.jpg',
        ],
    },
    {
        id: 'char-19',
        name: 'Kaguya Shinomiya',
        from: {
            anime: {
                'en-US': 'Kaguya-sama: Love Is War',
                'ja-JP': 'Kaguya-sama wa Kokurasetai',
            },
        },
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
        images: [
            'https://i.pinimg.com/1200x/6d/c5/67/6dc567f2f7f9a6430ead5d7a9ce5c9d1.jpg',
            'https://i.pinimg.com/736x/fc/16/6e/fc166e4183f4a52160d004d0940fd57f.jpg',
        ],
    },
    {
        id: 'char-20',
        name: 'Minakami Noa',
        from: {
            anime: {
                'en-US': 'Henjin no Salad Bowl',
                'ja-JP': '変人のサラダボウル',
            },
        },
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
        images: [
            'https://i.pinimg.com/736x/57/03/5f/57035f647be382b93d15bfe33d47f02a.jpg',
            'https://i.pinimg.com/736x/1f/79/96/1f79968befdcbfe260550a3add0eb1c2.jpg',
        ],
    },
    {
        id: 'char-21',
        name: 'Mao Mao',
        from: {
            anime: {
                'en-US': 'The Apothecary Diaries',
                'ja-JP': 'Kusuriya no Hitorigoto',
            },
        },
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
        images: [
            'https://i.pinimg.com/736x/40/63/08/4063083b185706ef083a1857a0dd366a.jpg',
            'https://i.pinimg.com/736x/31/76/79/3176795f853647ff0a71bd99a9c748c6.jpg',
            'https://i.pinimg.com/736x/44/d1/67/44d1677261d59ce916e8798c72122cf0.jpg',
        ],
    },
    {
        id: 'char-22',
        name: 'Nanakura Rin',
        from: {
            anime: {
                'en-US': 'Pseudo Harem',
                'ja-JP': 'Giji Harem',
            },
        },
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
        images: [
            'https://i.pinimg.com/1200x/f0/71/3c/f0713c69b9b1bc0fdc51bd0129e4b862.jpg',
            'https://i.pinimg.com/736x/f3/5b/73/f35b7306408a39f5687f9bb4027e2bf5.jpg',
        ],
    },
    {
        id: 'char-23',
        name: 'Ai Hoshino',
        from: {
            anime: {
                'en-US': 'Oshi no Ko',
            },
        },
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
        images: [
            'https://i.pinimg.com/1200x/a5/8a/d3/a58ad309dec24355d46364036ab9d107.jpg',
            'https://i.pinimg.com/736x/0e/1e/5a/0e1e5af9a2c79f8e14245297bb2f6258.jpg',
            'https://i.pinimg.com/1200x/13/ef/00/13ef00619f7d0ac1fd9f1e15d012f6ef.jpg',
        ],
    },
    {
        id: 'char-24',
        name: 'Ogiwara Sayu',
        from: {
            anime: {
                'en-US': 'The Helpful Fox Senko-san',
                'ja-JP': 'Sewayaki Kitsune no Senko-san',
            },
        },
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
        images: [
            'https://i.pinimg.com/1200x/26/4c/b4/264cb4f4301f94be961c374e81cefaef.jpg',
            'https://i.pinimg.com/1200x/aa/67/c8/aa67c8727a1c7ab8005616581c580e73.jpg',
        ],
    },
    {
        id: 'char-25',
        name: 'Elfaria Albis Serfort',
        from: {
            anime: {
                'en-US': 'The Misfit of Demon King Academy',
                'ja-JP': 'Maou Gakuin no Futekigousha',
            },
        },
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
        images: [
            'https://i.pinimg.com/736x/be/df/b0/bedfb0fbd6af95e8b33129f82b18fe70.jpg',
            'https://i.pinimg.com/736x/9d/20/65/9d2065fcff2cc0910d050df5ebc0dcdb.jpg',
            'https://i.pinimg.com/736x/ae/1d/2b/ae1d2baae94645804546b343aac3470f.jpg',
        ],
    },
    {
        id: 'char-26',
        name: 'Beatrice',
        from: {
            anime: {
                'en-US': 'Re:Zero - Starting Life in Another World',
                'ja-JP': 'Re:Zero kara Hajimeru Isekai Seikatsu',
            },
        },
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
        images: [
            'https://i.pinimg.com/1200x/68/d2/b2/68d2b20b73ed10cf2d8bc8bad276c230.jpg',
            'https://i.pinimg.com/736x/b6/64/e5/b664e5f267e2879c024c346136a4a8db.jpg',
        ],
    },
    {
        id: 'char-27',
        name: 'Rem',
        from: {
            anime: {
                'en-US': 'Re:Zero - Starting Life in Another World',
                'ja-JP': 'Re:Zero kara Hajimeru Isekai Seikatsu',
            },
        },
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
        images: [
            'https://i.pinimg.com/736x/70/1b/bd/701bbd784a8922ed23a3b2b6339a32eb.jpg',
            'https://i.pinimg.com/736x/55/61/16/556116ef3cba0fdbb90ae8195d42dceb.jpg',
        ],
    },
    {
        id: 'char-28',
        name: 'Hiiragi Nana',
        from: {
            anime: {
                'en-US': 'Talentless Nana',
                'ja-JP': 'Munou na Nana',
                'th-TH': 'แผนลับดับศัตรู',
            },
        },
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
        images: [
            'https://i.pinimg.com/736x/26/a1/d7/26a1d7582bd8faac99dadd1fbda9a68a.jpg',
            'https://i.pinimg.com/736x/b5/81/7a/b5817a48902c58116ff74763d9e8b071.jpg',
            'https://i.pinimg.com/1200x/c0/06/a0/c006a00ea47299de32034d704edb1173.jpg',
            'https://i.pinimg.com/736x/bc/eb/64/bceb64c587b8a609b07e8ca20e7e33c7.jpg',
            'https://i.pinimg.com/1200x/71/98/77/7198774c6c4f32de8be9fa3eb7025668.jpg',
            'https://i.pinimg.com/1200x/62/86/6d/62866d84ae956f096a76443bd926f2d4.jpg',
        ],
    },
    {
        id: 'char-29',
        name: 'Yuno Gasai',
        from: {
            anime: {
                'en-US': 'Future Diary',
                'ja-JP': 'Mirai Nikki',
            },
        },
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
        images: [
            'https://i.pinimg.com/1200x/3a/78/8d/3a788d192b577a133607bcc8cc6144b9.jpg',
            'https://i.pinimg.com/736x/16/5d/aa/165daa801eadfd5cb6d51097f15acc82.jpg',
            'https://i.pinimg.com/1200x/26/09/63/26096369dcafdb0cd08ae4af01b78990.jpg',
        ],
    },
    {
        id: 'char-30',
        name: 'Mita Cappie',
        from: {
            game: {
                'en-US': 'Miside',
            },
        },
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
        images: [
            'https://i.pinimg.com/736x/ad/f0/22/adf0220c5d7825c2f045d74ff7579fa1.jpg',
            'https://i.pinimg.com/736x/b3/f4/7a/b3f47a3b5c6f1526128817390347e204.jpg',
            'https://i.pinimg.com/736x/93/f0/0b/93f00be22f0d22e4e8470c1734726bce.jpg',
            'https://i.pinimg.com/736x/51/fe/cf/51fecf0a8caacba5f9a70f1714d70a90.jpg',
        ],
    },
];
