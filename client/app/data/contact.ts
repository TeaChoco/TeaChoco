import {
    FaGithub,
    FaYoutube,
    FaDiscord,
    FaXTwitter,
    FaEnvelope,
    FaFacebook,
    FaInstagram,
} from 'react-icons/fa6';
import { getAssetUrl } from '~/utils/url';
import type { ContactMethod, ContactProfile, DiscordServerLink } from '~/types/contact';

export enum ContentKeys {
    DEVELOPER = 'developer',
    OFFICIAL = 'official',
    PRIVATE = 'private',
}

export const contacts: Record<ContentKeys, ContactMethod[]> = {
    developer: [
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
            value: 'github.com/TeaChocoDeveloper',
            href: 'https://github.com/TeaChocoDeveloper',
        },
        {
            icon: FaYoutube,
            label: 'YouTube',
            value: 'youtube.com/@TeaChocoDeveloper',
            href: 'https://youtube.com/@TeaChocoDeveloper',
            color: '#FF0000',
        },
    ],
    official: [
        {
            icon: FaEnvelope,
            label: 'Email',
            value: 'teachoco.official@gmail.com',
            href: 'mailto:teachoco.official@gmail.com',
            color: '#EA4335',
        },
        {
            icon: FaGithub,
            label: 'GitHub',
            value: 'github.com/TeaChocoOfficial',
            href: 'https://github.com/TeaChocoOfficial',
        },
        {
            icon: FaYoutube,
            label: 'YouTube',
            value: 'youtube.com/@TeaChocoOfficial',
            href: 'https://youtube.com/@TeaChocoOfficial',
            color: '#FF0000',
        },
    ],
    private: [
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
            value: 'x.com/TeaChocolater',
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
            color: '#5865F2',
        },
        {
            icon: FaInstagram,
            label: 'Instagram',
            value: 'instagram.com/teachocolater',
            href: 'https://www.instagram.com/teachocolater',
            color: '#E4405F',
        },
    ],
};

export const contactProfiles: ContactProfile[] = [
    {
        key: ContentKeys.DEVELOPER,
        labelKey: 'contact.developer',
        image: getAssetUrl('TeaChoco-Developer-logo.png'),
        accent: '#9d6bf5',
    },
    {
        key: ContentKeys.OFFICIAL,
        labelKey: 'contact.official',
        image: getAssetUrl('TeaChoco-Official-logo.png'),
        accent: '#f0a050',
    },
    {
        key: ContentKeys.PRIVATE,
        labelKey: 'contact.private',
        image: getAssetUrl('TeaChoco-logo.png'),
        accent: '#f07060',
    },
];

export const discordServerLinks: DiscordServerLink[] = [
    {
        id: 'private',
        link: 'https://discord.gg/8EuR2vCwwq',
        title: 'TeaChoco Server',
        image: getAssetUrl('TeaChoco-logo.png'),
    },
    {
        id: 'developer',
        link: 'https://discord.gg/4pq28cfPKp',
        title: 'TeaChoco Developer Server',
        image: getAssetUrl('TeaChoco-Developer-logo.png'),
    },
];
