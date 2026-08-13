// -Path: "TeaChoco-Portfolio/client/src/pages/about/content/CodingSkill.tsx"
import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { codingSkills } from '~/data/coding';
import type { CodingSkill, CodingSkillCategory } from '~/types/coding';
import { codingViewOptions, type CodingViewMode } from './components/codingViewOptions';
import CodingSkillList from './components/CodingSkillList';
import CodingSkillCards from './components/CodingSkillCards';
import CodingSkillGrid from './components/CodingSkillGrid';
import SkillsFilter from '../components/SkillsFilter';
import EmptyState from '../components/EmptyState';

export default function CodingSkill() {
    const { t } = useTranslation();
    const [sortBy, setSortBy] = useState<'name' | 'level'>('level');
    const [selectedCategory, setSelectedCategory] = useState<CodingSkillCategory>('all');
    const [view, setView] = useState<CodingViewMode>('list');

    const filteredAndSortedSkills = useMemo(() => {
        let filtered = selectedCategory === 'all' ? codingSkills : codingSkills.filter((skill) => skill.category === selectedCategory);

        return filtered.sort((a, b) => (sortBy === 'name' ? a.name.localeCompare(b.name) : b.level - a.level));
    }, [selectedCategory, sortBy]);

    return (
        <div className='mb-10 w-full'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4'>
                <h2 className='section-title linear-text inline-block'>{t('about.skillsTitle')}</h2>

                <div className='flex items-center gap-1.5 p-1 rounded-full border border-border bg-surface-overlay w-fit'>
                    {codingViewOptions.map((option) => {
                        const Icon = option.icon;
                        const active = view === option.id;

                        return (
                            <button
                                key={option.id}
                                onClick={() => setView(option.id)}
                                aria-pressed={active}
                                title={t(option.labelKey)}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                                    active ? 'bg-primary/10 text-primary-light' : 'text-surface-muted hover:text-primary-light'
                                }`}
                            >
                                <Icon className='text-sm' />
                                <span className='hidden sm:inline'>{t(option.labelKey)}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <SkillsFilter
                sortBy={sortBy}
                onSortChange={setSortBy}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />

            {filteredAndSortedSkills.length > 0 ? (
                <>
                    {view === 'list' && <CodingSkillList skills={filteredAndSortedSkills} />}
                    {view === 'cards' && <CodingSkillCards skills={filteredAndSortedSkills} />}
                    {view === 'grid' && <CodingSkillGrid skills={filteredAndSortedSkills} />}
                </>
            ) : (
                <EmptyState onShowAll={() => setSelectedCategory('all')} />
            )}
        </div>
    );
}