// -Path: "TeaChoco-Portfolio/client/src/components/data/projects.ts"
import env from '~/secure/env';
import type { TagIconKey } from './icon';

export const categories = ['all', 'public', 'web', 'server', 'bot', 'template'] as const;

export type CategoryKeys = (typeof categories)[number];

export type Project = {
    id: string;
    titleKey: string;
    descKey: string;
    tags: TagIconKey[];
    image?: string;
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
        tags: ['TypeScript', 'Vite', 'React', 'SSR', 'TailwindCSS'],
        categorys: ['web', 'template'],
        github: 'https://github.com/TeaChoco/Vite-Extra-React-SSR-TypeScript',
    },
    {
        id: 'vite-react-typescript-template',
        titleKey: 'portfolio.projects.viteReact.title',
        descKey: 'portfolio.projects.viteReact.desc',
        tags: ['TypeScript', 'Vite', 'React', 'TailwindCSS', 'SocketIO'],
        categorys: ['web', 'template'],
        github: 'https://github.com/TeaChoco/Vite-React-TypeScript',
    },
    {
        id: 'express-typescript-template',
        titleKey: 'portfolio.projects.express.title',
        descKey: 'portfolio.projects.express.desc',
        tags: ['TypeScript', 'Nodejs', 'Expressjs', 'SocketIO'],
        categorys: ['server', 'template'],
        github: 'https://github.com/TeaChoco/Express-TypeScript',
    },
    {
        id: 'choco-developer-bot',
        titleKey: 'portfolio.projects.chocoDeveloperBot.title',
        descKey: 'portfolio.projects.chocoDeveloperBot.desc',
        tags: ['TypeScript', 'Nodejs', 'Discordjs', 'MongoDB'],
        categorys: ['bot'],
        github: 'https://github.com/TeaChocoOfficial/Choco-Developer-Bot',
    },
];
