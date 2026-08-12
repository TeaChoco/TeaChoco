// -Path: "TeaChoco-Portfolio/client/src/data/skill.ts"
import { type TagIconKey } from './icon';

export const categories = ['all', 'frontend', 'backend', 'devops', 'database', 'language'] as const;

export type SkillCategory = (typeof categories)[number];

export type Skill = {
    id: TagIconKey;
    name: string;
    level: number;
    category: SkillCategory;
};

export const skills: Skill[] = [
    {
        id: 'Nodejs',
        name: 'Node.js',
        level: 98,
        category: 'backend',
    },
    {
        id: 'Nestjs',
        name: 'Nest.js',
        level: 64,
        category: 'backend',
    },
    {
        id: 'React',
        name: 'React.js',
        level: 92,
        category: 'frontend',
    },
    {
        id: 'JavaScript',
        name: 'JavaScript',
        level: 85,
        category: 'language',
    },
    {
        id: 'TypeScript',
        name: 'TypeScript',
        level: 90,
        category: 'language',
    },
    {
        id: 'Discordjs',
        name: 'Discord.js',
        level: 60,
        category: 'backend',
    },
    {
        id: 'TailwindCSS',
        name: 'CSS / TailwindCSS',
        level: 88,
        category: 'frontend',
    },
    {
        id: 'MongoDB',
        name: 'Database (MongoDB)',
        level: 70,
        category: 'database',
    },
    { id: 'Vercel', name: 'Vercel', level: 52, category: 'devops' },
    { id: 'Nextjs', name: 'Next.js', level: 78, category: 'frontend' },
    { id: 'Threejs', name: 'Three.js', level: 72, category: 'frontend' },
    { id: 'SocketIO', name: 'Socket.io', level: 74, category: 'backend' },
    { id: 'Rendercom', name: 'Render.com', level: 50, category: 'devops' },
    { id: 'Expressjs', name: 'Express.js', level: 75, category: 'backend' },
    { id: 'GitGitHub', name: 'Git & GitHub', level: 80, category: 'devops' },
    { id: 'Docker', name: 'Docker', level: 30, category: 'devops' },
    {
        id: 'Python',
        name: 'Python',
        level: 20,
        category: 'language',
    },
];
