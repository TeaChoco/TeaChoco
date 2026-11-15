// -Path: 'TeaChoco-Portfolio/client/app/pages/portfolio/detail/ProjectDetailRelated.tsx'
import { projects } from '~/data/projects';
import { useTranslation } from 'react-i18next';
import type { Project } from '~/types/projects';
import ProjectCard from '../content/ProjectCard';

/** Props for {@link ProjectDetailRelated}. */
interface ProjectDetailRelatedProps {
    project: Project;
}

/**
 * Shows up to three other projects that share at least one category with the current one.
 *
 * @param props - Current project, excluded from the result.
 * @returns The related projects grid, or null when nothing is related.
 */
export default function ProjectDetailRelated({ project }: ProjectDetailRelatedProps) {
    const { t } = useTranslation();
    /** Other projects ranked by shared category count, stable on ties. */
    const related = projects
        .filter((item) => item.id !== project.id)
        .map((item) => ({
            project: item,
            shared: item.categorys.filter(
                (category) => category !== 'all' && project.categorys.includes(category),
            ).length,
        }))
        .filter((entry) => entry.shared > 0)
        .sort((a, b) => b.shared - a.shared)
        .slice(0, 3)
        .map((entry) => entry.project);

    if (related.length === 0) return null;

    return (
        <section>
            <h2 className='section-title'>{t('portfolio.detail.related')}</h2>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {related.map((item) => (
                    <ProjectCard key={item.id} project={item} />
                ))}
            </div>
        </section>
    );
}
