// -Path: "TeaChoco-Portfolio/client/app/pages/favorites/components/PreferenceDisclaimer.tsx"
import { FaCircleInfo } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

export default function PreferenceDisclaimer() {
    const { t } = useTranslation();

    return (
        <div className='mt-6 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 text-amber-800 dark:text-amber-200 text-sm font-medium'>
            <FaCircleInfo className='shrink-0 text-amber-600 dark:text-amber-400' aria-hidden='true' />
            <span>{t('favorites.disclaimer')}</span>
        </div>
    );
}