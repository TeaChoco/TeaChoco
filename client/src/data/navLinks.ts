// -Path: "TeaChoco-Portfolio/client/src/components/data/navLinks.ts"

export type NavLink = {
    path: string;
    labelKey: string;
    defaultValue: string;
};

export const navLinks: NavLink[] = [
    { path: '/', labelKey: 'nav.home', defaultValue: 'Home' },
    // { path: '/blog', labelKey: 'nav.blog', defaultValue: 'Blog' },
    { path: '/about', labelKey: 'nav.about', defaultValue: 'About' },
    { path: '/portfolio', labelKey: 'nav.portfolio', defaultValue: 'Portfolio' },
    { path: '/contact', labelKey: 'nav.contact', defaultValue: 'Contact' },
];
