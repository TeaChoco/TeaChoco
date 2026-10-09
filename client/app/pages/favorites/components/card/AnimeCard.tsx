import MediaCard from './MediaCard';
import type { AnimeItem } from '~/types/favorites';

interface AnimeCardProps {
    href?: string;
    item: AnimeItem;
    layout?: 'grid' | 'list';
    forceOpen?: boolean;
    interactive?: boolean;
    thumbnailClass?: string;
}

export default function AnimeCard(props: AnimeCardProps) {
    return <MediaCard {...props} type='anime' ratingType='heart' nameWeight='font-medium' />;
}
