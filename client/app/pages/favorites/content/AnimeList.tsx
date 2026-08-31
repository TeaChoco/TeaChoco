// -Path: "TeaChoco-Portfolio/client/src/pages/favorites/content/AnimeList.tsx"
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaClapperboard } from 'react-icons/fa6';
import { animeList } from '~/data/favorites/anime';
import type { AnimeItem } from '~/types/favorites';
import type { SortMode, ViewMode } from '../types';
import ShowMoreButton from '../components/ShowMoreButton';
import FavoriteSection from '../components/FavoriteSection';
import FavoriteTitle from '../components/FavoriteTitle';
import AnimeCard from '../components/card/AnimeCard';
import FadeOverflow from '../../../components/layout/FadeOverflow';

const GAP = 24;
const ROW_HEIGHT = 224;

const SIZE_MAX_SM = 2; // sm: 3 steps 0..2
const SIZE_MAX_FULL = 4; // md+: 5 steps 0..4

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

export default function AnimeList({ rows, viewMoreTo, initialItemId }: Props) {
    const { t } = useTranslation();
    const [viewMode, setViewMode] = useState<ViewMode>('grid');
    const [size, setSize] = useState(2);
    const [maxSize, setMaxSize] = useState(SIZE_MAX_FULL);
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState<SortMode>('title-az');
    const isPreview = rows != null;
    const showMore = isPreview && animeList.length > rows!;

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            if (w < 640) setMaxSize(-1);
            else if (w < 768) setMaxSize(SIZE_MAX_SM);
            else setMaxSize(SIZE_MAX_FULL);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    useEffect(() => {
        if (maxSize >= 0 && size > maxSize) setSize(maxSize);
    }, [maxSize, size]);

    const sortOptions: { value: SortMode; label: string }[] = [
        { value: 'title-az', label: t('favorites.sortTitleAz', 'Title: A–Z') },
        { value: 'title-za', label: t('favorites.sortTitleZa', 'Title: Z–A') },
        { value: 'rating-desc', label: t('favorites.sortRatingDesc', 'Rating: high to low') },
        { value: 'rating-asc', label: t('favorites.sortRatingAsc', 'Rating: low to high') },
    ];

    const items = useMemo(() => {
        const q = query.trim().toLowerCase();
        const collator = new Intl.Collator(undefined, { sensitivity: 'base' });

        const filtered = animeList.filter((item) => {
            if (!q) return true;
            return Object.values(item.names).some((name) =>
                name.toLowerCase().includes(q)
            );
        });

        const key = (item: AnimeItem) => Object.values(item.names)[0] ?? '';

        switch (sort) {
            case 'title-az':
                return [...filtered].sort((a, b) => collator.compare(key(a), key(b)));
            case 'title-za':
                return [...filtered].sort((a, b) => collator.compare(key(b), key(a)));
            case 'rating-desc':
                return [...filtered].sort((a, b) => b.rating - a.rating);
            case 'rating-asc':
                return [...filtered].sort((a, b) => a.rating - b.rating);
        }
    }, [query, sort]);

    const grid = (
        <div className={`grid gap-6 ${SIZE_COLS[size]}`}>
            {items.map((item) => (
                <AnimeCard
                    key={item.id}
                    item={item}
                    layout='grid'
                    interactive={!isPreview}
                    href={isPreview && viewMoreTo ? `${viewMoreTo}?item=${item.id}` : undefined}
                    forceOpen={initialItemId === item.id}
                />
            ))}
        </div>
    );

    const list = (
        <div className='flex flex-col gap-3'>
            {items.map((item) => (
                <AnimeCard
                    key={item.id}
                    item={item}
                    layout='list'
                    thumbnailClass={SIZE_THUMB[size]}
                    interactive={!isPreview}
                    href={isPreview && viewMoreTo ? `${viewMoreTo}?item=${item.id}` : undefined}
                    forceOpen={initialItemId === item.id}
                />
            ))}
        </div>
    );

    return (
        <div className='mb-16'>
            <FavoriteTitle<SortMode>
                favoriteSection={
                    <FavoriteSection
                        icon={FaClapperboard}
                        count={animeList.length}
                        title={t('favorites.anime')}
                    />
                }
                viewMode={viewMode}
                setViewMode={setViewMode}
                size={size}
                maxSize={maxSize}
                setSize={setSize}
                query={query}
                setQuery={setQuery}
                sort={sort}
                setSort={setSort}
                sortOptions={sortOptions}
                viewMoreTo={viewMoreTo}
            />

            {items.length === 0 ? (
                <div className='text-center py-12'>
                    <p className='text-text-muted-light dark:text-text-muted-dark'>
                        {t('favorites.empty')}
                    </p>
                </div>
            ) : (
                <FadeOverflow active={isPreview} maxHeight={rows! * ROW_HEIGHT + (rows! - 1) * GAP} className='pt-4'>
                    {viewMode === 'grid' ? grid : list}
                </FadeOverflow>
            )}

            {showMore && viewMoreTo && <ShowMoreButton to={viewMoreTo} />}
        </div>
    );
}
