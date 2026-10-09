// -Path: "TeaChoco-Portfolio/client/src/data/language.ts"
import type { LanguageSkill, LanguageSkillAbility } from '~/types/language';

export const abilityKeys: LanguageSkillAbility[] = ['read', 'speak', 'listen', 'write', 'type'];

export const abilityColors: Record<LanguageSkillAbility, string> = {
    read: '#10b981',
    speak: '#3b82f6',
    listen: '#8b5cf6',
    write: '#f59e0b',
    type: '#ec4899',
};

export const languageSkills: LanguageSkill[] = [
    {
        id: 'thai',
        flag: 'TH',
        native: true,
        abilities: {
            read: 100,
            speak: 100,
            listen: 100,
            write: 100,
            type: 100,
        },
    },
    {
        id: 'english',
        flag: 'GB',
        abilities: {
            read: 80,
            speak: 30,
            listen: 60,
            write: 40,
            type: 90,
        },
    },
    {
        id: 'japanese',
        flag: 'JP',
        abilities: {
            read: 45,
            speak: 5,
            listen: 40,
            write: 10,
            type: 25,
        },
    },
];