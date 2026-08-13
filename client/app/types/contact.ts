// -Path: "TeaChoco-Portfolio/client/src/types/contact.ts"
import type { IconType } from 'react-icons';

export type ContactMethod = {
    icon: IconType;
    label: string;
    value: string;
    href: string;
    color?: string;
};