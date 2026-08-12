// -Path: 'TeaChoco-Portfolio/client/src/pages/home/content/TechStack.tsx'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getTagIcon, type TagIconKey } from '$/data/icon';

type TechStack = {
    id: TagIconKey;
    name: string;
};

const techStacks: TechStack[] = [
    {
        id: 'TypeScript',
        name: 'TypeScript',
    },
    {
        id: 'Nodejs',
        name: 'Node.js',
    },
    {
        id: 'React',
        name: 'React.js',
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
        id: 'Threejs',
        name: 'Three.js',
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

export default function TechStack() {
    const { t } = useTranslation();

    return (
        <div className='pointer-events-auto w-full max-w-4xl text-center'>
            <h2 className='text-3xl font-bold mb-12 linear-text drop-shadow-md bg-bg-light/50 dark:bg-bg-dark/50 inline-block px-4 py-2 rounded-lg'>
                {t('home.techStackTitle')}
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
                                <icon.icon className='text-4xl' style={{ color: icon.color }} />
                            )}
                            <span className='font-medium'>{tech.name}</span>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
