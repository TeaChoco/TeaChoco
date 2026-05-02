//-Path: "TeaChoco-Portfolio/client/src/pages/about/About.tsx"
import env from '$/secure/env';
import Skill from './content/Skill';
import { motion } from 'framer-motion';
import { devStats } from '$/data/stats';
import { useTranslation } from 'react-i18next';
import Section from '../../components/layout/Section';

export default function About() {
    const { t } = useTranslation();

    return (
        <Section>
            <div className='page-header'>
                <h1 className='page-title'>
                    <span className='linear-text'>{t('about.title', 'About Me')}</span>
                </h1>
                <p className='page-subtitle'>{t('about.subtitle', 'Get to know me better')}</p>
            </div>

            <div className='max-w-4xl mx-auto w-full'>
                {/* Profile Section */}
                <div className='card flex flex-col md:flex-row gap-8 items-center md:items-start mb-10'>
                    <div className='shrink-0 relative'>
                        <div className='absolute -inset-1 bg-linear-to-r from-primary via-accent to-accent-secondary rounded-full blur-md opacity-50' />
                        <img
                            src={`${env.BASE}TeaChoco-Developer-logo.png`}
                            alt='TeaChoco-Developer-logo'
                            className='relative w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-bg-card-light dark:border-bg-card-dark'
                        />
                    </div>
                    <div className='flex-1 text-center md:text-left'>
                        <h2 className='text-2xl md:text-3xl font-bold mb-3 text-text-light dark:text-text-dark'>
                            {t('about.greeting', "Hello! I'm TeaChoco")}
                        </h2>
                        <p className='text-text-secondary-light dark:text-text-secondary-dark mb-4 leading-relaxed'>
                            {t(
                                'about.intro1',
                                "I'm a Full-Stack developer passionate about creating beautiful and efficient web applications. I have experience developing both Frontend and Backend with modern technologies.",
                            )}
                        </p>
                        <p className='text-text-secondary-light dark:text-text-secondary-dark leading-relaxed'>
                            {t(
                                'about.intro2',
                                'Besides coding, I also enjoy sharing knowledge through articles and helping the developer community.',
                            )}
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className='grid grid-cols-3 gap-4 mb-10'>
                    {devStats.map((stat) => (
                        <motion.div
                            key={stat.key}
                            whileHover={{ scale: 1.03 }}
                            className='card text-center py-6'
                        >
                            <span className='text-3xl md:text-4xl font-bold linear-text block mb-1'>
                                {stat.value}
                            </span>
                            <span className='text-text-muted-light dark:text-text-muted-dark text-sm'>
                                {t(stat.key, stat.key.split('.').pop() || '')}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Skills */}
                <Skill />

                {/* Experience */}
                <div>
                    <h2 className='section-title linear-text inline-block'>
                        {t('about.experienceTitle', 'Experience')}
                    </h2>
                    <div className='relative pl-8 mt-2 border-l-2 border-primary/30'>
                        <div className='relative pb-8'>
                            <div className='absolute -left-6.25 w-4 h-4 rounded-full bg-linear-to-r from-primary to-accent shadow-lg shadow-primary/50 ring-4 ring-bg-card-light dark:ring-bg-card-dark' />
                            <div className='card'>
                                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2'>
                                    <h3 className='text-lg font-bold text-text-light dark:text-text-dark'>
                                        {t('about.jobTitle', 'Full-Stack Developer')}
                                    </h3>
                                    <span className='text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary-light border border-primary/20 w-fit'>
                                        {t('about.period', '2023 - Present')}
                                    </span>
                                </div>
                                <p className='text-primary-light font-medium mb-2'>
                                    {t('about.company', 'Freelance')}
                                </p>
                                <p className='text-text-secondary-light dark:text-text-secondary-dark leading-relaxed'>
                                    {t(
                                        'about.jobDesc',
                                        'Developing web applications and systems for various clients.',
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
