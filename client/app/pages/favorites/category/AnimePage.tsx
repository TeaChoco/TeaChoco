// -Path: "TeaChoco-Portfolio/client/src/pages/favorites/AnimePage.tsx"
import { useSearchParams } from 'react-router';
import CategoryPage from './CategoryPage';
import AnimeList from '../content/AnimeList';
import { useTranslation } from 'react-i18next';

export default function AnimePage() {
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const initialItemId = searchParams.get('item') ?? undefined;
    return (
        <CategoryPage title={t('favorites.anime')} subtitle={t('favorites.subtitle')}>
            <AnimeList initialItemId={initialItemId} />
        </CategoryPage>
    );
}