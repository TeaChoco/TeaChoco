// -Path: "vite-extra-react-ssr-ts/src/components/layout/MobileBottomBar.tsx"
import { navLinks } from '$/data/navLinks';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

export default function MobileBottomBar() {
    const { t } = useTranslation();
    const location = useLocation();

    return (
        <nav
            aria-label='Mobile navigation'
            className='md:hidden fixed bottom-0 inset-x-0 z-50 pb-[env(safe-area-inset-bottom)]'
        >
            <div className='flex justify-around items-center bg-surface/60 backdrop-blur-xl border border-border rounded-t-2xl px-2 py-3 gap-1 shadow-lg shadow-black/5'>
                {navLinks.map(({ path, labelKey, icon: Icon }) => {
                    const isActive = location.pathname === path;
                    return (
                        <Link
                            key={path}
                            to={path}
                            onClick={() => window.scrollTo(0, 0)}
                            aria-current={isActive ? 'page' : undefined}
                            className={`btn flex-col gap-0.5 px-4 py-2 w-full ${isActive ? 'btn-primary-ghost' : 'btn-surface-text'}`}
                        >
                            <Icon
                                aria-hidden='true'
                                className={`text-xl transition-transform duration-200 ${isActive ? 'scale-110' : ''}`}
                            />
                            <span
                                className={`text-[11px] font-medium leading-none ${isActive ? 'font-semibold' : ''}`}
                            >
                                {t(labelKey)}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
