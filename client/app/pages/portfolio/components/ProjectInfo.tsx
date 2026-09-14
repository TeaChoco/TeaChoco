// -Path: "TeaChoco-Portfolio/client/src/pages/portfolio/components/ProjectInfo.tsx"
import ProjectTags from './ProjectTags';
import type { Project } from '~/types/projects';
import { useTranslation } from 'react-i18next';

export function ProjectInfo({ project }: { project: Project }) {
    const { t } = useTranslation();

    return (
        <div className='p-5'>
            <h3 className='text-lg font-semibold text-surface-foreground mb-2'>
                {t(`portfolio.projects.${project.key}.title`)}
            </h3>
            <p className='text-surface-muted text-sm mb-4 line-clamp-2'>
                {t(`portfolio.projects.${project.key}.desc`)}
            </p>
            <ProjectTags tags={project.tags} />
        </div>
    );
}
