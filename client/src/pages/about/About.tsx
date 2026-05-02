//-Path: "TeaChoco-Portfolio/client/src/pages/about/About.tsx"
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Section from '../../components/layout/Section';
import { FaNodeJs, FaReact } from 'react-icons/fa6';
import { SiMongodb, SiNestjs, SiTailwindcss, SiThreedotjs, SiTypescript } from 'react-icons/si';
import useTextColor from '$/hooks/useTextColor';

type IconType = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;

type Skill = {
    name: string;
    level: number;
    color: string;
    icon: IconType;
};

export default function About() {
    const { t } = useTranslation();
    const { hex } = useTextColor();

    const skills: Skill[] = [
        { name: 'Node.js', level: 80, color: '#339933', icon: FaNodeJs },
        { name: 'TypeScript', level: 85, color: '#3178C6', icon: SiTypescript },
        { name: 'React / Next.js', level: 90, color: '#61DAFB', icon: FaReact },
        { name: 'CSS / TailwindCSS', level: 88, color: '#06B6D4', icon: SiTailwindcss },
        { name: 'Three.js', level: 70, color: hex, icon: SiThreedotjs },
        { name: 'Nest.js', level: 60, color: '#EA2845', icon: SiNestjs },
        { name: 'Database (MongoDB)', level: 70, color: '#47A248', icon: SiMongodb },
    ];

    const stats: { value: string; key: string }[] = [
        { value: '3+', key: 'about.statYears' },
        { value: '10+', key: 'about.statProjects' },
        { value: '5+', key: 'about.statTech' },
    ];

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
                            src={`${import.meta.env.BASE_URL}TeaChoco-Developer-logo.png`}
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
                    {stats.map((stat) => (
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
                <div className='mb-10'>
                    <h2 className='section-title linear-text inline-block'>
                        {t('about.skillsTitle', 'Skills')}
                    </h2>
                    <div className='grid gap-4 mt-2'>
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                className='card group'
                            >
                                <div className='flex justify-between items-center mb-3'>
                                    <div className='flex items-center gap-3'>
                                        <div
                                            className='w-9 h-9 rounded-lg flex items-center justify-center border border-black/10 dark:border-white/15'
                                            style={{
                                                backgroundColor: `${skill.color}20`,
                                                boxShadow: `0 0 0 1px ${skill.color}35`,
                                            }}
                                        >
                                            <skill.icon
                                                className='text-lg'
                                                style={{
                                                    color: skill.color,
                                                    filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.12))',
                                                }}
                                            />
                                        </div>
                                        <span className='font-semibold text-text-light dark:text-text-dark group-hover:text-primary-light transition-colors'>
                                            {skill.name}
                                        </span>
                                    </div>
                                    <span
                                        className='text-sm font-bold'
                                        style={{ color: skill.color }}
                                    >
                                        {skill.level}%
                                    </span>
                                </div>
                                <div className='h-2 bg-border-light dark:bg-border-dark rounded-full overflow-hidden'>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{
                                            duration: 1,
                                            delay: index * 0.1,
                                            ease: 'easeOut',
                                        }}
                                        viewport={{ once: true }}
                                        className='h-full rounded-full'
                                        style={{
                                            background: `linear-gradient(90deg, var(--color-primary), ${skill.color})`,
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Experience */}
                <div>
                    <h2 className='section-title linear-text inline-block'>
                        {t('about.experienceTitle', 'Experience')}
                    </h2>
                    <div className='relative pl-8 mt-2 border-l-2 border-primary/30'>
                        <div className='relative pb-8'>
                            <div className='absolute -left-[25px] w-4 h-4 rounded-full bg-linear-to-r from-primary to-accent shadow-lg shadow-primary/50 ring-4 ring-bg-card-light dark:ring-bg-card-dark' />
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
