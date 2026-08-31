import MediaCard from './MediaCard';
import type { AnimeItem } from '~/types/favorites';

interface AnimeCardProps {
    item: AnimeItem;
    layout?: 'grid' | 'list';
    thumbnailClass?: string;
    interactive?: boolean;
    href?: string;
    forceOpen?: boolean;
}

export default function AnimeCard(props: AnimeCardProps) {
    return <MediaCard {...props} ratingType='heart' nameWeight='font-medium' />;
}
