//-Path: "TeaChoco-Portfolio/client/src/pages/Home.tsx"
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../../layout/Section';
import type { IconType } from 'react-icons';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaReact, FaNodeJs, FaDocker } from 'react-icons/fa6';
import { SiTypescript, SiTailwindcss, SiVite, SiNestjs } from 'react-icons/si';

type TechStack = {
    icon: IconType;
    name: string;
    color?: string;
};

const techStacks: TechStack[] = [
    {
        icon: FaReact,
        name: 'React',
        color: '#61DAFB',
    },
    {
        icon: SiTypescript,
        name: 'TypeScript',
        color: '#3178C6',
    },
    {
        icon: SiVite,
        name: 'Vite',
        color: '#646CFF',
    },
    {
        icon: SiTailwindcss,
        name: 'Tailwind',
        color: '#06B6D4',
    },
    {
        icon: FaNodeJs,
        name: 'Node.js',
        color: '#339933',
    },
    {
        icon: SiNestjs,
        name: 'NestJS',
        color: '#E0234E',
    },
    {
        icon: FaDocker,
        name: 'Docker',
        color: '#2496ED',
    },
    {
        icon: FaGithub,
        name: 'GitHub',
    },
];

export default function Home() {
    const { t } = useTranslation();

    return (
        <>
            {/* Hero Section */}
            <Section className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left w-full">
                    <motion.div
                        animate={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="flex-1 max-w-2xl"
                    >
                        <motion.h1
                            animate={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-tight"
                        >
                            <span className="gradient-text">TeaChoco</span>
                            <br />
                            <span className="text-text-light dark:text-text-dark opacity-90">
                                Portfolio
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h2 className="text-xl md:text-2xl font-medium text-primary-light dark:text-primary mb-2">
                                {t('home.subtitle')}
                            </h2>
                            <p className="max-w-xl text-text-secondary-light dark:text-text-secondary-dark text-base md:text-lg leading-relaxed">
                                {t('home.description')}
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                                <Link
                                    to="/about"
                                    className="btn btn-primary group px-6 py-3 text-base"
                                >
                                    <span>{t('home.aboutBtn')}</span>
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 1.5,
                                        }}
                                        className="ml-2"
                                    >
                                        →
                                    </motion.span>
                                </Link>
                                <Link
                                    to="/contact"
                                    className="btn btn-secondary px-6 py-3 text-base"
                                >
                                    {t('home.contactBtn')}
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Center Spacer for 3D Background */}
                    <div className="hidden lg:block flex-1" />

                    <motion.div
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        transition={{
                            duration: 1,
                            bounce: 0.4,
                            type: 'spring',
                        }}
                        className="relative flex-1 flex justify-center lg:justify-end"
                    >
                        <div className="absolute -inset-4 bg-linear-to-r from-primary to-accent rounded-full blur-2xl opacity-10 animate-pulse" />
                        <img
                            src={`${
                                import.meta.env.BASE_URL
                            }TeaChoco-Developer-logo.png`}
                            alt="TeaChoco-Developer-logo"
                            className="size-32 md:size-48 lg:size-56 rounded-full shadow-2xl border-4 border-white/10 relative z-10 object-cover"
                        />
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] font-bold text-text-muted-light dark:text-text-muted-dark uppercase tracking-[0.3em]">
                        {t('home.scrollDown')}
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-px h-10 rounded-full bg-linear-to-b from-primary to-transparent"
                    />
                </motion.div>
            </Section>

            {/* Stats Section */}
            <Section className="py-48 md:py-64">
                <div className="grid grid-cols-2 gap-6 w-full max-w-xl px-4">
                    {[
                        {
                            key: 'experience',
                            value: '7+',
                            label: t('home.stats.experience'),
                        },
                        {
                            key: 'projects',
                            value: '15+',
                            label: t('home.stats.projects'),
                        },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-bg-card-light/20 dark:bg-bg-card-dark/20 p-6 md:p-8 rounded-2xl border border-primary/5 text-center hover:border-primary/20 transition-all group shadow-sm"
                        >
                            <motion.div
                                initial={{ scale: 0.5 }}
                                whileInView={{ scale: 1 }}
                                className="text-3xl md:text-4xl font-black gradient-text mb-1 block group-hover:scale-110 transition-transform"
                            >
                                {stat.value}
                            </motion.div>
                            <div className="text-[10px] md:text-xs font-bold text-text-muted-light dark:text-text-muted-dark uppercase tracking-[0.2em]">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* About Preview */}
            <Section className="py-48 md:py-64">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative bg-white/2 dark:bg-slate-900/2 p-8 md:p-12 rounded-4xl shadow-lg max-w-5xl w-full border border-primary/5 overflow-hidden mx-4"
                >
                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-[80px] -mr-24 -mt-24" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 blur-[80px] -ml-24 -mb-24" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <h2 className="text-3xl md:text-4xl font-black mb-6 gradient-text">
                            {t('about.title')}
                        </h2>
                        <div className="max-w-3xl space-y-4 text-sm md:text-base text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                            <p>{t('about.intro1')}</p>
                            <p>{t('about.intro2')}</p>
                        </div>
                        <div className="mt-8">
                            <Link
                                to="/about"
                                className="btn btn-primary px-6 py-2.5 text-sm md:text-base"
                            >
                                {t('home.aboutBtn')}
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </Section>

            {/* Tech Stack */}
            <Section className="py-48 md:py-64">
                <div className="w-full max-w-6xl px-4">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-black gradient-text inline-block"
                        >
                            {t('home.techStackTitle')}
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
                        {techStacks.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{
                                    scale: 1.1,
                                    translateY: -5,
                                }}
                                className="bg-bg-card-light/20 dark:bg-bg-card-dark/20 p-4 rounded-xl border border-border-light dark:border-border-dark flex flex-col items-center gap-3 transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:border-primary group cursor-default"
                            >
                                <div className="group-hover:scale-110 transition-transform">
                                    <tech.icon
                                        className="text-3xl md:text-4xl"
                                        style={{ color: tech.color }}
                                    />
                                </div>
                                <span className="hidden md:block font-bold text-xs tracking-tight">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Call to Action */}
            <Section className="pb-64 md:pb-80">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center bg-linear-to-br from-primary/20 via-primary/5 to-accent/20 p-16 md:p-24 rounded-4xl border border-primary/20 max-w-4xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[40px_40px]" />
                    <h2 className="text-4xl md:text-6xl font-black mb-10 relative z-10">
                        {t('contact.subtitle')}
                    </h2>
                    <Link
                        to="/contact"
                        className="btn btn-primary text-xl px-12 py-5 shadow-2xl shadow-primary/30 relative z-10"
                    >
                        {t('home.contactBtn')}
                    </Link>
                </motion.div>
            </Section>
        </>
    );
}
