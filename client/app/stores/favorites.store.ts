// -Path: "vite-extra-react-ssr-ts/src/stores/favorites.store.ts"
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { FavoriteType } from '~/types/favorites';
import type { SortMode, ViewMode } from '~/types/types';

interface FavoriteState {
    size: number;
    sort: SortMode;
    viewMode: ViewMode;
}

type FavoriteStates = {
    [Id in FavoriteType]?: FavoriteState;
};

interface FavoritesState extends FavoriteStates {
    _hydrated: boolean;
    setSize: (id: FavoriteType) => (size: number) => void;
    setSort: (id: FavoriteType) => (sort: SortMode) => void;
    setViewMode: (id: FavoriteType) => (viewMode: ViewMode) => void;
}

export const useFavoriteStore = create<FavoritesState>()(
    persist(
        (set) => ({
            _hydrated: false,
            setSize: (id) => (size) => set((state) => ({ [id]: { ...state[id], size } })),
            setSort: (id) => (sort) => set((state) => ({ [id]: { ...state[id], sort } })),
            setViewMode: (id) => (viewMode) =>
                set((state) => ({ [id]: { ...state[id], viewMode } })),
            ...(['anime', 'game', 'mv'] as FavoriteType[]).reduce(
                (acc, key) => ({
                    ...acc,
                    [key]: {
                        size: 2,
                        sort: 'rating-desc',
                        viewMode: 'grid',
                    } as FavoriteState,
                }),
                {} as FavoriteStates,
            ),
        }),
        {
            name: 'favorite',
            onRehydrateStorage: () => (state) => {
                if (state) state._hydrated = true;
            },
        },
    ),
);
