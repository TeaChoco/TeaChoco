// -Path: "TeaChoco-Portfolio/client/src/pages/favorites/content/MvList.tsx"
import { useEffect, useMemo, useState } from 'react';
import { mvList } from '~/data/favorites/mv';
import VideoCard from '../components/card/VideoCard';
import FavoriteList from '../components/FavoriteList';
import { useMvListStore } from '~/stores/mvList.store';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { useSearchParams } from 'react-router';

const SIZE_COLS = [
    'grid-cols-1 sm:grid-cols-1 md:grid-cols-1',
    'grid-cols-1 sm:grid-cols-1 md:grid-cols-2',
    'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    'grid-cols-1 sm:grid-cols-3 md:grid-cols-4',
    'grid-cols-1 sm:grid-cols-3 md:grid-cols-5',
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

    const LIST_THUMB = ['sm:w-32', 'sm:w-40', 'sm:w-56', 'sm:w-80', 'sm:w-96'];

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
                <div className={`grid gap-8 ${SIZE_COLS[size]}`}>
                    {items.map((item, index) => (
                        <VideoCard key={`${item.videoId}-${index}`} item={item} layout='grid' />
                    ))}
                </div>
            )}
            renderList={(items, size) => (
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
            )}
        />
    );
}
