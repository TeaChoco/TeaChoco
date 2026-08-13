// -Path: 'Vite-React-Router-TypeScript/app/routes/page/favorites-mv.tsx'
import MvPage from '~/pages/favorites/category/MvPage';
import type { Route } from './+types/favorites-mv';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'React Router App - Favorites MV' },
        { name: 'description', content: 'Favorite music videos' },
    ];
}

export default function FavoritesMv() {
    return <MvPage />;
}