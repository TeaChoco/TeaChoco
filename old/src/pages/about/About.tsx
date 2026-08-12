//-Path: "TeaChoco-Portfolio/client/src/pages/about/About.tsx"
import Section from '../../components/layout/Section';
import { useTranslation } from 'react-i18next';

const skills = [
    { name: 'React / Next.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'CSS / TailwindCSS', level: 88 },
    { name: 'Database (SQL/NoSQL)', level: 70 },
];

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
            <div className='max-w-3xl mx-auto'>
                <div className='flex gap-8 items-start mb-12 flex-wrap justify-center'>
                    <div className='shrink-0'>
                        <img
                            src={`${import.meta.env.BASE_URL}TeaChoco-Developer-logo.png`}
                            alt='TeaChoco-Developer-logo'
                            className='w-36 h-36 object-cover rounded-full'
                        />
                    </div>
                    <div className='flex-1 min-w-[280px]'>
                        <h2 className='text-2xl font-semibold mb-4 text-text-light dark:text-text-dark'>
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
                <div className='mb-12'>
                    <h2 className='section-title'>{t('about.skillsTitle', 'Skills')}</h2>
                    <div className='grid gap-4'>
                        {skills.map((skill) => (
                            <div key={skill.name} className='card'>
                                <div className='flex justify-between mb-2'>
                                    <span className='font-medium'>{skill.name}</span>
                                    <span className='text-primary-light font-semibold'>
                                        {skill.level}%
                                    </span>
                                </div>
                                <div className='h-1.5 bg-border-light dark:bg-border-dark rounded-full overflow-hidden'>
                                    <div
                                        className='h-full bg-linear-to-r from-primary to-accent rounded-full transition-all duration-1000'
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='mb-12'>
                    <h2 className='section-title'>{t('about.experienceTitle', 'Experience')}</h2>
                    <div className='relative pl-8 border-l-2 border-border-light dark:border-border-dark'>
                        <div className='relative pb-8'>
                            <div className='absolute -left-[25px] w-3 h-3 rounded-full bg-linear-to-r from-primary to-accent shadow-lg shadow-primary/50' />
                            <div className='card'>
                                <h3 className='text-lg font-semibold mb-1 text-text-light dark:text-text-dark'>
                                    {t('about.jobTitle', 'Full-Stack Developer')}
                                </h3>
                                <p className='text-primary-light font-medium mb-1'>
                                    {t('about.company', 'Freelance')}
                                </p>
                                <p className='text-text-muted-light dark:text-text-muted-dark text-sm mb-3'>
                                    {t('about.period', '2023 - Present')}
                                </p>
                                <p className='text-text-secondary-light dark:text-text-secondary-dark'>
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
