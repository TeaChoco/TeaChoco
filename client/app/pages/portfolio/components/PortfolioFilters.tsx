// -Path: 'TeaChoco-Portfolio/client/app/pages/portfolio/components/PortfolioFilters.tsx'
import { useTranslation } from 'react-i18next';
import Search from '~/components/custom/Search';
import type { ProjectSort } from '~/hooks/useProjectFilter';
import Select, { type OptionSelectType } from '~/components/custom/Select';
import { FaFont, FaTags, FaGlobe, FaArrowDownWideShort } from 'react-icons/fa6';

/** Props for {@link PortfolioFilters}. */
interface PortfolioFiltersProps {
    query: string;
    sort: ProjectSort;
    onSortChange: (sort: ProjectSort) => void;
    onQueryChange: (query: string) => void;
}

/**
 * Search field and sort selector shown above the portfolio grid.
 *
 * @param props - Current query, sort and their change handlers.
 * @returns The responsive filters row.
 */
export default function PortfolioFilters({
    query,
    sort,
    onSortChange,
    onQueryChange,
}: PortfolioFiltersProps) {
    const { t } = useTranslation();

    /** Sort choices for the select; option order is intentional. */
    const sortOptions: OptionSelectType<ProjectSort>[] = [
        {
            value: 'default',
            label: t('portfolio.sort.default'),
            icon: <FaArrowDownWideShort className='text-sm' />,
        },
        {
            value: 'name',
            label: t('portfolio.sort.name'),
            icon: <FaFont className='text-sm' />,
        },
        {
            value: 'tags',
            label: t('portfolio.sort.tags'),
            icon: <FaTags className='text-sm' />,
        },
        {
            value: 'live',
            label: t('portfolio.sort.live'),
            icon: <FaGlobe className='text-sm' />,
        },
    ];

    return (
        <div className='flex flex-col sm:flex-row gap-3 max-w-6xl mx-auto w-full mb-8'>
            {/** Free-text search across project titles, descriptions and tags. */}
            <Search
                value={query}
                onChange={onQueryChange}
                className='flex-1 min-w-0'
                ariaLabel={t('portfolio.search')}
                clearTitle={t('portfolio.search')}
                placeholder={t('portfolio.search')}
            />
            {/** Sort trigger; the options panel is rendered in a portal. */}
            <Select
                value={sort}
                options={sortOptions}
                onChange={onSortChange}
                containerClassName='w-full sm:w-52 shrink-0'
            />
        </div>
    );
}
