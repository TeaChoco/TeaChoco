// -Path: "TeaChoco-Portfolio/client/src/types/icon.ts"
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