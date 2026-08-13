// -Path: "TeaChoco-Portfolio/client/src/pages/portfolio/components/FilterTabs.tsx"
import { createElement } from 'react';
import { useTranslation } from 'react-i18next';
import { categoryIcons } from '~/constants/category';
import { categories } from '~/data/projects';
import type { CategoryKeys } from '~/types/projects';

type Props = {
    activeCategory: CategoryKeys;
    onCategoryChange: (category: CategoryKeys) => void;
};

/** แถบ filter category ของหน้า portfolio */
export default function FilterTabs({ activeCategory, onCategoryChange }: Props) {
    const { t } = useTranslation();

    return (
        <div className='flex flex-wrap justify-center gap-2 mb-12'>
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