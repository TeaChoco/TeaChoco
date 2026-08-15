// -Path: 'Vite-React-Router-TypeScript/app/routes/page/favorites-anime.tsx'
import type { Route } from './+types/anime';
import AnimePage from '~/pages/favorites/category/AnimePage';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'React Router App - Favorites Anime' },
        { name: 'description', content: 'Favoite anime list' },
    ];
}

export default function FavoritesAnime() {
    return <AnimePage />;
}