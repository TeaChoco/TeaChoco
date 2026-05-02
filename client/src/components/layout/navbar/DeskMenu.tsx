// -Path: "vite-extra-react-ssr-ts/src/components/layout/Navbar.tsx"
import ThemeToggle from '../../ThemeToggle';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '$/data/navLinks';
import LanguageSwitcher from '../../LanguageSwitcher';

export default function DeskMenu() {
    const { t } = useTranslation();
    const location = useLocation();

    return (
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
    );
}
