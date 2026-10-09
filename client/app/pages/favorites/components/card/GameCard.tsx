import MediaCard from './MediaCard';
import type { GameItem } from '~/types/favorites';
import { gameTypeLabels } from '~/data/favorites/game';

interface GameCardProps {
    href?: string;
    item: GameItem;
    layout?: 'grid' | 'list';
    forceOpen?: boolean;
    interactive?: boolean;
    thumbnailClass?: string;
}

export default function GameCard(props: GameCardProps) {
    return (
        <MediaCard
            {...props}
            type='game'
            ratingType='star'
            nameWeight='font-semibold'
            getTypeLabel={(t) => gameTypeLabels[t as keyof typeof gameTypeLabels]}
        />
    );
}
