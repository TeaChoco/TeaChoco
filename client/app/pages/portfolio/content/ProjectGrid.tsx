// -Path: 'TeaChoco-Portfolio/client/app/pages/portfolio/content/ProjectGrid.tsx'
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';
import type { Project } from '~/types/projects';

/** Props for {@link ProjectGrid}. */
interface ProjectGridProps {
    /** Reports an empty result caused by an active search query. */
    hasQuery?: boolean;
    projects: Project[];
}

/**
 * Renders the project grid or a context-aware empty state.
 *
 * @param props - Projects to render plus the search state.
 * @returns The grid or empty-state element.
 */
export default function ProjectGrid({ hasQuery = false, projects }: ProjectGridProps) {
    const { t } = useTranslation();

    if (projects.length === 0) {
        /** Message differs when a search query caused the empty result. */
        const message = hasQuery
            ? t('portfolio.noResults', 'No projects match your search.')
            : t('portfolio.empty', 'No projects in this category yet.');

        return (
            <div className='text-center py-16'>
                <p className='text-surface-muted text-lg'>
                    {message}
                </p>
            </div>
        );
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}
