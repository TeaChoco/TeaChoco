// -Path: "TeaChoco-Portfolio/client/src/data/skill.ts"
import { tagIcons } from './icon';
import type { IconType } from 'react-icons';

export const categories = ['all', 'frontend', 'backend', 'devops', 'database', 'language'] as const;

export type SkillCategory = (typeof categories)[number];

export type Skill = {
    name: string;
    level: number;
    color?: string;
    category: SkillCategory;
    icon: IconType;
};

export const skills: Skill[] = [
    {
        name: 'Node.js',
        level: 98,
        color: '#339933',
        category: 'backend',
        icon: tagIcons.Nodejs,
    },
    {
        name: 'Nest.js',
        level: 64,
        color: '#EA2845',
        category: 'backend',
        icon: tagIcons.Nestjs,
    },
    {
        name: 'React.js',
        level: 92,
        color: '#61DAFB',
        category: 'frontend',
        icon: tagIcons.React,
    },
    {
        name: 'JavaScript',
        level: 85,
        color: '#F7DF1E',
        category: 'language',
        icon: tagIcons.JavaScript,
    },
    {
        name: 'TypeScript',
        level: 90,
        color: '#3178C6',
        category: 'language',
        icon: tagIcons.TypeScript,
    },
    {
        name: 'Discord.js',
        level: 60,
        color: '#5865F2',
        category: 'backend',
        icon: tagIcons.Discordjs,
    },
    {
        name: 'CSS / TailwindCSS',
        level: 88,
        color: '#06B6D4',
        category: 'frontend',
        icon: tagIcons.TailwindCSS,
    },
    {
        name: 'Database (MongoDB)',
        level: 70,
        color: '#47A248',
        category: 'database',
        icon: tagIcons.MongoDB,
    },
    { name: 'Vercel', level: 52, category: 'devops', icon: tagIcons.Vercel },
    { name: 'Next.js', level: 78, category: 'frontend', icon: tagIcons.Nextjs },
    { name: 'Three.js', level: 72, category: 'frontend', icon: tagIcons.Threejs },
    { name: 'Socket.io', level: 74, category: 'backend', icon: tagIcons.SocketIO },
    { name: 'Render.com', level: 50, category: 'devops', icon: tagIcons.Rendercom },
    { name: 'Express.js', level: 75, category: 'backend', icon: tagIcons.Expressjs },
    { name: 'Git & GitHub', level: 80, category: 'devops', icon: tagIcons.GitGitHub },
    { name: 'Docker', level: 30, color: '#2496ED', category: 'devops', icon: tagIcons.Docker },
    { name: 'Python', level: 20, color: '#3776ab', category: 'language', icon: tagIcons.Python },
];
