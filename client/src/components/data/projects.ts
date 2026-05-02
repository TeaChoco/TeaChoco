export const categories = ['all', 'web', 'backend', 'bot', 'template'] as const;

export type Category = (typeof categories)[number];

type Project = {
    id: string;
    titleKey: string;
    descKey: string;
    tags: string[];
    image?: string;
    placehold?: string;
    categorys: Category[];
    github?: string;
    live?: string;
};

export const projects: Project[] = [
    {
        id: 'portfolio',
        titleKey: 'portfolio.projects.portfolio.title',
        descKey: 'portfolio.projects.portfolio.desc',
        tags: ['TypeScript', 'Vite', 'React', 'Three.js'],
        image: '/TeaChoco-Developer-logo.png',
        categorys: ['web'],
        github: 'https://github.com/TeaChoco/TeaChoco',
        live: '/',
    },
    {
        id: 'poke-rotom',
        titleKey: 'portfolio.projects.pokeRotom.title',
        descKey: 'portfolio.projects.pokeRotom.desc',
        tags: ['TypeScript', 'Vite', 'React', 'Node.js', 'Three.js', 'Socket.IO'],
        image: 'https://pokerotom.vercel.app/favicon.ico',
        categorys: ['web'],
        github: 'https://github.com/TeaChocoOfficial/PokeRotom',
        live: 'https://pokerotom.vercel.app',
    },

    {
        id: 'vite-extra-react-ssr-typescript-template',
        titleKey: 'portfolio.projects.viteExtraReactSsr.title',
        descKey: 'portfolio.projects.viteExtraReactSsr.desc',
        tags: ['Vite', 'React', 'SSR', 'Tailwind CSS', 'TypeScript'],
        placehold: 'Vite+React+TS+SSR',
        categorys: ['web', 'template'],
        github: 'https://github.com/TeaChoco/Vite-Extra-React-SSR-TypeScript',
    },
    {
        id: 'vite-react-typescript-template',
        titleKey: 'portfolio.projects.viteReact.title',
        descKey: 'portfolio.projects.viteReact.desc',
        tags: ['Vite', 'React', 'Tailwind CSS', 'TypeScript'],
        placehold: 'Vite+React+TS',
        categorys: ['web', 'template'],
        github: 'https://github.com/TeaChoco/Vite-React-TypeScript',
    },
    {
        id: 'choco-developer-bot',
        titleKey: 'portfolio.projects.chocoDeveloperBot.title',
        descKey: 'portfolio.projects.chocoDeveloperBot.desc',
        tags: ['TypeScript', 'Node.js', 'Discord.js', 'MongoDB'],
        placehold: 'Choco+Developer+Bot',
        categorys: ['bot'],
        github: 'https://github.com/TeaChocoOfficial/Choco-Developer-Bot',
    },
];
