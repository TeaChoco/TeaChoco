// -Path: "TeaChoco-Portfolio/client/src/pages/favorites/GamePage.tsx"
import { useTranslation } from 'react-i18next';
import CategoryPage from './CategoryPage';
import GameList from '../content/GameList';

export default function GamePage() {
    const { t } = useTranslation();
    return (
        <CategoryPage title={t('favorites.game')} subtitle={t('favorites.subtitle')}>
            <GameList />
        </CategoryPage>
    );
}