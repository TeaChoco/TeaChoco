// -Path: "TeaChoco-Portfolio/client/src/components/data/projects.ts"
import env from '$/secure/env';
import type { TagIconKey } from './icon';

export const categories = ['all', 'public', 'web', 'backend', 'bot', 'template'] as const;

export type CategoryKeys = (typeof categories)[number];

type Project = {
    id: string;
    titleKey: string;
    descKey: string;
    tags: TagIconKey[];
    image?: string;
    placehold?: string;
    categorys: CategoryKeys[];
    github?: string;
    live?: string;
};

export const projects: Project[] = [
    {
        id: 'portfolio',
        titleKey: 'portfolio.projects.portfolio.title',
        descKey: 'portfolio.projects.portfolio.desc',
        tags: ['TypeScript', 'Vite', 'React', 'Threejs'],
        image: `${env.BASE}TeaChoco-Developer-logo.png`,
        categorys: ['public', 'web'],
        github: 'https://github.com/TeaChoco/TeaChoco',
        live: '/',
    },
    {
        id: 'poke-rotom',
        titleKey: 'portfolio.projects.pokeRotom.title',
        descKey: 'portfolio.projects.pokeRotom.desc',
        tags: ['TypeScript', 'Vite', 'React', 'Nodejs', 'Threejs', 'SocketIO'],
        image: 'https://pokerotom.vercel.app/favicon.ico',
        categorys: ['public', 'web'],
        github: 'https://github.com/TeaChocoOfficial/PokeRotom',
        live: 'https://pokerotom.vercel.app',
    },

    {
        id: 'vite-extra-react-ssr-typescript-template',
        titleKey: 'portfolio.projects.viteExtraReactSsr.title',
        descKey: 'portfolio.projects.viteExtraReactSsr.desc',
        tags: ['Vite', 'React', 'SSR', 'TailwindCSS', 'TypeScript'],
        placehold: 'Vite+React+TS+SSR',
        categorys: ['web', 'template'],
        github: 'https://github.com/TeaChoco/Vite-Extra-React-SSR-TypeScript',
    },
    {
        id: 'vite-react-typescript-template',
        titleKey: 'portfolio.projects.viteReact.title',
        descKey: 'portfolio.projects.viteReact.desc',
        tags: ['Vite', 'React', 'TailwindCSS', 'TypeScript'],
        placehold: 'Vite+React+TS',
        categorys: ['web', 'template'],
        github: 'https://github.com/TeaChoco/Vite-React-TypeScript',
    },
    {
        id: 'choco-developer-bot',
        titleKey: 'portfolio.projects.chocoDeveloperBot.title',
        descKey: 'portfolio.projects.chocoDeveloperBot.desc',
        tags: ['TypeScript', 'Nodejs', 'Discordjs', 'MongoDB'],
        placehold: 'Choco+Developer+Bot',
        categorys: ['bot'],
        github: 'https://github.com/TeaChocoOfficial/Choco-Developer-Bot',
    },
];
