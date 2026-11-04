// -Path: "TeaChoco-Portfolio/client/src/pages/favorites/content/GameList.tsx"
import { gameList } from '~/data/favorites/game';
import GameCard from '../components/card/GameCard';
import FavoriteList from '../components/FavoriteList';

const SIZE_COLS = [
    'grid-cols-1',
    'grid-cols-1 sm:grid-cols-2',
    'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    'grid-cols-1 sm:grid-cols-3 lg:grid-cols-4',
    'grid-cols-1 sm:grid-cols-3 lg:grid-cols-5',
];

const SIZE_THUMB = ['sm:w-20', 'sm:w-24', 'sm:w-32', 'sm:w-40', 'sm:w-48'];

type Props = {
    rows?: number;
    viewMoreTo?: string;
    initialItemId?: string;
};

export default function GameList({ rows, viewMoreTo, initialItemId }: Props) {
    const isPreview = rows != null;

    return (
        <FavoriteList
            id='game'
            rows={rows}
            datas={gameList}
            viewMoreTo={viewMoreTo}
            renderGrid={(items, size) => (
                <div className={`grid gap-6 ${SIZE_COLS[size]}`}>
                    {items.map((item) => (
                        <GameCard
                            key={item.id}
                            item={item}
                            layout='grid'
                            interactive={!isPreview}
                            href={
                                isPreview && viewMoreTo
                                    ? `${viewMoreTo}?item=${item.id}`
                                    : undefined
                            }
                            forceOpen={initialItemId === item.id}
                        />
                    ))}
                </div>
            )}
            renderList={(items, size) => (
                <div className='flex flex-col gap-3'>
                    {items.map((item) => (
                        <GameCard
                            key={item.id}
                            item={item}
                            layout='list'
                            thumbnailClass={SIZE_THUMB[size]}
                            interactive={!isPreview}
                            href={
                                isPreview && viewMoreTo
                                    ? `${viewMoreTo}?item=${item.id}`
                                    : undefined
                            }
                            forceOpen={initialItemId === item.id}
                        />
                    ))}
                </div>
            )}
        />
    );
}
