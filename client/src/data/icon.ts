// -Path: "TeaChoco-Portfolio/client/src/components/data/icon.ts"
import {
    SiCss,
    SiVite,
    SiReact,
    SiHtml5,
    SiRender,
    SiGithub,
    SiDocker,
    SiPython,
    SiNestjs,
    SiVercel,
    SiDiscord,
    SiExpress,
    SiMongodb,
    SiNodedotjs,
    SiNextdotjs,
    SiThreedotjs,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiSocketdotio,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

export const tagIcons = {
    CSS: SiCss,
    SSR: SiVite,
    Vite: SiVite,
    HTML: SiHtml5,
    React: SiReact,
    Python: SiPython,
    Vercel: SiVercel,
    Docker: SiDocker,
    Nestjs: SiNestjs,
    MongoDB: SiMongodb,
    Nextjs: SiNextdotjs,
    Nodejs: SiNodedotjs,
    Rendercom: SiRender,
    Expressjs: SiExpress,
    Discordjs: SiDiscord,
    GitGitHub: SiGithub,
    Threejs: SiThreedotjs,
    SocketIO: SiSocketdotio,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    TailwindCSS: SiTailwindcss,
} as Record<TagIconKey, IconType>;

export type TagIconKey =
    | 'CSS'
    | 'SSR'
    | 'HTML'
    | 'Vite'
    | 'React'
    | 'Python'
    | 'Docker'
    | 'Vercel'
    | 'Nodejs'
    | 'Nextjs'
    | 'Nestjs'
    | 'MongoDB'
    | 'Threejs'
    | 'SocketIO'
    | 'Discordjs'
    | 'Expressjs'
    | 'Rendercom'
    | 'GitGitHub'
    | 'JavaScript'
    | 'TypeScript'
    | 'TailwindCSS';

export const getTagIcon = (tag: TagIconKey): IconType => tagIcons[tag];
