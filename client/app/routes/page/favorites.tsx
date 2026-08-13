// -Path: 'Vite-React-Router-TypeScript/app/routes/favorites.tsx'
import FavoritesPage from '~/pages/favorites/Favorites';
import type { Route } from './+types/favorites';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'React Router App - Favorites' },
        { name: 'description', content: 'Welcome to React Router!' },
    ];
}

export default function Favorites() {
    return <FavoritesPage />;
}
