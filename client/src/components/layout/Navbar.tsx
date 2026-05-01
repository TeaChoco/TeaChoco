//-Path: "vite-extra-react-ssr-ts/src/components/layout/Navbar.tsx"
import { useState } from 'react';
import ThemeToggle from '../ThemeToggle';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { path: '/', labelKey: 'nav.home', defaultValue: 'Home' },
    // { path: '/blog', labelKey: 'nav.blog', defaultValue: 'Blog' },
    { path: '/about', labelKey: 'nav.about', defaultValue: 'About' },
    { path: '/portfolio', labelKey: 'nav.portfolio', defaultValue: 'Portfolio' },
    { path: '/contact', labelKey: 'nav.contact', defaultValue: 'Contact' },
];

export default function Navbar() {
    const { t } = useTranslation();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='flex items-center justify-between px-4 md:px-8 py-4 sticky top-0 z-50 bg-bg-light/80 dark:bg-bg-dark/80 backdrop-blur-xl border-b border-border-light dark:border-border-dark transition-all duration-200'>
            <Link to='/' className='text-2xl font-bold no-underline z-50'>
                <span className='linear-text'>TeaChoco</span>
            </Link>

            {/* Desktop Menu */}
            <div className='hidden md:flex items-center gap-2'>
                <nav className='flex gap-1'>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`px-3 py-2 rounded-lg font-medium no-underline transition-all duration-200
                                ${
                                    location.pathname === link.path
                                        ? 'text-primary-light bg-primary/15'
                                        : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-text-light dark:hover:text-text-dark hover:bg-primary/10'
                                }`}
                        >
                            {t(link.labelKey, link.defaultValue)}
                        </Link>
                    ))}
                </nav>
                <div className='w-px h-6 bg-border-light dark:bg-border-dark mx-2 transition-colors duration-200' />
                <LanguageSwitcher />
                <ThemeToggle />
            </div>

            {/* Mobile Toggle */}
            <button
                aria-label='Toggle menu'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='md:hidden text-2xl text-text-light dark:text-text-dark z-50 transition-colors duration-200'
            >
                {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Mobile Drawer */}
            <div
                className={`fixed inset-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8 transition-all duration-200 md:hidden h-screen ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <nav className='flex flex-col gap-6 text-center'>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-2xl font-semibold no-underline transition-all duration-200
                                ${
                                    location.pathname === link.path
                                        ? 'text-primary'
                                        : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-primary'
                                }`}
                        >
                            {t(link.labelKey, link.defaultValue)}
                        </Link>
                    ))}
                </nav>
                <div className='flex items-center gap-4 mt-4'>
                    <LanguageSwitcher />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
