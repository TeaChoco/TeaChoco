// -Path: "TeaChoco-Portfolio/client/src/types/coding.ts"
import type { TagIconKey } from './icon';

export type CodingSkillCategory =
    | 'all'
    | 'frontend'
    | 'backend'
    | 'devops'
    | 'database'
    | 'language';

export type CodingSkill = {
    id: TagIconKey;
    name: string;
    level: number;
    category: CodingSkillCategory;
};