// -Path: "TeaChoco-Portfolio/client/src/pages/portfolio/Portfolio.tsx"
import { useState } from 'react';
import { projects } from '~/data/projects';
import { useTranslation } from 'react-i18next';
import ProjectGrid from './content/ProjectGrid';
import FilterTabs from './components/FilterTabs';
import type { CategoryKeys } from '~/types/category';
import Section from '../../components/layout/Section';

export default function Portfolio() {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState<CategoryKeys>('all');

    const filteredProjects =
        activeCategory === 'all'
            ? projects
            : projects.filter((project) => project.categorys.includes(activeCategory));

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
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />
                <ProjectGrid projects={filteredProjects} />
            </div>
        </Section>
    );
}