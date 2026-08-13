// -Path: "TeaChoco-Portfolio/client/app/pages/favorites/category/CategoryPage.tsx"
import { Link } from '~/i18n/routing';
import type { ReactNode } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import Section from '../../../components/layout/Section';
import PreferenceDisclaimer from '../components/PreferenceDisclaimer';

type Props = {
    title: string;
    subtitle: string;
    backTo?: string;
    children: ReactNode;
};

export default function CategoryPage({ title, subtitle, backTo = '/favorites', children }: Props) {
    const { t } = useTranslation();

    return (
        <Section>
            <div className='w-full max-w-6xl mx-auto'>
                <div className='flex justify-start mb-6'>
                    <Link
                        to={backTo}
                        className='btn btn-primary-ghost gap-2 px-4 py-2 text-sm'
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <FaArrowLeft className='text-xs' aria-hidden='true' />
                        {t('favorites.back')}
                    </Link>
                </div>
            </div>

            <div className='page-header'>
                <h1 className='page-title'>
                    <span className='linear-text'>{title}</span>
                </h1>
                <p className='page-subtitle'>{subtitle}</p>
                <PreferenceDisclaimer />
            </div>

            <div className='max-w-6xl mx-auto w-full'>{children}</div>
        </Section>
    );
}
