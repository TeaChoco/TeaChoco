// -Path: 'TeaChoco-Portfolio/client/app/pages/portfolio/content/ProjectCard.tsx'
import { Link } from '~/i18n/routing';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { Project } from '~/types/projects';
import ProjectImage from '../components/ProjectImage';
import { ProjectInfo } from '../components/ProjectInfo';

/** Props for {@link ProjectCard}. */
interface ProjectCardProps {
    project: Project;
}

/**
 * Card summarizing one project; the whole surface links to its detail page.
 *
 * @param props - Project to display.
 * @returns The animated project card element.
 */
export default function ProjectCard({ project }: ProjectCardProps) {
    const { t } = useTranslation();
    /** Accessible name for the stretched card link. */
    const title = t(`portfolio.projects.${project.key}.title`, { defaultValue: project.id });

    return (
        <motion.div
            layout
            exit={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className='card group relative overflow-hidden p-0'
        >
            {/** Stretched overlay keeps the card clickable without nesting anchors. */}
            <Link to={`/portfolio/${project.id}`} aria-label={title} className='absolute inset-0 z-10' />
            <ProjectImage project={project} />
            <ProjectInfo project={project} />
        </motion.div>
    );
}
