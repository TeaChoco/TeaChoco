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

export type TagIcon = {
    icon: IconType;
    color?: string;
};

export const tagIcons = {
    CSS: { icon: SiCss, color: '#1572B6' },
    SSR: { icon: SiVite, color: '#646CFF' },
    Vite: { icon: SiVite, color: '#646CFF' },
    HTML: { icon: SiHtml5, color: '#E34C26' },
    React: { icon: SiReact, color: '#61DAFB' },
    Python: { icon: SiPython, color: '#3776ab' },
    Vercel: { icon: SiVercel },
    Docker: { icon: SiDocker, color: '#2496ED' },
    Nestjs: { icon: SiNestjs, color: '#EA2845' },
    MongoDB: { icon: SiMongodb, color: '#47A248' },
    Nextjs: { icon: SiNextdotjs },
    Nodejs: { icon: SiNodedotjs, color: '#339933' },
    Rendercom: { icon: SiRender },
    Expressjs: { icon: SiExpress },
    Discordjs: { icon: SiDiscord, color: '#5865F2' },
    GitGitHub: { icon: SiGithub },
    Threejs: { icon: SiThreedotjs },
    SocketIO: { icon: SiSocketdotio },
    JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
    TypeScript: { icon: SiTypescript, color: '#3178C6' },
    TailwindCSS: { icon: SiTailwindcss, color: '#06B6D4' },
} as Record<TagIconKey, TagIcon>;

export const getTagIcon = (tag: TagIconKey): TagIcon => tagIcons[tag];
