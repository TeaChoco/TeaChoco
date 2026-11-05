import type { MvItem } from '~/types/favorites';
import Rating from '~/components/custom/Rating';
import Skeleton from '~/components/custom/Skeleton';
import { useMvListStore } from '~/stores/mvList.store';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FaYoutube, FaShare, FaLink, FaCheck } from 'react-icons/fa6';

export default function VideoCard({
    item,
    layout = 'grid',
    textClass,
    ratingClass,
    contentClass = 'p-5 gap-3',
    thumbnailClass,
}: {
    item: MvItem;
    layout?: 'grid' | 'list';
    textClass?: string;
    ratingClass?: string;
    contentClass?: string;
    thumbnailClass?: string;
}) {
    const [copied, setCopied] = useState(false);
    const [inView, setInView] = useState(false);
    const cardRef = useRef<HTMLElement | null>(null);
    const { music, error, addMusic, fetchMusic } = useMvListStore();
    const meta = useMemo(() => music?.find((mv) => mv.videoId === item.videoId), [music]);


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
            { rootMargin: '200px' },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const loading = !meta && !error;
    const isList = layout === 'list';
    const title = meta?.title ?? 'Video';
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
        'inline-flex h-8 w-8 items-center justify-center rounded-md text-surface-muted hover:text-primary hover:bg-surface-overlay transition-colors';

    return (
        <article
            ref={cardRef}
            className={`overflow-hidden rounded-lg border border-border bg-surface-overlay/50 transition-all duration-200 hover:border-primary-emphasis hover:bg-surface-overlay hover:shadow-lg hover:shadow-primary-emphasis/30 ${
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

            <div className={`@container flex w-full min-w-0 flex-col ${contentClass}`}>
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
                            <h3
                                className={`font-semibold leading-tight line-clamp-2 ${textClass ?? ''}`}
                            >
                                {title}
                            </h3>
                        </a>
                    )}
                    <div className='flex items-center justify-between gap-1'>
                        {!meta?.authorName || loading ? (
                            <Skeleton className='h-3 w-full rounded-md' />
                        ) : (
                            <a
                                href={meta.authorUrl}
                                target='_blank'
                                rel='noreferrer noopener'
                                className={`group inline-flex min-w-0 items-center gap-1.5 ${textClass ?? 'text-sm'} text-surface-subtle`}
                            >
                                <FaYoutube
                                    className='shrink-0 text-red-500 transition-colors group-hover:text-red-300'
                                    aria-hidden='true'
                                />
                                <span className='truncate transition-colors group-hover:text-primary'>
                                    {meta.authorName}
                                </span>
                            </a>
                        )}
                        <div className='ml-auto flex items-center gap-1'>
                            <button
                                type='button'
                                onClick={share}
                                title='Share'
                                className={actionBtn}
                            >
                                <FaShare aria-hidden='true' />
                            </button>
                            <button
                                type='button'
                                onClick={copyLink}
                                title='Copy link'
                                className={actionBtn}
                            >
                                {copied ? (
                                    <FaCheck className='text-green-500' aria-hidden='true' />
                                ) : (
                                    <FaLink aria-hidden='true' />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div className='hidden @[9rem]:block'>
                    <Rating type='heart' rating={item.rating} sizeClass={ratingClass} />
                </div>
                <div className='@[9rem]:hidden'>
                    <Rating compact type='heart' rating={item.rating} sizeClass={ratingClass} />
                </div>
            </div>
        </article>
    );
}
