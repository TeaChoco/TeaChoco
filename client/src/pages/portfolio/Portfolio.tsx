//-Path: "TeaChoco-Portfolio/client/src/pages/portfolio/Portfolio.tsx"
import { motion } from 'framer-motion';
import { useState } from 'react';
import Section from '../../components/layout/Section';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';

type Project = {
    id: string;
    titleKey: string;
    descKey: string;
    image: string;
    tags: string[];
    categorys: string[];
    github?: string;
    live?: string;
};

const projects: Project[] = [
    {
        id: 'portfolio',
        titleKey: 'portfolio.projects.portfolio.title',
        descKey: 'portfolio.projects.portfolio.desc',
        image: 'https://placehold.co/600x400/1a1a2e/818cf8?text=Portfolio',
        tags: ['TypeScript', 'Vite', 'React', 'Three.js'],
        categorys: ['web'],
        github: 'https://github.com/TeaChoco/TeaChoco',
        live: '/',
    },
    {
        id: 'poke-rotom',
        titleKey: 'portfolio.projects.pokeRotom.title',
        descKey: 'portfolio.projects.pokeRotom.desc',
        image: 'https://placehold.co/600x400/1a1a2e/818cf8?text=PokeRotom',
        tags: ['TypeScript', 'Vite', 'React', 'Node.js', 'Three.js', 'Socket.IO'],
        categorys: ['web'],
        github: 'https://github.com/TeaChocoOfficial/PokeRotom',
        live: 'https://pokerotom.vercel.app',
    },

    {
        id: 'vite-extra-react-ssr-typescript-template',
        titleKey: 'portfolio.projects.viteExtraReactSsr.title',
        descKey: 'portfolio.projects.viteExtraReactSsr.desc',
        image: 'https://placehold.co/600x400/1a1a2e/818cf8?text=Vite+React+TS+SSR',
        tags: ['Vite', 'React', 'SSR', 'Tailwind CSS', 'TypeScript'],
        categorys: ['web', 'template'],
        github: 'https://github.com/TeaChoco/Vite-Extra-React-SSR-TypeScript',
    },
    {
        id: 'vite-react-typescript-template',
        titleKey: 'portfolio.projects.viteReact.title',
        descKey: 'portfolio.projects.viteReact.desc',
        image: 'https://placehold.co/600x400/1a1a2e/818cf8?text=Vite+React+TS',
        tags: ['Vite', 'React', 'Tailwind CSS', 'TypeScript'],
        categorys: ['web', 'template'],
        github: 'https://github.com/TeaChoco/Vite-React-TypeScript',
    },
    {
        id: 'choco-developer-bot',
        titleKey: 'portfolio.projects.chocoDeveloperBot.title',
        descKey: 'portfolio.projects.chocoDeveloperBot.desc',
        image: 'https://placehold.co/600x400/1a1a2e/818cf8?text=Choco+Developer+Bot',
        tags: ['TypeScript', 'Node.js', 'Discord.js', 'MongoDB'],
        categorys: ['bot'],
        github: 'https://github.com/TeaChocoOfficial/Choco-Developer-Bot',
    },
];

const categories = ['all', 'web', 'backend', 'bot', 'template'] as const;

export default function Portfolio() {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState<string>('all');

    const filteredProjects =
        activeCategory === 'all'
            ? projects
            : projects.filter((project) => project.categorys.includes(activeCategory));

    return (
        <Section>
            <div className='page-header'>
                <h1 className='page-title'>
                    <span className='linear-text'>{t('portfolio.title', 'Portfolio')}</span>
                </h1>
                <p className='page-subtitle'>{t('portfolio.subtitle', 'My projects and works')}</p>
            </div>

            <div className='max-w-6xl mx-auto w-full'>
                {/* Filter Tabs */}
                <div className='flex flex-wrap justify-center gap-2 mb-12'>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer border-none
                                ${
                                    activeCategory === category
                                        ? 'bg-primary text-white shadow-lg shadow-primary/40'
                                        : 'bg-bg-card-light dark:bg-bg-card-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-bg-card-hover-light dark:hover:bg-bg-card-hover-dark hover:text-text-light dark:hover:text-text-dark'
                                }`}
                        >
                            {t(
                                `portfolio.categories.${category}`,
                                category.charAt(0).toUpperCase() + category.slice(1),
                            )}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className='card group overflow-hidden p-0'
                        >
                            {/* Project Image */}
                            <div className='relative overflow-hidden aspect-[3/2]'>
                                <img
                                    src={project.image}
                                    alt={t(project.titleKey, project.id)}
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                                {/* Hover Links */}
                                <div className='absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors duration-200'
                                        >
                                            <FaGithub className='text-lg' />
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent transition-colors duration-200'
                                        >
                                            <FaArrowUpRightFromSquare className='text-sm' />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className='p-5'>
                                <h3 className='text-lg font-semibold text-text-light dark:text-text-dark mb-2'>
                                    {t(project.titleKey, project.id)}
                                </h3>
                                <p className='text-text-muted-light dark:text-text-muted-dark text-sm mb-4 line-clamp-2'>
                                    {t(project.descKey, '')}
                                </p>

                                {/* Tags */}
                                <div className='flex flex-wrap gap-2'>
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className='px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary-light dark:text-primary-light border border-primary/20'
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className='text-center py-16'>
                        <p className='text-text-muted-light dark:text-text-muted-dark text-lg'>
                            {t('portfolio.empty', 'No projects in this category yet.')}
                        </p>
                    </div>
                )}
            </div>
        </Section>
    );
}
