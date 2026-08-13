// -Path: "TeaChoco-Portfolio/client/src/pages/about/components/SkillsFilter.tsx"
import { createElement } from 'react';
import { useTranslation } from 'react-i18next';
import { categoryIcons } from '~/constants/category';
import { FaFont, FaSort } from 'react-icons/fa6';
import { categories } from '~/data/coding';
import type { CodingSkillCategory } from '~/types/coding';
import Select, { type OptionSelectType } from '~/components/custom/Select';

export default function SkillsFilter({
    sortBy,
    onSortChange,
    onCategoryChange,
    selectedCategory,
}: {
    sortBy: 'name' | 'level';
    selectedCategory: CodingSkillCategory;
    onSortChange: (sortBy: 'name' | 'level') => void;
    onCategoryChange: (category: CodingSkillCategory) => void;
}) {
    const { t } = useTranslation();

    const categoryOptions: OptionSelectType<CodingSkillCategory>[] = categories.map((category) => ({
        value: category,
        label: t(`categories.${category}`),
        icon: createElement(categoryIcons[category], { className: 'text-sm' }),
    }));

    const sortOptions: OptionSelectType<'level' | 'name'>[] = [
        {
            value: 'level',
            icon: <FaSort className='text-sm' />,
            label: t('skills.sortByLevel'),
        },
        {
            value: 'name',
            icon: <FaFont className='text-sm' />,
            label: t('skills.sortByName'),
        },
    ];

    return (
        <div className='mb-6 mt-4'>
            <div className='flex flex-col sm:flex-row gap-4'>
                {/* Category Filter */}
                <Select
                    className='w-38!'
                    value={selectedCategory}
                    options={categoryOptions}
                    label={t('categories.title')}
                    onChange={(value) => onCategoryChange(value)}
                />

                {/* Sort Options */}
                <Select
                    className='w-38!'
                    value={sortBy}
                    options={sortOptions}
                    label={t('skills.sortBy')}
                    onChange={(value) => onSortChange(value)}
                />
            </div>
        </div>
    );
}
