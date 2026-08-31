// -Path: "TeaChoco-Portfolio/client/src/pages/favorites/GamePage.tsx"
import { useSearchParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import CategoryPage from './CategoryPage';
import GameList from '../content/GameList';

export default function GamePage() {
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const initialItemId = searchParams.get('item') ?? undefined;
    return (
        <CategoryPage title={t('favorites.game')} subtitle={t('favorites.subtitle')}>
            <GameList initialItemId={initialItemId} />
        </CategoryPage>
    );
}