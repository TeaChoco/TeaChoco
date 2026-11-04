// -Path: "TeaChoco-Portfolio/client/src/pages/favorites/content/AnimeList.tsx"
import { animeList } from '~/data/favorites/anime';
import AnimeCard from '../components/card/AnimeCard';
import FavoriteList from '../components/FavoriteList';

const SIZE_COLS = [
    'grid-cols-1',
    'grid-cols-1 sm:grid-cols-2',
    'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    'grid-cols-1 sm:grid-cols-3 lg:grid-cols-4',
    'grid-cols-1 sm:grid-cols-3 lg:grid-cols-5',
];

const SIZE_THUMB = ['sm:w-20', 'sm:w-24', 'sm:w-32', 'sm:w-40', 'sm:w-48'];

interface AnimeListProps {
    rows?: number;
    viewMoreTo?: string;
    initialItemId?: string;
}

export default function AnimeList({ rows, viewMoreTo, initialItemId }: AnimeListProps) {
    const isPreview = rows != null;

    return (
        <FavoriteList
            id='anime'
            rows={rows}
            datas={animeList}
            viewMoreTo={viewMoreTo}
            renderGrid={(items, size) => (
                <div className={`grid gap-6 ${SIZE_COLS[size]}`}>
                    {items.map((item) => (
                        <AnimeCard
                            key={item.id}
                            item={item}
                            layout='grid'
                            interactive={!isPreview}
                            forceOpen={initialItemId === item.id}
                            href={
                                isPreview && viewMoreTo
                                    ? `${viewMoreTo}?item=${item.id}`
                                    : undefined
                            }
                        />
                    ))}
                </div>
            )}
            renderList={(items) => (
                <div className='flex flex-col gap-3'>
                    {items.map((item, size) => (
                        <AnimeCard
                            key={item.id}
                            item={item}
                            layout='list'
                            thumbnailClass={SIZE_THUMB[size]}
                            interactive={!isPreview}
                            forceOpen={initialItemId === item.id}
                            href={
                                isPreview && viewMoreTo
                                    ? `${viewMoreTo}?item=${item.id}`
                                    : undefined
                            }
                        />
                    ))}
                </div>
            )}
        />
    );
}
