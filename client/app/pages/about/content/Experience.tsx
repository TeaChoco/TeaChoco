// -Path: 'TeaChoco-Portfolio/client/app/pages/about/content/Experience.tsx'
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import EraSection from './experience/EraSection';
import CategoryFilter from './experience/CategoryFilter';
import { useExperience } from '../../../hooks/useExperience';

/** Experience timeline that blends an era narrative with a filterable, year-grouped view. */
export default function Experience() {
    const { t } = useTranslation();
    const { filter, setFilter, eras, counts } = useExperience();

    return (
        <div className='w-full'>
            <h2 className='section-title linear-text inline-block'>{t('about.experienceTitle')}</h2>
            <CategoryFilter value={filter} counts={counts} onChange={setFilter} />

            <div className='flex flex-col gap-12 mt-8'>
                <AnimatePresence mode='popLayout'>
                    {eras.map((era, index) => (
                        <EraSection key={era.id} era={era} isLatest={index === eras.length - 1} />
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
