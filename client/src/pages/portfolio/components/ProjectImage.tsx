// -Path: "TeaChoco-Portfolio/client/src/pages/portfolio/components/ProjectImage.tsx"
import HoverLinks from './HoverLinks';
import type { Project } from '$/data/projects';
import { useTranslation } from 'react-i18next';

export default function ProjectImage({ project }: { project: Project }) {
    const { t } = useTranslation();

    return (
        <div className='relative overflow-hidden aspect-3/2'>
            {project.image ? (
                <img
                    src={project.image}
                    alt={t(project.titleKey, project.id)}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
            ) : (
                <div className='w-full h-full flex items-center justify-center'>
                    <span className='text-3xl text-center font-bold text-secondary'>{t(project.titleKey)}</span>
                </div>
            )}
            <div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            <HoverLinks project={project} />
        </div>
    );
}
