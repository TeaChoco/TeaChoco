import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTierGroups } from '~/hooks/useTierGroups';
import ErrorBound from '~/components/custom/ErrorBound';
import { TierRow, type TierRowAxis } from '../components/character/TierRow';
import ShowMoreButton from '../components/ShowMoreButton';
import { characters, characterTiers } from '~/data/favorites/character';
import { TierListToolbar } from '../components/character/TierListToolbar';
import { useLangTextResolver } from '../hooks/useLocalizedText';

/**
 * Tier list board.
 * Defaults to a dual-axis board rendering the "Favorite" tier list on the
 * left and the "Waifu" tier list on the right, sharing the same SSSS..F
 * tier scale in the middle column — matching the reference board layout.
 * Can also be switched to a single "favorite" or "waifu" view.
 */
interface CharacterTierListProps {
    viewMoreTo?: string;
}

export default function CharacterTierList({ viewMoreTo }: CharacterTierListProps) {
    const { t } = useTranslation();
    const resolve = useLangTextResolver();
    const [selectedSource, setSelectedSource] = useState('all');
    const [search, setSearch] = useState('');
    const [axis, setAxis] = useState<TierRowAxis>('both');

    const sourceOptions = useMemo(() => {
        const sources = new Set<string>();
        characters.forEach((character) => {
            const anime = resolve(character.from.anime);
            const game = resolve(character.from.game);
            if (anime) sources.add(anime);
            if (game) sources.add(game);
        });
        return [
            { label: 'ทั้งหมด', value: 'all' },
            ...Array.from(sources).map((source) => ({ label: source, value: source })),
        ];
    }, [characters, resolve]);

    const filteredCharacters = useMemo(() => {
        const query = search.trim().toLowerCase();
        return characters.filter((character) => {
            const anime = resolve(character.from.anime);
            const game = resolve(character.from.game);
            const matchesSource =
                selectedSource === 'all' || anime === selectedSource || game === selectedSource;
            const matchesSearch = query === '' || character.name.toLowerCase().includes(query);
            return matchesSource && matchesSearch;
        });
    }, [characters, selectedSource, search, resolve]);

    const favoriteGroups = useTierGroups(filteredCharacters, 'favorite');
    const waifuGroups = useTierGroups(filteredCharacters, 'waifu');

    const handleReset = () => {
        setSelectedSource('all');
        setSearch('');
    };

    return (
        <ErrorBound>
            <div className='w-full'>
                <TierListToolbar
                    sourceOptions={sourceOptions}
                    selectedSource={selectedSource}
                    onSourceChange={setSelectedSource}
                    search={search}
                    onSearchChange={setSearch}
                    axis={axis}
                    onAxisChange={setAxis}
                    count={filteredCharacters.length}
                    onReset={handleReset}
                />

                <div className='overflow-hidden rounded-lg'>
                    <div
                        className={`flex tracking-wide bg-linear-to-r ${axis === 'both' ? 'from-primary to-secondary' : axis === 'favorite' ? 'from-primary-subtle to-primary' : ' from-secondary to-secondary-subtle'} overflow-hidden`}
                    >
                        {/* Axis Type */}
                        <div
                            className='py-2 text-center text-lg sm:text-2xl lg:text-4xl font-extrabold tracking-wide text-primary-foreground transition-all duration-300 ease-in-out shrink-0 overflow-hidden'
                            style={{
                                width:
                                    axis === 'waifu' ? '0%' : axis === 'favorite' ? '100%' : '50%',
                            }}
                        >
                            Favorite
                        </div>
                        <div
                            className='py-2 text-center text-lg sm:text-2xl lg:text-4xl font-extrabold tracking-wide text-secondary-foreground transition-all duration-300 ease-in-out shrink-0 overflow-hidden'
                            style={{
                                width:
                                    axis === 'favorite' ? '0%' : axis === 'waifu' ? '100%' : '50%',
                            }}
                        >
                            Waifu
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        {filteredCharacters.length === 0 ? (
                            <div className='flex items-center justify-center py-12 text-surface-muted text-sm bg-surface-overlay'>
                                {t('favorites.toolbar.noResult')}
                            </div>
                        ) : (
                            characterTiers.map((tier) => (
                                <TierRow
                                    key={tier}
                                    tier={tier}
                                    axis={axis}
                                    waifuCharacters={waifuGroups[tier]}
                                    favoriteCharacters={favoriteGroups[tier]}
                                />
                            ))
                        )}
                    </div>
                </div>
                {viewMoreTo && <ShowMoreButton to={viewMoreTo} />}
            </div>
        </ErrorBound>
    );
}
