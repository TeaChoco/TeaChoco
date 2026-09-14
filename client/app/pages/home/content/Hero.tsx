// -Path: 'TeaChoco-Portfolio/client/src/pages/home/content/Hero.tsx'
import { Link } from 'react-router';
import { FaGithub } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import env from '~/secure/env';
import Profile from '~/components/content/Profile';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <>
            <div className='relative inline-block'>
                <Profile className='size-64' />
                <a
                    href='https://github.com/TeaChoco/TeaChoco'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='v0.0.6'
                    className='absolute -bottom-2 right-1 inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-overlay px-3 py-1 text-xs font-semibold text-surface-subtle shadow-lg transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary'
                >
                    <FaGithub aria-hidden='true' />
                    v{env.VERSION}
                </a>
            </div>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight text-surface-foreground'>
                <span className='linear-text'>TeaChoco</span> Portfolio
            </h1>
            <p className='text-xl md:text-2xl text-surface-subtle mb-6'>{t('home.subtitle')}</p>
            <p className='max-w-xl text-surface-muted mb-8 text-lg'>{t('home.description')}</p>
            <div className='flex gap-4 justify-center'>
                <Link to='/about' className='btn btn-linear' onClick={() => window.scrollTo(0, 0)}>
                    {t('home.aboutBtn')}
                </Link>
                <Link
                    to='/contact'
                    className='btn btn-surface-text'
                    onClick={() => window.scrollTo(0, 0)}
                >
                    {t('home.contactBtn')}
                </Link>
            </div>
        </>
    );
}
