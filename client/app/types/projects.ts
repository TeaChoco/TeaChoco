// -Path: "TeaChoco-Portfolio/client/src/types/projects.ts"
import type { TagIconKey } from './icon';

export type CategoryKeys =
    | 'all'
    | 'public'
    | 'web'
    | 'server'
    | 'bot'
    | 'template';

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