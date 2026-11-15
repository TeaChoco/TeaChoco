import type { AnimeItem } from '~/types/favorites';

const animes: Omit<AnimeItem, 'id'>[] = [
    {
        names: {
            en: 'Bocchi the Rock!',
            ja: 'ぼっち・ざ・ろっく！',
            th: 'บ็อจจิ เดอะ ร็อก!',
        },
        rating: 5,
    },
    {
        names: {
            en: 'Re:ZERO Starting Life in Another World',
            ja: 'Re:ゼロから始める異世界生活',
            th: 'Re:ZERO รีเซทชีวิต ฝ่าวิกฤตต่างโลก',
        },
        rating: 4.9,
    },
    {
        names: {
            en: 'Jujutsu Kaisen',
            ja: '呪術廻戦',
            th: 'มหาเวทย์ผนึกมาร',
        },
        rating: 4.5,
    },
    {
        names: {
            en: 'Demon Slayer: Kimetsu no Yaiba',
            ja: '鬼滅の刃',
            th: 'ดาบพิฆาตอสูร',
        },
        rating: 4.5,
    },
    {
        names: {
            en: 'The Misfit of Demon King Academy',
            ja: '魔王学院の不適合者',
            th: 'ใครว่าข้าไม่เหมาะเป็นจอมมาร',
        },
        rating: 1.4,
    },
    {
        names: {
            en: 'Zom 100: Bucket List of the Dead',
            ja: 'ゾン100～ゾンビになるまでにしたい100のこと～',
            th: 'Zom 100: 100 สิ่งที่อยากทำก่อนจะกลายเป็นซอมบี้',
        },
        rating: 4.2,
    },
    {
        names: {
            en: 'Saekano: How to Raise a Boring Girlfriend',
            ja: '冴えない彼女の育てかた',
            th: 'วิธีปั้นสาวบ้านให้มาเป็นนางเอกของผม',
        },
        rating: 4.3,
    },
    {
        names: {
            en: 'Bad Girl',
            ja: 'ばっどがーる',
            th: 'Bad Girl',
        },
        rating: 4.1,
    },
    {
        names: {
            en: 'Mechanical Marie',
            ja: '機械じかけのマリー',
            th: 'แมรี่ กลไกหัวใจสายซึน',
        },
        rating: 3.7,
    },
    {
        names: {
            en: "Kubo Won't Let Me Be Invisible",
            ja: '久保さんは僕を許さない',
            th: 'คุณคุโบะไม่ยอมให้ผมเป็นตัวประกอบ',
        },
        rating: 3.7,
    },
    {
        names: {
            en: 'I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability',
            ja: '転生したら第七王子だったので、気ままに魔術を極めます',
            th: 'เกิดใหม่เป็นองค์ชาย7 ขอเก็บเลเวลเวทให้กระจาย',
        },
        rating: 4.3,
    },
    {
        names: {
            en: 'Happy Sugar Life',
            ja: 'ハッピーシュガーライフ',
            th: 'ชีวิตหวาน เจี๊ยบของยุนจะจัง',
        },
        rating: 4.0,
    },
    {
        names: {
            en: 'The Angel Next Door Spoils Me Rotten',
            ja: 'お隣の天使様にいつの間にか駄目人間にされていた件',
            th: 'ข้างห้องเป็นองค์หญิงผู้เลอโฉม ตั้งแต่เมื่อไหร่ก็ไม่รู้ที่เธอทำตัวเอาอกเอาใจผมจนกลายเป็นคนไร้ประโยชน์',
        },
        rating: 4.7,
    },
    {
        names: {
            en: 'Oshi no Ko',
            ja: '【推しの子】',
            th: 'เกิดใหม่เป็นลูกโอชิ',
        },
        rating: 4.5,
    },
    {
        names: {
            en: 'The Fragrant Flower Blooms with Dignity',
            ja: '薫る花は凛と咲く',
            th: 'ดอกไม้ตูมบานอย่างทระนง',
        },
        rating: 4.6,
    },
    {
        names: {
            en: 'Kuma Kuma Kuma Bear',
            ja: 'くま クマ 熊 ベアー',
            th: 'คุมะ คุมะ คุมะ แบร์',
        },
        rating: 3.4,
    },
    {
        names: {
            en: 'Kaguya-sama: Love Is War',
            ja: 'かぐや様は告らせたい～天才たちの恋愛頭脳戦～',
            th: 'สารภาพรักกับคุณคางุยะซะดีๆ ~สงครามประสาทความรักของเหล่าอัจฉริยะ~',
        },
        rating: 3.6,
    },
    {
        names: {
            en: 'Salad Bowl of Eccentrics',
            ja: '変人のサラダボウル',
            th: 'สลัดโบว์ลของคนประหลาด',
        },
        rating: 3.6,
    },
    {
        names: {
            en: 'The Apothecary Diaries',
            ja: '薬屋のひとりごと',
            th: 'สืบคดีปริศนาหมอยาตำรับใหญ่',
        },
        rating: 4.6,
    },
    {
        names: {
            en: 'Pseudo Harem',
            ja: '擬似ハーレム',
            th: 'ฮาเร็มนี้มีแค่เธอคนเดียว',
        },
        rating: 3.7,
    },
    {
        names: {
            en: 'The Helpful Fox Senko-san',
            ja: '世話やきキツネの仙狐さん',
            th: 'คุณจิ้งจอกเซ็นโกะซัง',
        },
        rating: 3.3,
    },
    {
        names: {
            en: 'Talentless Nana',
            ja: '無能なナナ',
            th: 'แผนลับดับ "ศัตรู"',
        },
        rating: 4.6,
    },
    {
        names: {
            en: 'Future Diary',
            ja: '未来日記',
            th: 'บันทึกมรณะ',
        },
        rating: 3.3,
    },
    {
        names: {
            en: 'Blue Archive The Animation',
            ja: 'ブルーアーカイブ The Animation',
            th: 'บลูอาร์ไคฟ์ ดิ อนิเมชัน',
        },
        rating: 4.0,
    },
    {
        names: {
            en: "KonoSuba: God's Blessing on This Wonderful World!",
            ja: 'この素晴らしい世界に祝福を！',
            th: 'ขอให้โชคดีมีชัยในโลกแฟนตาซี!',
        },
        rating: 4.5,
    },
    {
        names: {
            en: 'Kanan-sama Is Easy as Pie!',
            ja: 'かなん様はあくまでチョロい (Kanan-sama wa Akumade Choroi)',
            th: 'ท่านคานันน่ะ รับมือง่ายสุดๆ เลยครับ',
        },
        rating: 3.6,
    },
    {
        names: {
            en: 'Alya Sometimes Hides Her Feelings in Russian',
            ja: '時々ボソッとロシア語でデレる隣のアーリャさん',
            th: 'คุณอาเรียจุคกู๊ดพูดรัสเซียใส่แต่ไม่รู้ว่าเธอคิดอะไรอยู่',
        },
        rating: 4.3,
    },
    {
        names: {
            en: 'TONIKAWA: Over The Moon For You',
            ja: 'トニカクカワイイ',
            th: 'จะยังไงก็น่ารัก',
        },
        rating: 3.5,
    },
    {
        names: {
            en: 'Grand Blue Dreaming',
            ja: 'ぐらんぶる',
            th: 'ก๊วนป่วนชวนก๊ง',
        },
        rating: null,
    },
    {
        names: {
            en: 'K-ON!',
            ja: 'けいおん！',
            th: 'ก๊วนดนตรีแป๊ะแป๋ว',
        },
        rating: 3.8,
    },
    {
        names: {
            en: 'Horimiya',
            ja: 'ホリミヤ',
            th: 'โฮริมิยะ สาวมั่นกับนายมืดมน',
        },
        rating: 3.9,
    },
    {
        names: {
            en: 'The Melancholy of Haruhi Suzumiya',
            ja: '涼宮ハルヒの憂鬱',
            th: 'เรียกเธอว่าพระเจ้า ฮารุฮิ',
        },
        rating: null,
    },
    {
        names: {
            en: 'Chained Soldier',
            ja: '魔都精兵のスレイブ',
            th: 'ทาสสุดแกร่งแห่งหน่วยป้องกันอสูร',
        },
        rating: 3.4,
    },
    {
        names: {
            en: 'Classroom of the Elite',
            ja: 'ようこそ実力至上主義の教室へ',
            th: 'ขอต้อนรับสู่ห้องเรียนนิยมเฉพาะยอดคน',
        },
        rating: 4.6,
    },
    {
        names: {
            en: 'Sasaki and Peeps',
            ja: '佐々木とピーちゃん',
            th: 'ซาซากิกับพีจัง',
        },
        rating: 4.1,
    },
    {
        names: {
            en: 'Himouto! Umaru-chan',
            ja: '干物妹！うまるちゃん',
            th: 'น้องสาวสุดติ่ง อุมารุจัง',
        },
        rating: 4.6,
    },
    {
        names: {
            en: 'Sword Art Online',
            ja: 'ซอร์ดอาร์ตออนไลน์ (ソードアート・オンライン)',
            th: 'ซอร์ดอาร์ตออนไลน์',
        },
        rating: 4.4,
    },
    {
        names: {
            en: 'Black Clover',
            ja: 'ブラッククローバー',
            th: 'แบล็คโคลเวอร์',
        },
        rating: 3.6,
    },
    {
        names: {
            en: 'Makeine: Too Many Losing Heroines!',
            ja: '負けヒロインが多すぎる！',
            th: 'รักครั้งนี้มีคนนกเยอะไปมั้ย!',
        },
        rating: 4.0,
    },
    {
        names: {
            en: 'Shakugan no Shana',
            ja: '灼眼のシャナ',
            th: 'ชานะ นักรบเนตรอัคคี',
        },
        rating: 2.8,
    },
    {
        names: {
            en: 'Call of the Night',
            ja: 'よふかしのうた',
            th: 'เพลงรักมนุษย์ค้างคาว',
        },
        rating: 4.0,
    },
    {
        names: {
            en: 'In/Spectre',
            ja: '虚構推理',
            th: 'ไขปมปริศนาภูต',
        },
        rating: 3.6,
    },
    {
        names: {
            en: 'The Detective Is Already Dead',
            ja: '探偵はもう、死んでいる。',
            th: 'นักสืบตายแล้ว',
        },
        rating: 4.0,
    },
    {
        names: {
            en: 'Sensei wa Koi wo Oshierられない',
            ja: '先生は恋を教えられない',
            th: 'คุณครูมาดหลอน หัวใจอ่อนแอ',
        },
        rating: 3.7,
    },
    {
        names: {
            en: 'How to Become Ordinary',
            ja: '小市民シリーズ',
            th: 'SHOSHIMIN: วิธีการเป็นคนธรรมดา',
        },
        rating: null,
    },
    {
        names: {
            en: 'Studio Apartment, Good Lighting, Angel Included',
            ja: 'ワンルーム、日当たり普通、天使つき。',
            th: 'หนึ่งห้อง สองหัวใจ อุ่นไอรัก',
        },
        rating: 3.7,
    },
    {
        names: {
            en: "There's No Freaking Way I Can Be Your Lover! Unless...",
            ja: 'わたしが恋人になれるわけないじゃん、ムリムリ！（※ムリじゃなかった!?）',
            th: 'ไม่มีทางที่ฉันจะกลายเป็นคนรักของเธอได้หรอก! (หรือว่าจะได้!?)',
        },
        rating: 3.5,
    },
    {
        names: {
            en: 'Gabriel DropOut',
            ja: 'ガヴリールドロップアウト',
            th: 'Gabriel DropOut ไม่เป็นนางฟ้าได้ไหมเนี่ย',
        },
        rating: null,
    },
    {
        names: {
            en: 'Senpai is an Otokonoko',
            ja: '先輩はおとこのこ',
            th: 'รุ่นพี่คนนี้เป็นผู้ชายนะ',
        },
        rating: 3.4,
    },
    {
        names: {
            en: "Frieren: Beyond Journey's End",
            ja: '葬送のフリーレン',
            th: 'คำอธิษฐานในวันที่จากลา',
        },
        rating: 4.1,
    },
    {
        names: {
            en: 'My Deer Friend Nantan',
            ja: 'しかのこのこのここしたんたん',
            th: 'โนโกะตัน เพื่อนฉันพันธุ์กวาง',
        },
        rating: 3.7,
    },
    {
        names: {
            en: 'Slow Loop',
            ja: 'スローループ',
            th: 'สโลว์ลูป',
        },
        rating: 3.2,
    },
    {
        names: {
            en: "Masamune-kun's Revenge",
            ja: '政宗くんのリベンジ',
            th: 'การแก้แค้นของมาซามุเนะคุง',
        },
        rating: null,
    },

    {
        names: {
            en: 'YuruYuri: Happy Go Lily',
            ja: 'ゆるゆり',
            th: 'คลับบ้าฮาต๊อง',
        },
        rating: 3.4,
    },
    {
        names: {
            en: 'How Heavy Are the Dumbbells You Lift?',
            ja: 'ダンベル何キロ持てる？',
            th: 'เธอยกดัมเบลได้กี่กิโลกรัมน่ะ',
        },
        rating: 3.8,
    },
    {
        names: {
            en: 'Gushing over Magical Girls',
            ja: '魔法少女にあกがれて',
            th: 'สาวน้อยเวทมนตร์แอบS',
        },
        rating: 3.5,
    },
    {
        names: {
            en: 'To LOVE Ru Darkness',
            ja: 'To LOVEる -とらぶる- ダークネス',
            th: 'ทระเบิล ดาร์กเนส',
        },
        rating: null,
    },
    {
        names: {
            en: 'The Summer Hikaru Died',
            ja: '光が死んだ夏',
            th: 'หน้าร้อนที่ฮิคารุจากไป',
        },
        rating: 3.0,
    },
    {
        names: {
            en: "Watari-kun's ****** Is on the Verge of Collapse",
            ja: '渡くんの✕✕が崩壊寸前',
            th: 'เมื่อ XX ของวาตาริคุงถึงคราอวสาน',
        },
        rating: null,
    },
    {
        names: {
            en: "No Matter How I Look at It, It's You Guys' Fault I'm Not Popular!",
            ja: '私がモテないのはどう考えてもお前らが悪い！',
            th: 'WataMote สาวมืดมนอลวนหารัก',
        },
        rating: 3.2,
    },
    {
        names: {
            en: 'Girlfriend, Girlfriend',
            ja: '彼女も彼女',
            th: 'จะคนไหนก็แฟนสาว',
        },
        rating: 3.6,
    },
    {
        names: {
            en: 'Uma Musume: Pretty Derby',
            ja: 'ウマ娘 プリティーダービー',
            th: 'อุมามุสึเมะ ปริตตีเดอร์บี',
        },
        rating: 4.2,
    },
    {
        names: {
            en: 'Kotoura-san',
            ja: '琴浦さん',
            th: 'สาวน้อยอ่านใจ',
        },
        rating: null,
    },
    {
        names: {
            en: 'Baki Hanma',
            ja: 'ハンマバキ',
            th: 'ฮันมะ บากิ',
        },
        rating: 3.5,
    },
    {
        names: {
            en: 'Wotakoi: Love Is Hard for Otaku',
            ja: 'ヲタクに恋は難しい',
            th: 'ยากแท้จริงหนอรักแท้ของโอตาคุ',
        },
        rating: null,
    },
    {
        names: {
            en: "The Aristocrat's Otherworld Adventure: Serving Gods Who Go Too Far",
            ja: '転生貴族の異世界冒険録～自重を知らない神々の使徒～',
            th: 'เกิดใหม่เป็นขุนนางไปผจญภัยในต่างโลก',
        },
        rating: 3.1,
    },
    {
        names: {
            en: 'Rent-a-Girlfriend',
            ja: '彼女、お借りします',
            th: 'สะดุดรักยัยแฟนเช่า',
        },
        rating: 4.3,
    },
    {
        names: {
            en: 'Gonna be the Twin-Tail!!',
            ja: '俺、ツインテールになります。',
            th: 'ทวินเทลกู้โลก',
        },
        rating: 2.9,
    },
    {
        names: {
            en: 'Amagami SS',
            ja: 'アマガミSS',
            th: 'อุบัติรักวันคริสต์มาส (อมะกามิ SS)',
        },
        rating: null,
    },
    {
        names: {
            en: 'Tsurezure Children',
            ja: '徒然チルドレン',
            th: 'รักเรานั้นนิรันดร์',
        },
        rating: 3.1,
    },
    {
        names: {
            en: 'Amagi Brilliant Park',
            ja: '甘城ブリリアントパーク',
            th: 'ปฏิบัติการพลิกวิกฤตสวนสนุกอมะงิ',
        },
        rating: null,
    },
    {
        names: {
            en: 'Hyouka',
            ja: '氷菓',
            th: 'ปริศนาความทรงจำ (เฮียวคะ)',
        },
        rating: 3.6,
    },
    {
        names: {
            en: 'Seraph of the End: Vampire Reign',
            ja: '終わりのセラフ',
            th: 'เทวทูตแห่งเงามืด',
        },
        rating: null,
    },
    {
        names: {
            en: 'Kaminaki Sekai no Kamisama Katsudou',
            ja: '神無き世界の神様活動',
            th: 'โลกนี้ โลกหน้า ข้าก็เป็นพระเจ้า',
        },
        rating: 3.7,
    },
    {
        names: {
            en: 'How Clumsy you are, Miss Ueno.',
            ja: '上野さんは不器用',
            th: 'คุณอุเอโนะคนเซ่อซ่า',
        },
        rating: 3.3,
    },
    {
        names: {
            en: 'Heavenly Delusion',
            ja: '天国大魔境',
            th: 'ถอดรหัสแดนมหัศจรรย์',
        },
        rating: 3.1,
    },
    {
        names: {
            en: 'When Will Ayumu Make His Move?',
            ja: 'それでも歩は寄せてくる',
            th: 'ขอรุกเข้าไปใกล้ ๆ ใจเธอ',
        },
        rating: 3.6,
    },
    {
        names: {
            en: 'Undead Unluck',
            ja: 'アンデッドアンラック',
            th: 'อันเดด อันลัค',
        },
        rating: 3.2,
    },
    {
        names: {
            en: 'Oreshura',
            ja: '俺の彼女と幼なじみが修羅場すぎる',
            th: 'ศึกรักแฟนสาวกับเพื่อนสมัยเด็กสุดชุลมุน',
        },
        rating: null,
    },
    {
        names: {
            en: "Akebi's Sailor Uniform",
            ja: '明日ちゃんのセーラー服',
            th: 'ชุดกะลาสีของอาเคบิจัง',
        },
        rating: null,
    },
    {
        names: {
            en: 'Mashle: Magic and Muscles',
            ja: 'マッシュル-MASHLE-',
            th: 'ศึกโลกเวทมนตร์คนพลังกล้าม',
        },
        rating: 4.1,
    },
    {
        names: {
            en: 'Rewrite',
            ja: 'リライト',
            th: 'รีไรต์',
        },
        rating: null,
    },
    {
        names: {
            en: 'Even the Student Council Has Its Holes!',
            ja: '生徒会にも穴はある',
            th: 'สภานักเรียนฉบับรั่ว!',
        },
        rating: 3.4,
    },
    {
        names: {
            en: 'Lycoris Recoil',
            ja: 'リコリス・リコイル',
            th: 'ไลโคริส รีคอยล์',
        },
        rating: 3.7,
    },
    {
        names: {
            en: 'Dandadan',
            ja: 'ダンダダン',
            th: 'ดันดาดัน',
        },
        rating: 3.8,
    },
    {
        names: {
            en: 'Cultural Exchange with a Game Centre Girl',
            ja: 'ゲーセン少女と異文化交流',
            th: 'แลกเปลี่ยนวัฒนธรรมกับสาวเกมเซ็นเตอร์',
        },
        rating: null,
    },
    {
        names: {
            en: 'Marriagetoxin',
            ja: 'マリッジトキシン',
            th: 'วิวาห์แต้มพิษ',
        },
        rating: 4.3,
    },
    {
        names: {
            en: 'My Teen Romantic Comedy SNAFU',
            ja: 'やはり俺の青春ラブコメはまちがっている。',
            th: 'กะแล้วชีวิตรักวัยรุ่นของผมมันต้องไม่สดใสเลยสักนิด',
        },
        rating: 3.4,
    },
    {
        names: {
            en: 'The Pet Girl of Sakurasou',
            ja: 'さくら荘のペットな彼女',
            th: 'ซากุระโซว หอพักสร้างฝัน',
        },
        rating: 4.3,
    },
    {
        names: {
            en: 'Love, Chunibyo & Other Delusions!',
            ja: '中二病でも恋がしたい！',
            th: 'รักสุดเพี้ยนของยัยเกรียนหลุดโลก!',
        },
        rating: 4.3,
    },
    {
        names: {
            en: 'No-Rin',
            ja: 'のうりん',
            th: 'ไอดอลสาวชาวไร่',
        },
        rating: 4.1,
    },

    {
        names: {
            en: 'The 100 Girlfriends Who Really, Really, Really, Really, Really Love You',
            ja: '君のことが大大大大大好きな100人の彼女',
            th: 'รักรักรักรักรักรักเธอหมดหัวใจจากแฟนสาว 100 คน',
        },
        rating: null,
    },
    {
        names: {
            en: 'The Ice-Cold Sato-san Is Only Sweet to Me',
            ja: '塩対応の佐藤さんが俺にだけ甘い',
            th: 'คุณซาโต้คนเย็นชา หวานกับผมแค่คนเดียว',
        },
        rating: null,
    },
    {
        names: {
            en: 'FX Fighter Kurumi-chan',
            ja: 'FX戦士くるみちゃん',
            th: 'FX Fighter Kurumi-chan',
        },
        rating: null,
    },
    {
        names: {
            en: "The Girl's Caretaker: I Became the Secret Caretaker of the Perfect Young Lady (Who Has Zero Life Skills) at a Prestigious High School Full of Flowers",
            ja: 'お嬢様のお世話係～高嶺の花だらけな名門校で、学院一のお嬢様（生活能力皆無）を陰ながらお世話することになりました～',
            th: 'ผมกลายเป็นผู้ดูแลแบบลับๆ ของคุณหนู (ที่ไม่มีความสามารถในการดำรงชีพ) ที่แสนเพียบพร้อมของโรงเรียนมัธยมอันทรงเกียรติที่เต็มไปด้วยดอกฟ้า',
        },
        rating: null,
    },
    {
        names: {
            en: 'Non Non Biyori',
            ja: 'のんのんびより',
            th: 'สาวใสหัวใจบ้านทุ่ง',
        },
        rating: null,
    },
    {
        names: {
            en: 'Laid-Back Camp',
            ja: 'ゆるキャン△',
            th: 'แคมป์สบายสไตล์สาวๆ',
        },
        rating: null,
    },
    {
        names: {
            en: 'My Childhood Friend Who I Thought Was a Boy Turned Out to Be a Beautiful Girl at My New School',
            ja: '男だと思っていた幼馴染が転校先で美少女になっていた件',
            th: 'เพื่อนสมัยเด็กที่เคยคิดว่าเป็นผู้ชายดันกลายเป็นสาวสวยในโรงเรียนใหม่',
        },
        rating: null,
    },
    {
        names: {
            en: 'Hanaori-san Wants to Have a Fight Even If She Reincarnates',
            ja: '花織さんは転生しても喧嘩がしたい',
            th: 'คุณฮานาโอริอยากจะทะเลาะกันแม้ว่าจะได้เกิดใหม่ก็ตาม',
        },
        rating: null,
    },
    {
        names: {
            en: 'Though I Am an Inept Villainess: Tale of the Butterfly-Rat Body Swap in the Maiden Court',
            ja: 'ふつつかな悪女ではございますが ～雛宮蝶鼠とりかえ伝～',
            th: 'ถึงข้าจะเป็นนางร้ายที่ไร้ความสามารถ ~ตำนานสลับร่างผีเสื้อหนูแห่งวังใน~',
        },
        rating: null,
    },
    {
        names: {
            en: "Heroine? Saint? No, I'm an All-Works Maid (And Proud of It)!",
            ja: 'ヒロイン？聖女？いいえ、オールワークスメイドです（誇）！',
            th: 'นางเอก? สตรีศักดิ์สิทธิ์? โนๆ เมดครบวงจรรับจบทุกงานค่า (ภูมิใจ)!',
        },
        rating: null,
    },
    {
        names: {
            en: "Young Ladies Don't Play Fighting Games",
            ja: '対ありでした。 ～お嬢さまは格闘ゲームなんてしない～',
            th: 'คุณหนูสายปะทะ ไม่เล่นเกมต่อสู้หรอกนะ',
        },
        rating: null,
    },
    {
        names: {
            en: 'Love Unseen Beneath the Clear Night Sky',
            ja: '透明な夜に駆ける君と、目に見えない恋をした。',
            th: 'รักที่มองไม่เห็นด้วยตากับเธอในค่ำคืนที่แสนจะเลือนราง',
        },
        rating: null,
    },
    {
        names: {
            en: 'I Want to Love You Till Your Dying Day',
            ja: 'きみが死ぬまで恋をしたい',
            th: 'เพียงได้รักตราบสิ้นลมหายใจ',
        },
        rating: null,
    },
    {
        names: {
            en: 'My Mental Choices Are Completely Interfering With My School Romantic Comedy',
            ja: '俺の脳内選択肢が、学園ラブコメを全力で邪魔している',
            th: 'ปรนัยบังคับเลือก',
        },
        rating: null,
    },
    {
        names: {
            en: 'Yamada-kun and the Seven Witches',
            ja: '山田くんと7人の魔女',
            th: 'ยามาดะคุงกับแม่มดทั้ง 7 (สับขั้วมาลุ้นรัก)',
        },
        rating: null,
    },
    {
        names: {
            en: 'You and I Are Polar Opposites',
            ja: '正反対な君と僕',
            th: 'ลุ้นรักฉบับคู่ต่างขั้ว',
        },
        rating: null,
    },
    {
        names: {
            en: 'Mushoku Tensei: Jobless Reincarnation',
            ja: '無職転生 ～異世界行ったら本気だす～',
            th: 'เกิดชาตินี้พี่ต้องเทพ',
        },
        rating: null,
    },
    {
        names: {
            en: 'The Saga of Tanya the Evil',
            ja: '幼女戦記',
            th: 'บันทึกสงครามของยัยเผด็จการ',
        },
        rating: null,
    },
    {
        names: {
            en: 'The Elusive Samurai',
            ja: '逃げ上手の若君',
            th: 'นายน้อยจอมโกยก้าวสู่เส้นทางวีรบุรุษ',
        },
        rating: null,
    },
    {
        names: {
            en: 'Even a Replica Can Fall in Love',
            ja: 'レプリカだって、恋をする',
            th: 'รักฉันเทียมเธอ',
        },
        rating: null,
    },
    {
        names: {
            en: 'Nichijou - My Ordinary Life',
            ja: '日常',
            th: 'สามัญขยันรั่ว',
        },
        rating: null,
    },
    {
        names: {
            en: 'Azumanga Daioh',
            ja: 'あずまんが大王',
            th: 'โรงเรียนป่วน นักเรียนเป๋อ',
        },
        rating: null,
    },
    {
        names: {
            en: 'I Want You To Make a Disgusted Face and Show Me Your Underwear',
            ja: '嫌な顔されながらおパンツ見せてもらいたい',
            th: 'Iya na Kao Sarenagara Opantsu Misete Moraitai',
        },
        rating: null,
    },
    {
        names: {
            en: 'Expressionless Face Girl and Emotional Face Boy',
            ja: '顔に出ない柏田さんと顔に出る太田君',
            th: 'คาชิวาดะที่ไม่แสดงออกและโอตะที่แสดงออก',
        },
        rating: null,
    },
    {
        names: {
            en: 'I Want to End This Love Game',
            ja: '愛してるゲームを終わらせたい',
            th: 'เกมสารภาพรักนี้น่ะ เรามาจบมันกันเถอะ',
        },
        rating: null,
    },
    {
        names: {
            en: "Goddess 'Cafe Terrace' / Reborn as a Spare Rib",
            ja: '女神様「どうぞお好きなものへ転生してください」俺「じゃあ勇者の肋骨で」',
            th: 'ท่านเทพธิดาจัดมา ผมก็จัดไป ขอเกิดใหม่เป็นซี่โครงผู้กล้าละกันครับ',
        },
        rating: null,
    },
    {
        names: {
            en: 'Kill Blue',
            ja: 'キルアオ',
            th: 'คิลบลู',
        },
        rating: null,
    },
    {
        names: {
            en: 'Parallel World Pharmacy',
            ja: '異世界薬局',
            th: 'เภสัชกรเทพสองโลก',
        },
        rating: null,
    },
    {
        names: {
            en: 'Akane-banashi',
            ja: 'あかね噺',
            th: 'อาคาเนะ พลิกตำนานวงการราคุโกะ',
        },
        rating: null,
    },
    {
        names: {
            en: 'The Dungeon of Black Company',
            ja: '迷宮ブラックカンパニー',
            th: 'กรรมกรดันเจี้ยน',
        },
        rating: null,
    },
    {
        names: {
            en: 'Medaka Kuroiwa Is Impervious to My Charms',
            ja: '黒岩メダカに私の可愛いが通じない',
            th: 'คุโรอิวะ เมดากะ ไม่เข้าใจความน่ารักของฉันเลย',
        },
        rating: null,
    },
    {
        names: {
            en: "The Villainess's Ghost and the Innocent Girl Solve a Big Case",
            ja: '悪役令嬢の幽霊と純真令嬢の大事件簿',
            th: 'ผีนางร้ายจับคู่สาวซื่อ รื้อคดีใหญ่',
        },
        rating: null,
    },
    {
        names: {
            en: 'Pop Team Epic',
            ja: 'ポプテピピック',
            th: 'ป๊อป ทีม อีพิค',
        },
        rating: null,
    },
    {
        names: {
            en: 'Summer Pockets',
            ja: 'Summer Pockets',
            th: 'Summer Pockets',
        },
        rating: null,
    },
    {
        names: {
            en: 'Rooster Fighter',
            ja: 'ニワトリ・ファイター',
            th: 'ยอดไก่นักสู้กู้โลก',
        },
        rating: null,
    },
    {
        names: {
            en: 'The Diary of a Human, a God, and a Demon',
            ja: '人間と神と悪魔の日記',
            th: 'ไดอารี่ของมนุษย์ เทพเจ้าและปีศาจ',
        },
        rating: null,
    },
    {
        names: {
            en: 'Reborn as a Noble ~Unrivaled Since Birth~',
            ja: '貴族転生 ～恵まれた生まれから最強の力を得る～',
            th: 'เกิดใหม่มาเป็นผู้สูงศักดิ์ ~สุดแกร่งไร้เทียมทานแต่กำเนิด~',
        },
        rating: null,
    },
    {
        names: {
            en: 'I Became Friends with the Second Cutest Girl in My Class',
            ja: 'クラスで2番目に可愛い女の子と友だちになった',
            th: 'เพื่อนคนแรกของผมคือสาวสวยอันดับสองของห้อง',
        },
        rating: null,
    },
    {
        names: {
            en: 'Anohana: The Flower We Saw That Day',
            ja: 'あの日見た花の名前を僕達はまだ知らない。',
            th: 'ดอกไม้ มิตรภาพ และความทรงจำ',
        },
        rating: null,
    },
    {
        names: {
            en: 'Made in Abyss',
            ja: 'メイドインアビス',
            th: 'ผ่าเหวนรก (Made in Abyss)',
        },
        rating: null,
    },
    {
        names: {
            en: 'Cautious Hero: The Hero Is Overpowered but Overly Cautious',
            ja: '慎重勇者～この勇者が俺TUEEEくせに慎重すぎる～',
            th: 'ผู้กล้าสุดแกร่ง ขี้ระแวงขั้นวิกฤติ',
        },
        rating: null,
    },
    {
        names: {
            en: 'Wandering Witch: The Journey of Elaina',
            ja: '魔女の旅々',
            th: 'การเดินทางของคุณแม่มด',
        },
        rating: null,
    },
    {
        names: {
            en: 'Charlotte',
            ja: 'シャーロット',
            th: 'ชาร์ล็อตต์',
        },
        rating: null,
    },
    {
        names: {
            en: "Marika's Love Meter Malfunction",
            ja: '茉莉花ちゃんの好感度はぶっ壊れている',
            th: 'ค่าความชอบของมาริกะจัง พังพินาศไปซะแล้ว',
        },
        rating: null,
    },
    {
        names: {
            en: 'Love Flops',
            ja: '恋愛フロップス',
            th: 'เร็นไอฟล็อปส์',
        },
        rating: null,
    },
    {
        names: {
            en: 'Cosmic Princess Kaguya',
            ja: '超かぐや姫！',
            th: 'เจ้าหญิงคางุยะแห่งห้วงอวกาศ',
        },
        rating: null,
    },
    {
        names: {
            en: 'Wandance',
            ja: 'ワンダンス',
            th: 'วันแดนซ์',
        },
        rating: null,
    },
    {
        names: {
            en: 'Can a Boy-Girl Friendship Survive?',
            ja: '男女の友情は成立する？（いや、しないっ!!）',
            th: 'เธอกับฉันเพื่อนกันใช่มั้ย (ไม่ใช่!!)',
        },
        rating: null,
    },
];

export const animeList: AnimeItem[] = animes.map((anime, index) => ({
    id: `anime-${index + 1}`,
    ...anime,
}));
