// -Path: 'Vite-React-Router-TypeScript/app/routes/page/favorites-anime.tsx'
import AnimePage from '~/pages/favorites/category/AnimePage';
import type { Route } from './+types/favorites-anime';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'React Router App - Favorites Anime' },
        { name: 'description', content: 'Favoite anime list' },
    ];
}

export default function FavoritesAnime() {
    return <AnimePage />;
}