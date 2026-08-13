// -Path: "TeaChoco-Portfolio/client/src/types/language.ts"

export type LanguageSkillAbility = 'read' | 'speak' | 'listen' | 'write' | 'type';

export type LanguageSkill = {
    id: 'thai' | 'english' | 'japanese';
    flag: 'TH' | 'GB' | 'JP';
    native?: boolean;
    abilities: Record<LanguageSkillAbility, number>;
};