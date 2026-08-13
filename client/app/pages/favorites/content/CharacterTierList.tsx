import { useMemo, useState } from 'react';
import { useTierGroups } from '~/hooks/useTierGroups';
import ErrorBound from '~/components/custom/ErrorBound';
import { TierRow } from '../components/character/TierRow';
import { characters, characterTiers } from '~/data/favorites';
import { TierListToolbar } from '../components/character/TierListToolbar';

/**
 * Dual-axis tier list board.
 * Renders a "Favorite" tier list on the left and a "Waifu" tier list on the
 * right, sharing the same SSSS..F tier scale in the middle column — matching
 * the reference board layout.
 */
export default function CharacterTierList() {
    const [selectedSource, setSelectedSource] = useState('all');
    const [showName, setShowName] = useState(false);

    const sourceOptions = useMemo(() => {
        const sources = new Set<string>();
        characters.forEach((character) => {
            if (character.from.anime) sources.add(character.from.anime);
            if (character.from.game) sources.add(character.from.game);
        });
        return [
            { label: 'ทั้งหมด', value: 'all' },
            ...Array.from(sources).map((source) => ({ label: source, value: source })),
        ];
    }, [characters]);

    const filteredCharacters = useMemo(() => {
        if (selectedSource === 'all') return characters;
        return characters.filter(
            (character) =>
                character.from.anime === selectedSource || character.from.game === selectedSource,
        );
    }, [characters, selectedSource]);

    const favoriteGroups = useTierGroups(filteredCharacters, 'favorite');
    const waifuGroups = useTierGroups(filteredCharacters, 'waifu');

    return (
        <ErrorBound>
            <div className='w-full overflow-x-auto'>
                <TierListToolbar
                    sourceOptions={sourceOptions}
                    selectedSource={selectedSource}
                    onSourceChange={setSelectedSource}
                    showName={showName}
                    onShowNameChange={setShowName}
                    onReset={() => setSelectedSource('all')}
                />

                <div className='overflow-hidden rounded-lg'>
                    <div className='flex min-w-4xl'>
                        <div className='flex-1 bg-primary py-2 text-center text-4xl font-extrabold tracking-wide text-primary-foreground'>
                            Favorite
                        </div>
                        <div className='flex-1 bg-secondary py-2 text-center text-4xl font-extrabold tracking-wide text-secondary-foreground'>
                            Waifu
                        </div>
                    </div>

                    <div className='flex min-w-3xl flex-col'>
                        {characterTiers.map((tier) => (
                            <TierRow
                                key={tier}
                                tier={tier}
                                favoriteCharacters={favoriteGroups[tier]}
                                waifuCharacters={waifuGroups[tier]}
                                showName={showName}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </ErrorBound>
    );
}
