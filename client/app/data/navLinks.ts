// -Path: "TeaChoco-Portfolio/client/src/components/data/navLinks.ts"
import { FaHome, FaUser, FaHeart, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import type { NavLink } from '~/types/navLinks';

export const navLinks: NavLink[] = [
    { path: '/', labelKey: 'nav.home', icon: FaHome },
    { path: '/about', labelKey: 'nav.about', icon: FaUser },
    { path: '/favorites', labelKey: 'nav.favorites', icon: FaHeart },
    { path: '/portfolio', labelKey: 'nav.portfolio', icon: FaBriefcase },
    { path: '/contact', labelKey: 'nav.contact', icon: FaEnvelope },
];
