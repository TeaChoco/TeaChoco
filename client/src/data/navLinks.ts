// -Path: "TeaChoco-Portfolio/client/src/components/data/navLinks.ts"
import type { IconType } from 'react-icons';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';

export type NavLink = {
    path: string;
    labelKey: string;
    icon: IconType;
};

export const navLinks: NavLink[] = [
    { path: '/', labelKey: 'nav.home', icon: FaHome },
    { path: '/about', labelKey: 'nav.about', icon: FaUser },
    { path: '/portfolio', labelKey: 'nav.portfolio', icon: FaBriefcase },
    { path: '/contact', labelKey: 'nav.contact', icon: FaEnvelope },
];
