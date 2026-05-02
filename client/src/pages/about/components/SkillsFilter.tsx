// -Path: "TeaChoco-Portfolio/client/src/pages/about/components/SkillsFilter.tsx"
import { createElement } from 'react';
import { useTranslation } from 'react-i18next';
import { categoryIcons } from '$/data/category';
import { FaFont, FaSort } from 'react-icons/fa6';
import { categories, type SkillCategory } from '$/data/skill';
import Select, { type OptionSelectType } from '$/components/custom/Select';

export default function SkillsFilter({
    sortBy,
    onSortChange,
    onCategoryChange,
    selectedCategory,
}: {
    sortBy: 'name' | 'level';
    selectedCategory: SkillCategory;
    onSortChange: (sortBy: 'name' | 'level') => void;
    onCategoryChange: (category: SkillCategory) => void;
}) {
    const { t } = useTranslation();

    const categoryOptions: OptionSelectType<SkillCategory>[] = categories.map((category) => ({
        value: category,
        label: t(
            `categories.${category}`,
            category.charAt(0).toUpperCase() + category.slice(1),
        ),
        icon: createElement(categoryIcons[category], { className: 'text-sm' }),
    }));

    const sortOptions: OptionSelectType<'level' | 'name'>[] = [
        {
            value: 'level',
            icon: <FaSort className='text-sm' />,
            label: t('skills.sortByLevel', 'By Level'),
        },
        {
            value: 'name',
            icon: <FaFont className='text-sm' />,
            label: t('skills.sortByName', 'By Name'),
        },
    ];

    return (
        <div className='mb-6 mt-4'>
            <div className='flex flex-col sm:flex-row gap-4'>
                {/* Category Filter */}
                <Select
                    value={selectedCategory}
                    options={categoryOptions}
                    onChange={(value) => onCategoryChange(value)}
                    label={t('categories.title', 'Category')}
                />

                {/* Sort Options */}
                <Select
                    value={sortBy}
                    options={sortOptions}
                    label={t('skills.sortBy', 'Sort By')}
                    onChange={(value) => onSortChange(value)}
                />
            </div>
        </div>
    );
}
