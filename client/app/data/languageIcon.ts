// -Path: "TeaChoco-Portfolio/client/src/data/languageIcon.ts"
import { TH, GB, JP, US, CN } from 'country-flag-icons/react/3x2';
import type { IconType } from 'react-icons';
import {
    FaBookOpen,
    FaMicrophone,
    FaEarListen,
    FaPen,
    FaKeyboard,
} from 'react-icons/fa6';
import type { LanguageSkillAbility } from '~/types/language';

export const languageFlags: Record<'TH' | 'GB' | 'JP' | 'US' | 'CN', IconType> = {
    TH,
    GB,
    JP,
    US,
    CN,
};

export const abilityIcons: Record<LanguageSkillAbility, IconType> = {
    read: FaBookOpen,
    speak: FaMicrophone,
    listen: FaEarListen,
    write: FaPen,
    type: FaKeyboard,
};
