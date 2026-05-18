// -Path: "TeaChoco-Portfolio/client/src/pages/portfolio/components/ProjectGrid.tsx"
import ProjectCard from './ProjectCard';
import type { Project } from '$/data/projects';
import { useTranslation } from 'react-i18next';

/** Grid แสดงรายการ project พร้อม empty state */
export default function ProjectGrid({ projects }: { projects: Project[] }) {
    const { t } = useTranslation();

    if (projects.length === 0) {
        return (
            <div className='text-center py-16'>
                <p className='text-text-muted-light dark:text-text-muted-dark text-lg'>
                    {t('portfolio.empty', 'No projects in this category yet.')}
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
