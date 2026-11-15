// -Path: 'TeaChoco-Portfolio/client/app/pages/portfolio/detail/ProjectDetailHero.tsx'
import { useTranslation } from 'react-i18next';
import type { Project } from '~/types/projects';
import ProjectDetailCategories from './ProjectDetailCategories';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';

/** Props for {@link ProjectDetailHero}. */
interface ProjectDetailHeroProps {
    project: Project;
}

/**
 * Hero section of a project detail page: cover image, summary and external actions.
 *
 * @param props - Project to display.
 * @returns The hero element.
 */
export default function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
    const { t } = useTranslation();
    /** Categories without the filter pseudo-category. */
    const categories = project.categorys.filter((category) => category !== 'all');
    /** Optional long-form case study text, rendered only when present. */
    const body = t(`portfolio.projects.${project.key}.body`, { defaultValue: '' });
    /** Localized one-line summary shared with the portfolio grid. */
    const description = t(`portfolio.projects.${project.key}.desc`, { defaultValue: '' });
    /** Localized project name from real project data. */
    const title = t(`portfolio.projects.${project.key}.title`, { defaultValue: project.id });

    return (
        <div className='grid grid-cols-1 items-start gap-8 lg:grid-cols-2'>
            <div className='relative aspect-3/2 w-full overflow-hidden rounded-2xl border border-border bg-surface-sunken'>
                {project.image ? (
                    <img
                        alt={title}
                        loading='eager'
                        src={project.image}
                        className='absolute inset-0 block h-full w-full object-cover'
                    />
                ) : (
                    <div className='absolute inset-0 flex items-center justify-center p-6'>
                        <span className='text-center text-2xl font-bold text-secondary sm:text-3xl'>{title}</span>
                    </div>
                )}
            </div>

            <div className='flex flex-col gap-4'>
                <h1 className='page-title'>
                    <span className='linear-text'>{title}</span>
                </h1>
                {body && <p className='text-surface-subtle leading-relaxed'>{body}</p>}
                {description && <p className='text-surface-muted leading-relaxed'>{description}</p>}
                <ProjectDetailCategories categories={categories} />
                {(project.github || project.live) && (
                    <div className='flex flex-wrap gap-3'>
                        {project.github && (
                            <a
                                target='_blank'
                                href={project.github}
                                rel='noopener noreferrer'
                                className='btn btn-primary-ghost gap-2'
                            >
                                <FaGithub aria-hidden='true' />
                                {t('portfolio.detail.source')}
                            </a>
                        )}
                        {project.live && (
                            <a
                                target='_blank'
                                href={project.live}
                                rel='noopener noreferrer'
                                className='btn btn-primary-ghost gap-2'
                            >
                                <FaArrowUpRightFromSquare aria-hidden='true' />
                                {t('portfolio.detail.live')}
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
