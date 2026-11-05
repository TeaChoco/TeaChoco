// -Path: "TeaChoco-Portfolio/client/src/pages/favorites/content/AnimeList.tsx"
import { animeList } from '~/data/favorites/anime';
import AnimeCard from '../components/card/AnimeCard';
import FavoriteList from '../components/FavoriteList';

const SIZE_COLS = [
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'grid-cols-5',
    'grid-cols-6',
    'grid-cols-7',
    'grid-cols-8',
    'grid-cols-9',
    'grid-cols-10',
];

const SIZE_GAP = [
    'gap-8',
    'gap-7',
    'gap-6',
    'gap-5',
    'gap-5',
    'gap-4',
    'gap-4',
    'gap-3',
    'gap-3',
    'gap-2',
];


const SIZE_THUMB = [
    'sm:w-20',
    'sm:w-24',
    'sm:w-28',
    'sm:w-32',
    'sm:w-40',
    'sm:w-44',
    'sm:w-48',
    'sm:w-52',
    'sm:w-56',
    'sm:w-60',
];

const SIZE_TEXT = [
    'text-lg',
    'text-base',
    'text-base',
    'text-sm',
    'text-sm',
    'text-sm',
    'text-xs',
    'text-xs',
    'text-xs',
    'text-xs',
];

const SIZE_CONTENT = [
    'p-6 gap-4',
    'p-5 gap-3',
    'p-5 gap-3',
    'p-4 gap-3',
    'p-4 gap-2.5',
    'p-3 gap-2.5',
    'p-3 gap-2',
    'p-2.5 gap-2',
    'p-2 gap-1.5',
    'p-2 gap-1.5',
];

const SIZE_RATING = [
    'text-lg',
    'text-base',
    'text-base',
    'text-sm',
    'text-sm',
    'text-sm',
    'text-xs',
    'text-xs',
    'text-[0.65rem]',
    'text-[0.6rem]',
];

const SIZE_CHIP = [
    'h-7 px-3 text-sm',
    'h-6 px-2.5 text-xs',
    'h-6 px-2.5 text-xs',
    'h-5 px-2 text-xs',
    'h-5 px-2 text-xs',
    'h-5 px-2 text-[0.7rem]',
    'h-4 px-1.5 text-[0.7rem]',
    'h-4 px-1.5 text-[0.65rem]',
    'h-4 px-1 text-[0.6rem]',
    'h-4 px-1 text-[0.55rem]',
];

const SIZE_CHIP_BOX = [
    'max-h-16 overflow-hidden',
    'max-h-14 overflow-hidden',
    'max-h-14 overflow-hidden',
    'max-h-12 overflow-hidden',
    'max-h-12 overflow-hidden',
    'max-h-12 overflow-hidden',
    'max-h-10 overflow-hidden',
    'max-h-10 overflow-hidden',
    'max-h-10 overflow-hidden',
    'max-h-10 overflow-hidden',
];

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
                <div className={`grid gap-1 ${SIZE_COLS[size]}`}>
                    {items.map((item) => (
                        <AnimeCard
                            key={item.id}
                            item={item}
                            layout='grid'
                            interactive={!isPreview}
                            forceOpen={initialItemId === item.id}
                            textClass={SIZE_TEXT[size]}
                            contentClass={SIZE_CONTENT[size]}
                            ratingClass={SIZE_RATING[size]}
                            chipClass={SIZE_CHIP[size]}
                            chipBoxClass={SIZE_CHIP_BOX[size]}
                            href={
                                isPreview && viewMoreTo
                                    ? `${viewMoreTo}?item=${item.id}`
                                    : undefined
                            }
                        />
                    ))}
                </div>
            )}
            renderList={(items, size) => (
                <div className={`flex flex-col gap-1`}>
                    {items.map((item) => (
                        <AnimeCard
                            key={item.id}
                            item={item}
                            layout='list'
                            thumbnailClass={SIZE_THUMB[size]}
                            interactive={!isPreview}
                            textClass={SIZE_TEXT[size]}
                            contentClass={SIZE_CONTENT[size]}
                            ratingClass={SIZE_RATING[size]}
                            chipClass={SIZE_CHIP[size]}
                            chipBoxClass={SIZE_CHIP_BOX[size]}
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
