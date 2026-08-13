// -Path: 'Vite-React-Router-TypeScript/app/routes/page/favorites-character.tsx'
import CharacterPage from '~/pages/favorites/category/CharacterPage';
import type { Route } from './+types/favorites-character';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'React Router App - Favorites Character' },
        { name: 'description', content: 'Favorite characters' },
    ];
}

export default function FavoritesCharacter() {
    return <CharacterPage />;
}