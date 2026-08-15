// -Path: 'Vite-React-Router-TypeScript/app/routes/page/favorites-character.tsx'
import type { Route } from './+types/character';
import CharacterPage from '~/pages/favorites/category/CharacterPage';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'React Router App - Favorites Character' },
        { name: 'description', content: 'Favorite characters' },
    ];
}

export default function FavoritesCharacter() {
    return <CharacterPage />;
}