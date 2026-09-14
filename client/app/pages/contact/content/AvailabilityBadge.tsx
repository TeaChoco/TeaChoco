//-Path: "TeaChoco-Portfolio/client/src/pages/contact/content/AvailabilityBadge.tsx"
import { useTranslation } from 'react-i18next';

export default function AvailabilityBadge() {
    const { t } = useTranslation();

    return (
        <div className='relative mb-10 flex justify-center'>
            <div className='inline-flex items-center gap-3 rounded-full border border-success/25 bg-success/10 px-5 py-2 shadow-lg shadow-success/10'>
                <span className='relative flex size-2.5'>
                    <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60' />
                    <span className='relative inline-flex size-2.5 rounded-full bg-success' />
                </span>
                <span className='text-sm font-medium text-success-emphasis'>
                    {t('contact.available')}
                </span>
            </div>
        </div>
    );
}
