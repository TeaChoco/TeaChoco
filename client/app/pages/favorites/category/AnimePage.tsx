// -Path: "TeaChoco-Portfolio/client/src/pages/favorites/AnimePage.tsx"
import CategoryPage from './CategoryPage';
import AnimeList from '../content/AnimeList';
import { useTranslation } from 'react-i18next';

export default function AnimePage() {
    const { t } = useTranslation();
    return (
        <CategoryPage title={t('favorites.anime')} subtitle={t('favorites.subtitle')}>
            <AnimeList />
        </CategoryPage>
    );
}