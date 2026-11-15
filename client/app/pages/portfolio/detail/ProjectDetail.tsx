// -Path: 'TeaChoco-Portfolio/client/app/pages/portfolio/detail/ProjectDetail.tsx'
import { Link } from '~/i18n/routing';
import Notfound from '~/pages/Notfound';
import { useParams } from 'react-router';
import { projects } from '~/data/projects';
import { FaArrowLeft } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import Section from '~/components/custom/Section';
import ProjectDetailHero from './ProjectDetailHero';
import ProjectDetailStack from './ProjectDetailStack';
import ProjectDetailRelated from './ProjectDetailRelated';

/**
 * Composes the project detail page: back link, hero, tech stack and related projects.
 *
 * @returns The project detail page, or the not-found page for unknown ids.
 */
export default function ProjectDetail() {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    /** Project resolved from real portfolio data. */
    const project = projects.find((item) => item.id === id);

    if (!project) return <Notfound />;

    return (
        <Section className='min-h-0!'>
            <div className='mx-auto w-full max-w-6xl'>
                <div className='mb-8 flex justify-start'>
                    <Link to='/portfolio' className='btn btn-primary-ghost gap-2 px-4 py-2 text-sm'>
                        <FaArrowLeft className='text-xs' aria-hidden='true' />
                        {t('portfolio.detail.back')}
                    </Link>
                </div>

                <div className='flex flex-col gap-10'>
                    <ProjectDetailHero project={project} />
                    <ProjectDetailStack project={project} />
                    <ProjectDetailRelated project={project} />
                </div>
            </div>
        </Section>
    );
}
