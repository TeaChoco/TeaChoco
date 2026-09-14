// -Path: "TeaChoco-Portfolio/client/src/pages/portfolio/components/ProjectImage.tsx"
import HoverLinks from './HoverLinks';
import { useTranslation } from 'react-i18next';
import type { Project } from '~/types/projects';

export default function ProjectImage({ project }: { project: Project }) {
    const { t } = useTranslation();

    return (
        <div className='relative w-full overflow-hidden aspect-3/2'>
            {project.image ? (
                <img
                    loading='lazy'
                    src={project.image}
                    alt={t(`portfolio.projects.${project.key}.title`, project.id)}
                    className='absolute inset-0 block w-full my-auto object-cover transition-transform duration-500 group-hover:scale-110'
                />
            ) : (
                <div className='absolute inset-0 flex items-center justify-center'>
                    <span className='text-3xl text-center font-bold text-secondary'>
                        {t(`portfolio.projects.${project.key}.title`)}
                    </span>
                </div>
            )}
            <div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
            <HoverLinks project={project} />
        </div>
    );
}
