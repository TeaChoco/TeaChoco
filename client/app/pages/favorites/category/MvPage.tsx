// -Path: "TeaChoco-Portfolio/client/src/pages/favorites/MvPage.tsx"
import { useTranslation } from 'react-i18next';
import CategoryPage from './CategoryPage';
import MvList from '../content/MvList';

export default function MvPage() {
    const { t } = useTranslation();
    return (
        <CategoryPage title={t('favorites.mv')} subtitle={t('favorites.subtitle')}>
            <MvList />
        </CategoryPage>
    );
}