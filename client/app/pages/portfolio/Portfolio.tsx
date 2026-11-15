// -Path: 'TeaChoco-Portfolio/client/app/pages/portfolio/Portfolio.tsx'
import { useTranslation } from 'react-i18next';
import ProjectGrid from './content/ProjectGrid';
import FilterTabs from './components/FilterTabs';
import Section from '../../components/custom/Section';
import PortfolioFilters from './components/PortfolioFilters';
import { useProjectFilter } from '~/hooks/useProjectFilter';

/**
 * Portfolio grid page wiring the category tabs, search/sort row and grid.
 *
 * @returns The portfolio section element.
 */
export default function Portfolio() {
    const { t } = useTranslation();
    const {
        sort,
        query,
        projects,
        category,
        isFiltering,
        setSort,
        setQuery,
        setCategory,
    } = useProjectFilter();

    return (
        <Section>
            <div className='page-header'>
                <h1 className='page-title'>
                    <span className='linear-text'>{t('portfolio.title')}</span>
                </h1>
                <p className='page-subtitle'>{t('portfolio.subtitle')}</p>
            </div>

            <div className='max-w-6xl mx-auto w-full'>
                <FilterTabs
                    activeCategory={category}
                    onCategoryChange={setCategory}
                />
                <PortfolioFilters
                    sort={sort}
                    query={query}
                    onSortChange={setSort}
                    onQueryChange={setQuery}
                />
                <ProjectGrid projects={projects} hasQuery={isFiltering} />
            </div>
        </Section>
    );
}
