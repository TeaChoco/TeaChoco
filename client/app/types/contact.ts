// -Path: "TeaChoco-Portfolio/client/src/types/contact.ts"
import type { IconType } from 'react-icons';

export type ContentKey = 'developer' | 'official' | 'private';

export interface ContactProfile {
    key: ContentKey;
    labelKey: string;
    image: string;
    accent: string;
}

export interface ContactMethod {
    icon: IconType;
    label: string;
    value: string;
    href?: string;
    color?: string;
}

export interface DiscordServerLink {
    id: string;
    link: string;
    title: string;
    image: string;
}
