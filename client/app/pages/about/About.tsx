// -Path: 'TeaChoco-Portfolio/client/app/pages/about/About.tsx'
import { motion } from 'framer-motion';
import { devStats } from '~/data/about/stats';
import Experience from './content/Experience';
import { useTranslation } from 'react-i18next';
import CodingSkill from './content/CodingSkill';
import Profile from '~/components/content/Profile';
import Section from '../../components/layout/Section';
import LanguageSkill from '~/components/content/LanguageSkill';

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

            <div className='flex flex-col max-w-4xl mx-auto w-full gap-12'>
                {/* Profile Section */}
                <div>
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
                </div>

                {/* Languages Skills */}
                <LanguageSkill />

                {/* Coding Skills */}
                <CodingSkill />

                {/* Experience */}
                <Experience />
            </div>
        </Section>
    );
}
