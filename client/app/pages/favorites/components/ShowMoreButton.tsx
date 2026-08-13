// -Path: "TeaChoco-Portfolio/client/src/pages/favorites/components/ShowMoreButton.tsx"
import { FaArrowRight } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { Link } from '~/i18n/routing';

type Props = {
    to: string;
    label?: string;
};

export default function ShowMoreButton({ to, label }: Props) {
    const { t } = useTranslation();

    return (
        <div className='flex justify-center mt-8'>
            <Link
                to={to}
                className='btn btn-primary-ghost gap-2 px-5 py-2.5 text-sm'
                onClick={() => window.scrollTo(0, 0)}
            >
                {label ?? t('favorites.showMore')}
                <FaArrowRight className='text-xs' aria-hidden='true' />
            </Link>
        </div>
    );
}