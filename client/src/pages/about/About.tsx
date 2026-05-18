//-Path: "TeaChoco-Portfolio/client/src/pages/about/About.tsx"
import Skill from './content/Skill';
import { motion } from 'framer-motion';
import { devStats } from '$/data/stats';
import { useTranslation } from 'react-i18next';
import Profile from '$/components/content/Profile';
import Section from '../../components/layout/Section';

export default function About() {
    const { t } = useTranslation();

    return (
        <Section>
            <div className='page-header'>
                <h1 className='page-title'>
                    <span className='linear-text'>{t('about.title')}</span>
                </h1>
                <p className='page-subtitle'>{t('about.subtitle')}</p>
            </div>

            <div className='max-w-4xl mx-auto w-full'>
                {/* Profile Section */}
                <div className='card flex flex-col md:flex-row gap-8 items-center md:items-start mb-10'>
                    <Profile className='w-32 h-32 md:w-40 md:h-40' />
                    <div className='flex-1 text-center md:text-left'>
                        <h2 className='text-2xl md:text-3xl font-bold mb-3 text-surface-foreground'>
                            {t('about.greeting')}
                        </h2>
                        <p className='text-surface-subtle mb-4 leading-relaxed'>
                            {t('about.intro1')}
                        </p>
                        <p className='text-surface-subtle leading-relaxed'>
                            {t('about.intro2')}
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
                            <span className='text-surface-muted text-sm'>
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
                        {t('about.experienceTitle')}
                    </h2>
                    <div className='relative pl-8 mt-2 border-l-2 border-primary/30'>
                        <div className='relative pb-8'>
                            <div className='absolute -left-6.25 w-4 h-4 rounded-full bg-linear-to-r from-primary to-secondary shadow-lg shadow-primary/50 ring-4 ring-surface-overlay' />
                            <div className='card'>
                                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2'>
                                    <h3 className='text-lg font-bold'>
                                        {t('about.jobTitle')}
                                    </h3>
                                    <span className='text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary-light border border-primary/20 w-fit'>
                                        {t('about.period')}
                                    </span>
                                </div>
                                <p className='text-primary font-medium mb-2'>
                                    {t('about.company')}
                                </p>
                                <p className='text-text-secondary-light dark:text-text-secondary-dark leading-relaxed'>
                                    {t('about.jobDesc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
