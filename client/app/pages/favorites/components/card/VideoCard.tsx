import { useEffect, useMemo, useRef, useState } from 'react';
import { FaYoutube, FaShare, FaLink, FaCheck } from 'react-icons/fa6';
import type { MvItem } from '~/types/favorites';
import Rating from '~/components/custom/Rating';
import Skeleton from '~/components/custom/Skeleton';
import { useMvListStore } from '~/stores/mvList.store';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

export default function VideoCard({
    item,
    layout = 'grid',
    thumbnailClass,
}: {
    item: MvItem;
    layout?: 'grid' | 'list';
    thumbnailClass?: string;
}) {
    const { music, error, addMusic, fetchMusic } = useMvListStore();
    const meta = useMemo(() => music?.find((mv) => mv.videoId === item.videoId), [music]);

    const cardRef = useRef<HTMLElement | null>(null);
    const [inView, setInView] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const el = cardRef.current;
        if (!el || !inView) return;

        const id = item.videoId;
        if (music?.some((m) => m.videoId === id)) return;

        fetchMusic(id).then((result) => {
            if (result) addMusic(result);
        });
    }, [inView]);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: '200px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const loading = !meta && !error;
    const title = meta?.title ?? 'Video';

    const isList = layout === 'list';

    const videoUrl = `https://www.youtube.com/watch?v=${item.videoId}`;

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(videoUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // clipboard unavailable
        }
    };

    const share = async () => {
        if (navigator.share) {
            try {
                await navigator.share({ title, url: videoUrl });
            } catch {
                // user cancelled
            }
        } else {
            await copyLink();
        }
    };

    const actionBtn =
        'inline-flex h-8 w-8 items-center justify-center rounded-md text-text-secondary-light dark:text-text-secondary-dark hover:text-primary hover:bg-surface-overlay transition-colors';

    return (
        <article
            ref={cardRef}
            className={`overflow-hidden rounded-2xl border border-border bg-surface-overlay/50 transition-all duration-200 hover:border-primary-emphasis hover:bg-surface-overlay hover:shadow-lg hover:shadow-primary-emphasis/30 ${
                isList
                    ? 'flex flex-col sm:flex-row items-stretch hover:-translate-y-0.5'
                    : 'flex flex-col hover:-translate-y-1'
            }`}
        >
            <div
                className={`relative overflow-hidden bg-black flex justify-center ${
                    isList
                        ? `aspect-video w-full sm:aspect-auto sm:shrink-0 ${thumbnailClass ?? 'sm:w-56'}`
                        : 'aspect-video w-full'
                }`}
            >
                {loading ? (
                    <Skeleton className='absolute inset-0 rounded-none' />
                ) : (
                    <LiteYouTubeEmbed
                        webp
                        lazyLoad
                        id={item.videoId}
                        title={title}
                        poster='hqdefault'
                        style={{ width: '100%' }}
                        params={{ cc_load_policy: 1 }}
                    />
                )}
            </div>

            <div className='flex w-full min-w-0 flex-col gap-3 p-5'>
                <div className='min-w-0'>
                    {loading ? (
                        <Skeleton className='h-5 w-full rounded-md' />
                    ) : (
                        <a
                            href={videoUrl}
                            target='_blank'
                            rel='noreferrer noopener'
                            className='block hover:text-primary transition-colors'
                        >
                            <h3 className='font-semibold leading-tight line-clamp-2'>{title}</h3>
                        </a>
                    )}
                    <div className='mt-1.5 flex items-center justify-between gap-2'>
                        {meta?.authorName && (
                            <a
                                href={meta.authorUrl}
                                target='_blank'
                                rel='noreferrer noopener'
                                className='inline-flex min-w-0 items-center gap-1.5 text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors'
                            >
                                <FaYoutube className='shrink-0 text-red-500' aria-hidden='true' />
                                <span className='truncate'>{meta.authorName}</span>
                            </a>
                        )}
                        <div className='ml-auto flex items-center gap-1'>
                            <button type='button' onClick={share} title='Share' className={actionBtn}>
                                <FaShare aria-hidden='true' />
                            </button>
                            <button type='button' onClick={copyLink} title='Copy link' className={actionBtn}>
                                {copied ? (
                                    <FaCheck className='text-green-500' aria-hidden='true' />
                                ) : (
                                    <FaLink aria-hidden='true' />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <Rating type='heart' rating={item.rating} />
            </div>
        </article>
    );
}
