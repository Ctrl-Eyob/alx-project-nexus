import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Movie } from './api';

interface MovieStore {
  favorites: Movie[];
  history: Movie[];
  theme: 'light' | 'dark';
  ratings: Record<number, number>;
  
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
  toggleFavorite: (movie: Movie) => void;
  addToHistory: (movie: Movie) => void;
  clearHistory: () => void;
  toggleTheme: () => void;
  setRating: (movieId: number, rating: number) => void;
  isFavorite: (id: number) => boolean;
  getRating: (movieId: number) => number;
}

export const useMovieStore = create<MovieStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      history: [],
      theme: 'dark',
      ratings: {},

      addFavorite: (movie) =>
        set((state) => ({
          favorites: [...state.favorites, movie],
        })),

      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((m) => m.id !== id),
        })),

      toggleFavorite: (movie) =>
        set((state) => {
          const exists = state.favorites.some((m) => m.id === movie.id);
          if (exists) {
            return { favorites: state.favorites.filter((m) => m.id !== movie.id) };
          } else {
            return { favorites: [...state.favorites, movie] };
          }
        }),

      addToHistory: (movie) =>
        set((state) => {
          const filtered = state.history.filter((m) => m.id !== movie.id);
          return { history: [movie, ...filtered].slice(0, 50) };
        }),

      clearHistory: () => set({ history: [] }),

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),

      setRating: (movieId, rating) =>
        set((state) => ({
          ratings: { ...state.ratings, [movieId]: rating },
        })),

      isFavorite: (id) => get().favorites.some((m) => m.id === id),
      getRating: (movieId) => get().ratings[movieId] || 0,
    }),
    {
      name: 'movie-storage',
    }
  )
);