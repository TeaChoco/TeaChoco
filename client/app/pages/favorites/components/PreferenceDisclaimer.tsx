// -Path: "TeaChoco-Portfolio/client/app/pages/favorites/components/PreferenceDisclaimer.tsx"
import Badge from '~/components/custom/Badge';
import { FaCircleInfo } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

export default function PreferenceDisclaimer() {
    const { t } = useTranslation();

    return (
        <Badge className='mt-4'>
            <FaCircleInfo className='shrink-0 text-primary-light dark:text-primary-dark' aria-hidden='true' />
            {t('favorites.disclaimer')}
        </Badge>
    );
}