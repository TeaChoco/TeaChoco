// -Path: 'TeaChoco-Portfolio/client/app/pages/portfolio/components/FilterTabs.tsx'
import { createElement } from 'react';
import { categories } from '~/data/projects';
import { useTranslation } from 'react-i18next';
import type { CategoryKeys } from '~/types/category';
import { categoryIcons } from '~/constants/category';

/** Props for {@link FilterTabs}. */
type Props = {
    activeCategory: CategoryKeys;
    onCategoryChange: (category: CategoryKeys) => void;
};

/**
 * Category chips that narrow the portfolio grid.
 *
 * @param props - Active category and its change handler.
 * @returns The wrapping filter row.
 */
export default function FilterTabs({ activeCategory, onCategoryChange }: Props) {
    const { t } = useTranslation();

    return (
        <div className='flex flex-wrap justify-center gap-2 mb-6'>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`btn rounded-full text-sm items-center gap-1.5 ${activeCategory === category ? 'btn-primary' : 'btn-surface'}`}
                >
                    {createElement(categoryIcons[category], { className: 'text-xs' })}
                    {t(`categories.${category}`)}
                </button>
            ))}
        </div>
    );
}
