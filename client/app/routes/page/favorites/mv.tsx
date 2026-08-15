// -Path: 'Vite-React-Router-TypeScript/app/routes/page/favorites-mv.tsx'
import type { Route } from './+types/mv';
import MvPage from '~/pages/favorites/category/MvPage';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'React Router App - Favorites MV' },
        { name: 'description', content: 'Favorite music videos' },
    ];
}

export default function FavoritesMv() {
    return <MvPage />;
}