// -Path: 'TeaChoco-Portfolio/client/src/pages/home/content/Hero.tsx'
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import Profile from '~/components/content/Profile';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <>
            <Profile className='size-64' />
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
