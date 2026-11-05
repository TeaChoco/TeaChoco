// -Path: "TeaChoco-Portfolio/client/src/pages/favorites/content/Datas.tsx"
import { motion } from 'framer-motion';
import { useQuery } from '~/hooks/useQuery';
import type { SortMode } from '~/types/types';
import { useTranslation } from 'react-i18next';
import { FaClapperboard } from 'react-icons/fa6';
import { useEffect, useMemo, useState } from 'react';
import FavoriteTitle from '../components/FavoriteTitle';
import ShowMoreButton from '../components/ShowMoreButton';
import FadeOverflow from '~/components/layout/FadeOverflow';
import FavoriteSection from '../components/FavoriteSection';
import { useFavoriteStore } from '~/stores/favorites.store';
import type { DataItem, FavoriteType } from '~/types/favorites';

const GAP = 24;
const ROW_HEIGHT = 224;

interface FavoriteListProps<
    Item extends DataItem,
    Render extends (items: Item[], size: number) => React.ReactNode = (
        items: Item[],
        size: number,
    ) => React.ReactNode,
> {
    id: FavoriteType;
    rows?: number;
    datas: Item[];
    renderGrid: Render;
    renderList: Render;
    viewMoreTo?: string;
    getKey?: (item: Item) => string;
    getFilter?: (item: Item, q: string) => boolean;
}

export default function FavoriteList<Item extends DataItem>({
    id,
    rows,
    datas,
    getKey,
    getFilter,
    viewMoreTo,
    renderGrid,
    renderList,
}: FavoriteListProps<Item>) {
    const isPreview = rows != null;
    const { t } = useTranslation();
    const [search, setSearch] = useQuery('search');
    const [query, setQuery] = useState(search);
    const showMore = isPreview && datas.length > rows!;
    const { setSize, setSort, setViewMode } = useFavoriteStore();
    const { size, sort, viewMode } = useFavoriteStore((state) => state[id]!);

    useEffect(() => {
        setSearch(query);
    }, [query]);

    const sortOptions: { value: SortMode; label: string }[] = [
        { value: 'upload-new', label: t('favorites.sortUploadNew') },
        { value: 'upload-old', label: t('favorites.sortUploadOld') },
        { value: 'rating-desc', label: t('favorites.sortRatingDesc') },
        { value: 'rating-asc', label: t('favorites.sortRatingAsc') },
        { value: 'title-az', label: t('favorites.sortTitleAz') },
        { value: 'title-za', label: t('favorites.sortTitleZa') },
    ];

    const items = useMemo(() => {
        const q = query.trim().toLowerCase();
        const collator = new Intl.Collator(undefined, { sensitivity: 'base' });

        const filtered = datas.filter((item) => {
            if (!q) return true;
            return getFilter
                ? getFilter(item, q)
                : Object.values(item.names).some((name) => name.toLowerCase().includes(q));
        });

        const key = getKey ?? ((item: Item) => Object.values(item.names)[0] ?? '');

        switch (sort) {
            case 'title-az':
                return [...filtered].sort((a, b) => collator.compare(key(a), key(b)));
            case 'title-za':
                return [...filtered].sort((a, b) => collator.compare(key(b), key(a)));
            case 'rating-desc':
                return [...filtered].sort(
                    (a, b) => (b.rating ?? -Infinity) - (a.rating ?? -Infinity),
                );
            case 'rating-asc':
                return [...filtered].sort(
                    (a, b) => (a.rating ?? Infinity) - (b.rating ?? Infinity),
                );
            case 'upload-new':
                return filtered;
            case 'upload-old':
                return filtered.reverse();
        }
    }, [query, sort, datas, getFilter, getKey]);

    return (
        <motion.div
            className='mb-16'
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
        >
            <FavoriteTitle<SortMode>
                favoriteSection={
                    <FavoriteSection
                        icon={FaClapperboard}
                        count={datas.length}
                        title={t('favorites.anime')}
                    />
                }
                size={size}
                sort={sort}
                query={query}
                setQuery={setQuery}
                viewMode={viewMode}
                setSize={setSize(id)}
                setSort={setSort(id)}
                viewMoreTo={viewMoreTo}
                sortOptions={sortOptions}
                setViewMode={setViewMode(id)}
            />

            {items.length === 0 ? (
                <div className='text-center py-12'>
                    <p className='text-text-muted-light dark:text-text-muted-dark'>
                        {t('favorites.empty')}
                    </p>
                </div>
            ) : (
                <FadeOverflow
                    active={isPreview}
                    maxHeight={rows! * ROW_HEIGHT + (rows! - 1) * GAP}
                    className='pt-4'
                >
                    {(viewMode === 'grid' ? renderGrid : renderList)(items, size)}
                </FadeOverflow>
            )}

            {showMore && viewMoreTo && <ShowMoreButton to={viewMoreTo} />}
        </motion.div>
    );
}
