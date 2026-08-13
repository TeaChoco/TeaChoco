// -Path: "TeaChoco-Portfolio/client/src/pages/favorites/CharacterPage.tsx"
import { useTranslation } from 'react-i18next';
import CategoryPage from './CategoryPage';
import CharacterTierList from '../content/CharacterTierList';

export default function CharacterPage() {
    const { t } = useTranslation();
    return (
        <CategoryPage title={t('favorites.character')} subtitle={t('favorites.subtitle')}>
            <CharacterTierList />
        </CategoryPage>
    );
}