// -Path: 'TeaChoco-Portfolio/client/app/routes/page/portfolio-detail.tsx'
import i18n from '~/i18n';
import { seo } from '~/lib/seo';
import { projects } from '~/data/projects';
import type { Route } from './+types/portfolio-detail';
import ProjectDetailPage from '~/pages/portfolio/detail/ProjectDetail';

/**
 * Builds SEO metadata for a single project, falling back to a no-index
 * portfolio metadata set when the project id is unknown.
 *
 * @param params - Route params including the active lang and project id.
 * @returns Meta descriptors for the detail page.
 */
export function meta({ params }: Route.MetaArgs) {
    const lang = params.lang ?? 'en';
    const project = projects.find((item) => item.id === params.id);

    if (!project) {
        /** Localized label used when the requested project does not exist. */
        const notFound = i18n.t('portfolio.detail.notFound', {
            lng: lang,
            defaultValue: 'Project not found',
        });

        return seo({
            lang,
            title: `${notFound} | TeaChoco Portfolio`,
            description: notFound,
            path: '/portfolio',
            noIndex: true,
        });
    }

    /** External destination taken from real data only. */
    const externalUrl = project.live && project.live !== '/' ? project.live : project.github;
    /** Localized project summary already used on the portfolio grid. */
    const description = i18n.t(`portfolio.projects.${project.key}.desc`, {
        lng: lang,
        defaultValue: '',
    });
    /** Localized project name from real project data. */
    const projectTitle = i18n.t(`portfolio.projects.${project.key}.title`, {
        lng: lang,
        defaultValue: project.id,
    });
    /** Generated Open Graph card, one PNG per project (see `scripts/generate-og.mjs`). */
    const image = `/og/portfolio-${project.id}.png`;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        description,
        keywords: project.tags.join(', '),
        name: projectTitle,
        ...(externalUrl ? { url: externalUrl } : {}),
    };

    return seo({
        lang,
        title: `${projectTitle} | TeaChoco Portfolio`,
        description,
        path: `/portfolio/${project.id}`,
        image,
        jsonLd,
    });
}

/**
 * Renders the project detail page for the requested project id.
 *
 * @returns The detail page element.
 */
export default function PortfolioDetail() {
    return <ProjectDetailPage />;
}
