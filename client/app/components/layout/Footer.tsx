//-Path: "vite-extra-react-ssr-ts/src/components/layout/Footer.tsx"
import { useTranslation } from 'react-i18next';
import { FaArrowUp } from 'react-icons/fa6';
import { Link, usePathname } from '~/i18n/routing';
import { navLinks } from '~/data/navLinks';
import { contacts, ContentKeys } from '~/data/contact';

const profileKeys: ContentKeys[] = [
    ContentKeys.DEVELOPER,
    ContentKeys.OFFICIAL,
    ContentKeys.PRIVATE,
];

const profileLabelKeys: Record<ContentKeys, string> = {
    [ContentKeys.DEVELOPER]: 'contact.developer',
    [ContentKeys.OFFICIAL]: 'contact.official',
    [ContentKeys.PRIVATE]: 'contact.private',
};

export default function Footer() {
    const { t } = useTranslation();
    const pathname = usePathname();

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className='mt-20 border-t border-border bg-surface-sunken/50'>
            <div className='mx-auto max-w-7xl px-4 md:px-8 py-12'>
                <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.25fr]'>
                    {/* Brand */}
                    <div>
                        <Link to='/' onClick={scrollToTop} className='inline-block text-2xl font-bold no-underline'>
                            <span className='linear-text'>TeaChoco</span>
                        </Link>
                        <p className='mt-3 max-w-xs text-sm leading-relaxed text-surface-muted'>
                            {t('home.subtitle')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <nav aria-label='Footer navigation'>
                        <h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-surface-subtle'>
                            {t('footer.linksTitle')}
                        </h3>
                        <ul className='space-y-2'>
                            {navLinks.map(({ path, labelKey, icon: Icon }) => {
                                const isActive = pathname === path;
                                return (
                                    <li key={path}>
                                        <Link
                                            to={path}
                                            onClick={() => window.scrollTo(0, 0)}
                                            aria-current={isActive ? 'page' : undefined}
                                            className={`inline-flex items-center gap-2 text-sm transition-colors ${
                                                isActive
                                                    ? 'font-medium text-primary'
                                                    : 'text-surface-muted hover:text-primary-light'
                                            }`}
                                        >
                                            <Icon className='text-xs opacity-60' aria-hidden='true' />
                                            {t(labelKey)}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Socials by profile */}
                    <div>
                        <h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-surface-subtle'>
                            {t('footer.contactTitle')}
                        </h3>
                        <div className='flex flex-col gap-4'>
                            {profileKeys.map((key) => {
                                const methods = contacts[key].filter((method) => !!method.href);
                                if (methods.length === 0) return null;
                                return (
                                    <div key={key}>
                                        <h4 className='mb-2 text-xs font-medium uppercase tracking-wider text-surface-muted'>
                                            {t(profileLabelKeys[key])}
                                        </h4>
                                        <ul className='flex flex-wrap gap-2'>
                                            {methods.map(({ icon: Icon, label, href, color }) => {
                                                const isExternal = href?.startsWith('http');
                                                const chipClass =
                                                    'flex size-10 items-center justify-center rounded-xl border border-border bg-surface-overlay/50 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-lg hover:shadow-primary/20';
                                                const icon = (
                                                    <Icon
                                                        className='text-lg text-surface-subtle'
                                                        style={color ? { color } : undefined}
                                                        aria-hidden='true'
                                                    />
                                                );

                                                return (
                                                    <li key={label}>
                                                        {href ? (
                                                            <a
                                                                href={href}
                                                                title={label}
                                                                aria-label={label}
                                                                className={chipClass}
                                                                {...(isExternal
                                                                    ? { target: '_blank', rel: 'noopener noreferrer' }
                                                                    : {})}
                                                            >
                                                                {icon}
                                                            </a>
                                                        ) : (
                                                            <span aria-label={label} title={label} className={chipClass}>
                                                                {icon}
                                                            </span>
                                                        )}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className='mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-surface-muted sm:flex-row'>
                    <p>{t('footer.copyright')}</p>
                    <button
                        onClick={scrollToTop}
                        className='inline-flex items-center gap-1.5 transition-colors hover:text-primary'
                    >
                        <FaArrowUp className='text-xs' aria-hidden='true' />
                        {t('footer.backToTop')}
                    </button>
                </div>
            </div>
        </footer>
    );
}