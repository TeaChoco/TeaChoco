// -Path: "TeaChoco-Portfolio/client/src/components/layout/navbar/MobileMenu.tsx"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../../ThemeToggle';
import { FiX, FiMenu } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../LanguageSwitcher';
import { navLinks } from '$/data/navLinks';

export default function MobileMenu() {
    const { t } = useTranslation();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
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
        </>
    );
}
