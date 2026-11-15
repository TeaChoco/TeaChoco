// -Path: 'TeaChoco-Portfolio/client/app/pages/portfolio/components/ProjectInfo.tsx'
import ProjectTags from './ProjectTags';
import type { Project } from '~/types/projects';
import { useTranslation } from 'react-i18next';

/**
 * Compact project summary used inside a portfolio card.
 *
 * @param props - Project to summarize.
 * @returns The project info block element.
 */
export function ProjectInfo({ project }: { project: Project }) {
    const { t } = useTranslation();

    return (
        <div className='p-5'>
            <h3 className='text-lg font-semibold text-surface-foreground mb-2'>
                {t(`portfolio.projects.${project.key}.title`)}
            </h3>
            <p className='text-surface-muted text-sm mb-4 line-clamp-3'>
                {t(`portfolio.projects.${project.key}.desc`)}
            </p>
            <ProjectTags tags={project.tags} />
            {/** Hint that the whole card opens the detail page. */}
            <p className='mt-4 text-sm font-medium text-primary transition-colors duration-200 group-hover:text-primary-emphasis'>
                {t('portfolio.readMore')}
            </p>
        </div>
    );
}
