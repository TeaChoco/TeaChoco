// -Path: "TeaChoco-Portfolio/client/src/pages/favorites/Favorites.tsx"
import { useTranslation } from 'react-i18next';
import Section from '../../components/layout/Section';
import AnimeList from './content/AnimeList';
import GameList from './content/GameList';
import MvList from './content/MvList';
import CharacterTierList from './content/CharacterTierList';
import PreferenceDisclaimer from './components/PreferenceDisclaimer';

export default function Favorites() {
    const { t } = useTranslation();

    return (
        <Section>
            <div className='page-header'>
                <h1 className='page-title'>
                    <span className='linear-text'>{t('favorites.title')}</span>
                </h1>
                <p className='page-subtitle'>{t('favorites.subtitle')}</p>
                <PreferenceDisclaimer />
            </div>

            <div className='flex flex-col max-w-6xl mx-auto w-full gap-12'>
                <AnimeList rows={3} viewMoreTo='/favorites/anime' />
                <GameList rows={3} viewMoreTo='/favorites/game' />
                <MvList rows={2} viewMoreTo='/favorites/mv' />
                <CharacterTierList />
            </div>
        </Section>
    );
}
