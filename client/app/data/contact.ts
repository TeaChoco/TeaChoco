import type { IconType } from 'react-icons';
import {
    FaDiscord,
    FaEnvelope,
    FaGithub,
    FaYoutube,
    FaXTwitter,
    FaFacebook,
} from 'react-icons/fa6';

export type ContactMethod = {
    icon: IconType;
    label: string;
    value: string;
    href: string;
    color?: string;
};

export const contactMethods: ContactMethod[] = [
    {
        icon: FaEnvelope,
        label: 'Email',
        value: 'teachocodeveloper@gmail.com',
        href: 'mailto:teachocodeveloper@gmail.com',
        color: '#EA4335',
    },
    {
        icon: FaGithub,
        label: 'GitHub',
        value: 'github.com/TeaChoco',
        href: 'https://github.com/TeaChoco',
    },
    {
        icon: FaYoutube,
        label: 'YouTube',
        value: 'youtube.com/@TeaChoco',
        href: 'https://youtube.com/@TeaChoco',
        color: '#FF0000',
    },
    {
        icon: FaXTwitter,
        label: 'X',
        value: '@TeaChocolater',
        href: 'https://x.com/TeaChocolater',
    },
    {
        icon: FaFacebook,
        label: 'Facebook',
        value: 'facebook.com/TeaChocoLater',
        href: 'https://facebook.com/TeaChocoLater',
        color: '#1877F2',
    },
    {
        icon: FaDiscord,
        label: 'Discord',
        value: 'TeaChoco#3830',
        href: 'https://discord.com/users/499788896184565760/',
        color: '#5865F2',
    },
];
