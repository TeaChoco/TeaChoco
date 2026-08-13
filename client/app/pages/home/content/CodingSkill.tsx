// -Path: "TeaChoco-Portfolio/client/src/pages/home/content/CodingSkill.tsx"
import { codingSkills } from '~/data/coding';
import { useTranslation } from 'react-i18next';
import SkillsList from '../components/SkillsList';

export default function CodingSkill() {
    const { t } = useTranslation();

    const sortedSkills = [...codingSkills].sort((a, b) => b.level - a.level);

    return (
        <div className='mb-10 w-full'>
            <div className='flex items-center justify-between mb-4'>
                <h2 className='section-title linear-text inline-block'>
                    {t('about.skillsTitle')}
                </h2>
                <span className='text-sm text-surface-muted bg-surface-overlay px-3 py-1 rounded-full border border-border'>
                    {sortedSkills.length} {t('skills.count')}
                </span>
            </div>

            <SkillsList skills={sortedSkills} />
        </div>
    );
}
