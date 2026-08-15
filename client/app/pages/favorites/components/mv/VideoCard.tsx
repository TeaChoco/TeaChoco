import StarRating from '../StarRating';
import { useEffect, useState } from 'react';
import type { MvItem } from '~/types/favorites';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { FaYoutube } from 'react-icons/fa6';
import Skeleton from '~/components/custom/Skeleton';

type VideoMetaData = { title: string; authorName: string; authorUrl: string };

export default function VideoCard({ item }: { item: MvItem }) {
    const [meta, setMeta] = useState<VideoMetaData | undefined>(undefined);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        let cancelled = false;

        async function fetchVideoMetadata(videoId: string) {
            const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(`Failed to fetch metadata for video ${videoId}`);
                const data = await response.json();
                if (cancelled) return;
                setMeta({
                    title: data.title,
                    authorName: data.author_name,
                    authorUrl: data.author_url,
                });
            } catch {
                if (!cancelled) setFailed(true);
            }
        }

        fetchVideoMetadata(item.videoId);
        return () => {
            cancelled = true;
        };
    }, [item]);

    const loading = !meta && !failed;
    const title = meta?.title ?? 'Video';

    return (
        <article className='flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-overlay/50 transition-all duration-200 hover:-translate-y-1 hover:border-primary-emphasis hover:bg-surface-overlay hover:shadow-lg hover:shadow-primary-emphasis/30'>
            <div className='relative aspect-video w-full overflow-hidden bg-black'>
                {loading ? (
                    <Skeleton className='absolute inset-0 rounded-none' />
                ) : (
                    <LiteYouTubeEmbed
                        webp
                        lazyLoad
                        id={item.videoId}
                        title={title}
                        poster='hqdefault'
                    />
                )}
            </div>

            <div className='flex flex-col gap-3 p-5'>
                <div className='min-w-0'>
                    <h3 className='font-semibold leading-tight line-clamp-2'>{title}</h3>
                    {meta?.authorName && (
                        <a
                            href={meta.authorUrl}
                            target='_blank'
                            rel='noreferrer noopener'
                            className='mt-1.5 inline-flex items-center gap-1.5 text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors'
                        >
                            <FaYoutube className='text-red-500' aria-hidden='true' />
                            <span className='truncate'>{meta.authorName}</span>
                        </a>
                    )}
                </div>
                <StarRating rating={item.rating} />
            </div>
        </article>
    );
}
