// -Path: "TeaChoco-Portfolio/client/src/pages/favorites/content/MvList.tsx"
import { FaMusic } from 'react-icons/fa6';
import { useEffect, useMemo, useState } from 'react';
import { mvList } from '~/data/favorites/mv';
import { useMvListStore } from '~/stores/mvList.store';
import { useTranslation } from 'react-i18next';
import VideoCard from '../components/card/VideoCard';
import ShowMoreButton from '../components/ShowMoreButton';
import FavoriteSection from '../components/FavoriteSection';
import FavoriteTitle from '../components/FavoriteTitle';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import FadeOverflow from '../../../components/layout/FadeOverflow';

const GAP = 32;
const ROW_HEIGHT = 400;

type ViewMode = 'grid' | 'list';
type SortMode =
    | 'upload-new'
    | 'upload-old'
    | 'title-az'
    | 'title-za'
    | 'rating-desc'
    | 'rating-asc';

const SIZE_MAX_SM = 2; // sm: 3 steps 0..2
const SIZE_MAX_FULL = 4; // md+: 5 steps 0..4

const SIZE_COLS = [
    'grid-cols-1 sm:grid-cols-1 md:grid-cols-1',
    'grid-cols-1 sm:grid-cols-1 md:grid-cols-2',
    'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    'grid-cols-1 sm:grid-cols-3 md:grid-cols-4',
    'grid-cols-1 sm:grid-cols-3 md:grid-cols-5',
];

type Props = {
    rows?: number;
    viewMoreTo?: string;
};

export default function MvList({ rows, viewMoreTo }: Props) {
    const { t } = useTranslation();
    const [viewMode, setViewMode] = useState<ViewMode>('grid');
    const [size, setSize] = useState(2); // index into SIZE_COLS
    const [maxSize, setMaxSize] = useState(SIZE_MAX_FULL);
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState<SortMode>('upload-new');
    const music = useMvListStore((s) => s.music);
    const fetchAllMusic = useMvListStore((s) => s.fetchAllMusic);
    const isPreview = rows != null;
    const showMore = isPreview && mvList.length > rows!;

    useEffect(() => {
        if (!query.trim()) return;
        fetchAllMusic(mvList.map((v) => v.videoId));
    }, [query, fetchAllMusic]);

    const metaMap = useMemo(() => {
        const map = new Map<string, { title: string; authorName: string }>();
        music?.forEach((m) => map.set(m.videoId, { title: m.title, authorName: m.authorName }));
        return map;
    }, [music]);

    const items = useMemo(() => {
        const q = query.trim().toLowerCase();

        let filtered = mvList.filter((item) => {
            if (!q) return true;
            const meta = metaMap.get(item.videoId);
            return (
                (meta?.title ?? '').toLowerCase().includes(q) ||
                (meta?.authorName ?? '').toLowerCase().includes(q)
            );
        });

        const collator = new Intl.Collator(undefined, { sensitivity: 'base' });

        switch (sort) {
            case 'title-az':
                filtered = [...filtered].sort((a, b) =>
                    collator.compare(
                        metaMap.get(a.videoId)?.title ?? '',
                        metaMap.get(b.videoId)?.title ?? '',
                    ),
                );
                break;
            case 'title-za':
                filtered = [...filtered].sort((a, b) =>
                    collator.compare(
                        metaMap.get(b.videoId)?.title ?? '',
                        metaMap.get(a.videoId)?.title ?? '',
                    ),
                );
                break;
            case 'rating-desc':
                filtered = [...filtered].sort((a, b) => b.rating - a.rating);
                break;
            case 'rating-asc':
                filtered = [...filtered].sort((a, b) => a.rating - b.rating);
                break;
            case 'upload-new':
            case 'upload-old':
                // no upload-date data available; keep original order
                break;
        }
        return filtered;
    }, [mvList, query, sort, metaMap]);

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            if (w < 640) {
                // xs: slider hidden
                setMaxSize(-1);
            } else if (w < 768) {
                // sm: 3 steps
                setMaxSize(SIZE_MAX_SM);
            } else {
                // md+: 5 steps
                setMaxSize(SIZE_MAX_FULL);
            }
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    // clamp size when the max shrinks
    useEffect(() => {
        if (maxSize >= 0 && size > maxSize) {
            setSize(maxSize);
        }
    }, [maxSize, size]);

    const LIST_THUMB = ['sm:w-32', 'sm:w-40', 'sm:w-56', 'sm:w-80', 'sm:w-96'];

    const grid = (
        <div className={`grid gap-8 ${SIZE_COLS[size]}`}>
            {items.map((item, index) => (
                <VideoCard key={`${item.videoId}-${index}`} item={item} layout='grid' />
            ))}
        </div>
    );

    const list = (
        <div className='flex flex-col gap-4'>
            {items.map((item, index) => (
                <VideoCard
                    key={`${item.videoId}-${index}`}
                    item={item}
                    layout='list'
                    thumbnailClass={LIST_THUMB[size]}
                />
            ))}
        </div>
    );

    const sortOptions: { value: SortMode; label: string }[] = [
        { value: 'upload-new', label: t('favorites.sortUploadNew', 'Upload: newest first') },
        { value: 'upload-old', label: t('favorites.sortUploadOld', 'Upload: oldest first') },
        { value: 'rating-desc', label: t('favorites.sortRatingDesc', 'Rating: high to low') },
        { value: 'rating-asc', label: t('favorites.sortRatingAsc', 'Rating: low to high') },
        { value: 'title-az', label: t('favorites.sortTitleAz', 'Title: A–Z') },
        { value: 'title-za', label: t('favorites.sortTitleZa', 'Title: Z–A') },
    ];

    return (
        <div className='mb-16'>
            <FavoriteTitle<SortMode>
                favoriteSection={
                    <FavoriteSection
                        icon={FaMusic}
                        title={t('favorites.mv')}
                        count={mvList.length}
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
                <FadeOverflow
                    className='pt-4'
                    active={isPreview}
                    maxHeight={rows! * ROW_HEIGHT + (rows! - 1) * GAP}
                >
                    {viewMode === 'grid' ? grid : list}
                </FadeOverflow>
            )}
            {showMore && viewMoreTo && <ShowMoreButton to={viewMoreTo} />}
        </div>
    );
}
