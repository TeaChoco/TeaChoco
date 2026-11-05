// -Path: "TeaChoco-Portfolio/client/src/pages/favorites/content/MvList.tsx"
import { useEffect, useMemo } from 'react';
import { mvList } from '~/data/favorites/mv';
import { useSearchParams } from 'react-router';
import VideoCard from '../components/card/VideoCard';
import FavoriteList from '../components/FavoriteList';
import { useMvListStore } from '~/stores/mvList.store';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

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

const SIZE_CONTENT = ['p-6', 'p-5', 'p-5', 'p-4', 'p-4', 'p-3', 'p-3', 'p-2.5', 'p-2', 'p-2'];

const LIST_THUMB = [
    'sm:w-32',
    'sm:w-40',
    'sm:w-48',
    'sm:w-56',
    'sm:w-64',
    'sm:w-72',
    'sm:w-80',
    'sm:w-88',
    'sm:w-96',
    'sm:w-104',
];

type MvListProps = {
    rows?: number;
    viewMoreTo?: string;
};

export default function MvList({ rows, viewMoreTo }: MvListProps) {
    // const isPreview = rows != nullconst [searchParams, setSearchParams] = useSearchParams();;
    const [searchParams] = useSearchParams();
    const { music, fetchAllMusic } = useMvListStore();

    const search = useMemo(() => searchParams.get('search') || '', [searchParams]);

    useEffect(() => {
        if (!search.trim()) return;
        fetchAllMusic(mvList.map((v) => v.videoId));
    }, [search, fetchAllMusic]);

    const metaMap = useMemo(() => {
        const map = new Map<string, { title: string; authorName: string }>();
        music?.forEach((m) => map.set(m.videoId, { title: m.title, authorName: m.authorName }));
        return map;
    }, [music]);

    return (
        <FavoriteList
            id='mv'
            rows={rows}
            datas={mvList}
            getKey={(item) => metaMap.get(item.videoId)?.title ?? ''}
            getFilter={(item, q) => {
                const meta = metaMap.get(item.videoId);
                return (
                    (meta?.title ?? '').toLowerCase().includes(q) ||
                    (meta?.authorName ?? '').toLowerCase().includes(q)
                );
            }}
            viewMoreTo={viewMoreTo}
            renderGrid={(items, size) => (
                <div className={`grid gap-1 ${SIZE_COLS[size]}`}>
                    {items.map((item, index) => (
                        <VideoCard
                            key={`${item.videoId}-${index}`}
                            item={item}
                            layout='grid'
                            textClass={SIZE_TEXT[size]}
                            ratingClass={SIZE_RATING[size]}
                            contentClass={SIZE_CONTENT[size]}
                        />
                    ))}
                </div>
            )}
            renderList={(items, size) => (
                <div className={`flex flex-col gap-1`}>
                    {items.map((item, index) => (
                        <VideoCard
                            key={`${item.videoId}-${index}`}
                            item={item}
                            layout='list'
                            textClass={SIZE_TEXT[size]}
                            ratingClass={SIZE_RATING[size]}
                            contentClass={SIZE_CONTENT[size]}
                            thumbnailClass={LIST_THUMB[size]}
                        />
                    ))}
                </div>
            )}
        />
    );
}
