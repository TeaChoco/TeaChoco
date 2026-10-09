// -Path: 'TeaChoco-Portfolio/client/app/pages/about/content/experience/CategoryFilter.tsx'
import { FaLayerGroup } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import type { ExperienceFilter } from '~/hooks/useExperience';
import { CATEGORIES, CATEGORY_IDS } from '~/data/about/experience';

interface CategoryFilterProps {
    value: ExperienceFilter;
    counts: Record<ExperienceFilter, number>;
    onChange: (value: ExperienceFilter) => void;
}

const BASE =
    'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm border transition-colors cursor-pointer';
const IDLE =
    'border-border text-surface-subtle hover:border-primary/40 hover:text-surface-foreground';
const ALL_ACTIVE = 'bg-primary/15 text-primary border-primary/40';

/** Row of chips that filters the timeline by category. */
export default function CategoryFilter({ value, counts, onChange }: CategoryFilterProps) {
    const { t } = useTranslation();

    return (
        <div className='flex flex-wrap gap-2 mt-4' role='tablist'>
            <button
                type='button'
                role='tab'
                aria-selected={value === 'all'}
                onClick={() => onChange('all')}
                className={`${BASE} ${value === 'all' ? ALL_ACTIVE : IDLE}`}
            >
                <FaLayerGroup className='text-xs' />
                {t('about.category.all')}
                <span className='opacity-60'>{counts.all}</span>
            </button>

            {CATEGORY_IDS.map((id) => {
                const { icon: Icon, labelKey, chipActive } = CATEGORIES[id];
                return (
                    <button
                        key={id}
                        type='button'
                        role='tab'
                        aria-selected={value === id}
                        onClick={() => onChange(id)}
                        className={`${BASE} ${value === id ? chipActive : IDLE}`}
                    >
                        <Icon className='text-xs' />
                        {t(labelKey)}
                        <span className='opacity-60'>{counts[id] ?? 0}</span>
                    </button>
                );
            })}
        </div>
    );
}
