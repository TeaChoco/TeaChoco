// -Path: 'TeaChoco-Portfolio/client/app/pages/portfolio/detail/ProjectDetailCategories.tsx'
import { useTranslation } from 'react-i18next';
import type { CategoryKeys } from '~/types/category';

/** Props for {@link ProjectDetailCategories}. */
interface ProjectDetailCategoriesProps {
    categories: CategoryKeys[];
}

/**
 * Renders the localized category chips of a project.
 *
 * @param props - Categories to render, already filtered.
 * @returns The category chip list element.
 */
export default function ProjectDetailCategories({ categories }: ProjectDetailCategoriesProps) {
    const { t } = useTranslation();

    return (
        <div className='flex flex-wrap gap-2'>
            {categories.map((category) => (
                <span
                    key={category}
                    className='inline-flex items-center rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs font-semibold tracking-wide text-secondary'
                >
                    {t(`categories.${category}`)}
                </span>
            ))}
        </div>
    );
}
