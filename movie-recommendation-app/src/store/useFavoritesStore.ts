// src/store/useFavoritesStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFavoritesStore = create(
  persist(
    set => ({
      favorites: [] as number[],
      toggle: (id: number) =>
        set(state => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter(f => f !== id)
            : [...state.favorites, id],
        })),
    }),
    { name: 'favorites' }
  )
);
