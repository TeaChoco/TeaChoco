import MediaCard from './MediaCard';
import { gameTypeLabels } from '~/data/favorites/game';
import type { GameItem } from '~/types/favorites';

interface GameCardProps {
    item: GameItem;
    layout?: 'grid' | 'list';
    thumbnailClass?: string;
    interactive?: boolean;
    href?: string;
    forceOpen?: boolean;
}

export default function GameCard(props: GameCardProps) {
    return (
        <MediaCard
            {...props}
            ratingType='star'
            nameWeight='font-semibold'
            getTypeLabel={(t) => gameTypeLabels[t as keyof typeof gameTypeLabels]}
        />
    );
}
