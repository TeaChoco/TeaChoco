import { useEffect, useMemo, useState } from 'react';

/**
 * Cycles through an image list, picking a new random image on every interval tick.
 * Falls back to the first image (or null) when there are zero or one images.
 * Returns the current `index` together with `image` so callers can crossfade.
 */
export function useRandomImage(images: string[], intervalMs = 4000): { image: string | null; index: number } {
    const [index, setIndex] = useState(0);

    const pool = useMemo(() => images.filter(Boolean), [images]);

    useEffect(() => {
        setIndex(0);
    }, [images]);

    useEffect(() => {
        if (pool.length <= 1) return;
        const id = window.setInterval(() => {
            setIndex((current) => {
                let next = current;
                while (next === current) {
                    next = Math.floor(Math.random() * pool.length);
                }
                return next;
            });
        }, intervalMs);
        return () => window.clearInterval(id);
    }, [pool, intervalMs]);

    const image = pool.length > 0 ? pool[index] : null;
    return { image, index };
}
