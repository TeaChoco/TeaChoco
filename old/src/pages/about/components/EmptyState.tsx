// -Path: "TeaChoco-Portfolio/client/src/components/about/EmptyState.tsx"
import { useTranslation } from 'react-i18next';

export default function EmptyState({ onShowAll }: { onShowAll: () => void }) {
    const { t } = useTranslation();

    return (
        <div className='card text-center py-12 mt-8'>
            <div className='text-text-muted-light dark:text-text-muted-dark mb-2'>
                {t('skills.noSkillsFound', 'No skills found for this category')}
            </div>
            <button
                onClick={onShowAll}
                className='text-primary-light hover:text-primary transition-colors font-medium'
            >
                {t('skills.showAll', 'Show all skills')}
            </button>
        </div>
    );
}
