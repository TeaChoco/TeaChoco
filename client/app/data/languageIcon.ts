// -Path: "TeaChoco-Portfolio/client/src/data/languageIcon.ts"
import { TH, GB, JP } from 'country-flag-icons/react/3x2';
import type { IconType } from 'react-icons';
import {
    FaBookOpen,
    FaMicrophone,
    FaEarListen,
    FaPen,
    FaKeyboard,
} from 'react-icons/fa6';
import type { LanguageSkillAbility } from '~/types/language';

export const languageFlags: Record<'TH' | 'GB' | 'JP', IconType> = {
    TH,
    GB,
    JP,
};

export const abilityIcons: Record<LanguageSkillAbility, IconType> = {
    read: FaBookOpen,
    speak: FaMicrophone,
    listen: FaEarListen,
    write: FaPen,
    type: FaKeyboard,
};
