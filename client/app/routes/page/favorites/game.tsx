// -Path: 'Vite-React-Router-TypeScript/app/routes/page/favorites-game.tsx'
import type { Route } from './+types/game';
import GamePage from '~/pages/favorites/category/GamePage';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'React Router App - Favorites Game' },
        { name: 'description', content: 'Favorite game list' },
    ];
}

export default function FavoritesGame() {
    return <GamePage />;
}