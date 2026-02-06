// app/watchlist/page.tsx
'use client';

import { useWatchlist } from '@/context/WatchlistContext';
import MovieGrid from '@/components/movies/MovieGrid';
import { Trash2, Film } from 'lucide-react';

export default function WatchlistPage() {
  const { watchlist, clearWatchlist } = useWatchlist();

  if (watchlist.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <Film className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Your Watchlist is Empty</h2>
          <p className="text-gray-400 mb-6">Add movies you want to watch later</p>
          <a
            href="/"
            className="inline-block bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Browse Movies
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Watchlist</h1>
          <p className="text-gray-400 mt-2">{watchlist.length} movies to watch</p>
        </div>
        <button
          onClick={clearWatchlist}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          Clear All
        </button>
      </div>
      
      <MovieGrid movies={watchlist} />
    </div>
  );
}