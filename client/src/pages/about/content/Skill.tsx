// -Path: "TeaChoco-Portfolio/client/src/pages/about/content/Skill.tsx"
import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import EmptyState from '../components/EmptyState';
import SkillsList from '../components/SkillsList';
import SkillsFilter from '../components/SkillsFilter';
import { skills, type SkillCategory } from '$/data/skill';

export default function Skill() {
    const { t } = useTranslation();
    const [sortBy, setSortBy] = useState<'name' | 'level'>('level');
    const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');

    const filteredAndSortedSkills = useMemo(() => {
        let filtered =
            selectedCategory === 'all'
                ? skills
                : skills.filter((skill) => skill.category === selectedCategory);

        return filtered.sort((a, b) =>
            sortBy === 'name' ? a.name.localeCompare(b.name) : b.level - a.level,
        );
    }, [selectedCategory, sortBy]);

    return (
        <div className='mb-10'>
            <div className='flex items-center justify-between mb-4'>
                <h2 className='section-title linear-text inline-block'>
                    {t('about.skillsTitle', 'Skills')}
                </h2>
                <span className='text-sm text-text-muted-light dark:text-text-muted-dark bg-bg-card-light dark:bg-bg-card-dark px-3 py-1 rounded-full border border-border-light dark:border-border-dark'>
                    {filteredAndSortedSkills.length} {t('skills.count', 'skills')}
                </span>
            </div>

            <SkillsFilter
                sortBy={sortBy}
                onSortChange={setSortBy}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />

            {filteredAndSortedSkills.length > 0 ? (
                <SkillsList skills={filteredAndSortedSkills} />
            ) : (
                <EmptyState onShowAll={() => setSelectedCategory('all')} />
            )}
        </div>
    );
}
