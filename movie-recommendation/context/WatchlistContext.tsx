'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Movie } from '@/types/movie';

interface WatchlistContextType {
  watchlist: Movie[];
  addToWatchlist: (movie: Movie) => void;
  removeFromWatchlist: (movieId: string) => void;
  isInWatchlist: (movieId: string) => boolean;
  clearWatchlist: () => void;
}

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

export function useWatchlist() {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
}

export function WatchlistProvider({ children }: { children: React.ReactNode }) {
  const [watchlist, setWatchlist] = useState<Movie[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('movie-watchlist');
      if (saved) {
        setWatchlist(JSON.parse(saved));
      }
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized && typeof window !== 'undefined') {
      localStorage.setItem('movie-watchlist', JSON.stringify(watchlist));
    }
  }, [watchlist, isInitialized]);

  const addToWatchlist = (movie: Movie) => {
    setWatchlist((prev) => {
      if (!prev.some((m) => m.id === movie.id)) {
        return [...prev, movie];
      }
      return prev;
    });
  };

  const removeFromWatchlist = (movieId: string) => {
    setWatchlist((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isInWatchlist = (movieId: string) => {
    return watchlist.some((movie) => movie.id === movieId);
  };

  const clearWatchlist = () => {
    setWatchlist([]);
  };

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
        isInWatchlist,
        clearWatchlist,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}