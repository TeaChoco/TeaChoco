// -Path: "TeaChoco-Portfolio/client/src/types/projects.ts"
import type { TagIconKey } from './icon';
import type { CategoryKeys } from './category';

export type Project = {
    id: string;
    key: string;
    tags: TagIconKey[];
    image?: string;
    categorys: CategoryKeys[];
    github?: string;
    live?: string;
};
