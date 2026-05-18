// -Path: "vite-extra-react-ssr-ts/src/components/layout/DeskMenu.tsx"
import { navLinks } from '$/data/navLinks';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

export default function DeskMenu() {
    const { t } = useTranslation();
    const location = useLocation();

    return (
        <div className='hidden md:flex items-center gap-2'>
            <nav className='flex gap-1'>
                {navLinks.map(({ path, labelKey, icon: Icon }) => {
                    const isActive = location.pathname === path;
                    return (
                        <Link
                            key={path}
                            to={path}
                            onClick={() => window.scrollTo(0, 0)}
                            aria-current={isActive ? 'page' : undefined}
                            className={`btn gap-1.5 px-3 py-2 text-sm ${
                                isActive ? 'btn-primary-ghost' : 'btn-surface-text'
                            }`}
                        >
                            <Icon className='text-base' aria-hidden='true' />
                            {t(labelKey)}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
