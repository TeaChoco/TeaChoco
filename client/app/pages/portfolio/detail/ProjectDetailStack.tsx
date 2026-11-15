// -Path: 'TeaChoco-Portfolio/client/app/pages/portfolio/detail/ProjectDetailStack.tsx'
import { getTagIcon } from '~/constants/icon';
import { useTranslation } from 'react-i18next';
import type { Project } from '~/types/projects';

/** Props for {@link ProjectDetailStack}. */
interface ProjectDetailStackProps {
    project: Project;
}

/**
 * Full-width tech stack section of a project detail page.
 *
 * @param props - Project whose tags are rendered as tech cards.
 * @returns The stack section element.
 */
export default function ProjectDetailStack({ project }: ProjectDetailStackProps) {
    const { t } = useTranslation();

    return (
        <section>
            <h2 className='section-title'>{t('portfolio.detail.stack')}</h2>
            <ul className='grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4'>
                {project.tags.map((tag) => {
                    /** Icon and brand colour registered for this tag. */
                    const tagIcon = getTagIcon(tag);
                    return (
                        <li
                            key={tag}
                            className='flex items-center gap-3 rounded-xl border border-border bg-surface-overlay/50 p-3'
                        >
                            <tagIcon.icon
                                aria-hidden='true'
                                className='shrink-0 text-xl text-primary'
                                style={tagIcon.color ? { color: tagIcon.color } : undefined}
                            />
                            <span className='text-sm font-medium text-surface-foreground'>{tag}</span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
