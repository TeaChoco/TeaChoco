//-Path: "TeaChoco-Portfolio/client/src/pages/Home.tsx"
import Hero from './content/Hero';
import Skill from './content/Skill';
import { Link } from '~/i18n/routing';
import TechStack from './content/TechStack';
import { useTranslation } from 'react-i18next';
import Section from '../../components/layout/Section';

export default function Home() {
    const { t } = useTranslation();

    return (
        <div className='relative w-full'>
            {/* Scrollable Content */}
            <main className='relative w-full max-w-7xl mx-auto'>
                {/* Hero Section */}
                <Section className='text-center pb-48'>
                    <Hero />
                </Section>

                {/* Tech Stack */}
                <Section>
                    <TechStack />
                </Section>

                {/* About Preview */}
                <Section>
                    <div className='card pointer-events-auto bg-white/90 dark:bg-slate-900/90 p-8 md:p-12 rounded-3xl shadow-xl max-w-4xl w-full border border-primary/20'>
                        <h2 className='text-3xl font-bold mb-6 linear-text'>{t('about.title')}</h2>
                        <p className='text-lg text-text-secondary-light dark:text-text-secondary-dark leading-relaxed mb-6'>
                            {t('about.intro1')}
                        </p>
                        <p className='text-lg text-text-secondary-light dark:text-text-secondary-dark leading-relaxed'>
                            {t('about.intro2')}
                        </p>
                    </div>
                </Section>

                {/* Skills Preview */}
                <Section>
                    <Skill />
                </Section>

                {/* Call to Action */}
                <Section>
                    <div className='pointer-events-auto text-center bg-linear-to-br from-primary/10 to-accent/10 p-12 rounded-3xl border border-primary/20 backdrop-blur-xs max-w-2xl'>
                        <h2 className='text-3xl font-bold mb-6'>{t('contact.subtitle')}</h2>
                        <Link
                            to='/contact'
                            onClick={() => window.scrollTo(0, 0)}
                            className='btn btn-linear text-xl px-10 py-4 shadow-xl shadow-primary/30'
                        >
                            {t('home.contactBtn')}
                        </Link>
                    </div>
                </Section>
            </main>
        </div>
    );
}
