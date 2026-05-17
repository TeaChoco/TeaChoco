//-Path: "TeaChoco-Portfolio/client/src/pages/Home.tsx"
import env from '$/secure/env';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Section from '../../components/layout/Section';
import { getTagIcon, type TagIconKey } from '$/data/icon';

type TechStack = {
    id: TagIconKey;
    name: string;
};

const techStacks: TechStack[] = [
    {
        id: 'React',
        name: 'React.js',
    },
    {
        id: 'TypeScript',
        name: 'TypeScript',
    },
    {
        id: 'Vite',
        name: 'Vite',
    },
    {
        id: 'TailwindCSS',
        name: 'Tailwind',
    },
    {
        id: 'Nodejs',
        name: 'Node.js',
    },
    {
        id: 'Nestjs',
        name: 'NestJS',
    },
    {
        id: 'Docker',
        name: 'Docker',
    },
    {
        id: 'GitGitHub',
        name: 'GitHub',
    },
];

export default function Home() {
    const { t } = useTranslation();

    return (
        <div className='relative w-full'>
            {/* Scrollable Content */}
            <main className='relative w-full max-w-7xl mx-auto'>
                {/* Hero Section */}
                <Section className='text-center pb-48'>
                    <div className=''>
                        {/* <div className="pointer-events-auto bg-bg-light/80 dark:bg-bg-dark/80 backdrop-blur-sm p-8 rounded-3xl border border-border-light dark:border-border-dark shadow-2xl max-w-2xl"> */}
                        <img
                            src={`${env.BASE}TeaChoco-Developer-logo.png`}
                            alt='TeaChoco-Developer-logo'
                            className='s size-64 mx-auto rounded-full shadow-lg'
                        />
                        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight'>
                            <span className='linear-text'>TeaChoco</span> Portfolio
                        </h1>
                        <p className='text-xl md:text-2xl text-text-secondary-light dark:text-text-secondary-dark mb-6'>
                            {t('home.subtitle')}
                        </p>
                        <p className='max-w-xl text-text-muted-light dark:text-text-muted-dark mb-8 text-lg'>
                            {t('home.description')}
                        </p>
                        <div className='flex gap-4 justify-center'>
                            <Link to='/about' className='btn btn-primary'>
                                {t('home.aboutBtn')}
                            </Link>
                            <Link to='/contact' className='btn btn-secondary'>
                                {t('home.contactBtn')}
                            </Link>
                        </div>
                    </div>
                </Section>

                {/* Tech Stack */}
                <Section>
                    <div className='pointer-events-auto w-full max-w-4xl text-center'>
                        <h2 className='text-3xl font-bold mb-12 linear-text drop-shadow-md bg-bg-light/50 dark:bg-bg-dark/50 inline-block px-4 py-2 rounded-lg'>
                            Tech Stack
                        </h2>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                            {techStacks.map((tech) => {
                                const icon = getTagIcon(tech.id);

                                return (
                                    <motion.div
                                        key={tech.name}
                                        whileHover={{ scale: 1.05, translateY: -5 }}
                                        className='card flex flex-col items-center gap-3 shadow-lg hover:shadow-primary/20 transition-all cursor-default hover:translate-y-0'
                                    >
                                        {icon.icon && (
                                            <icon.icon
                                                className='text-4xl'
                                                style={{ color: icon.color }}
                                            />
                                        )}
                                        <span className='font-medium'>{tech.name}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
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

                {/* Call to Action */}
                <Section>
                    <div className='pointer-events-auto text-center bg-linear-to-br from-primary/10 to-accent/10 p-12 rounded-3xl border border-primary/20 backdrop-blur-xs max-w-2xl'>
                        <h2 className='text-3xl font-bold mb-6'>{t('contact.subtitle')}</h2>
                        <Link
                            to='/contact'
                            className='btn btn-primary text-xl px-10 py-4 shadow-xl shadow-primary/30'
                        >
                            {t('home.contactBtn')}
                        </Link>
                    </div>
                </Section>
            </main>
        </div>
    );
}
