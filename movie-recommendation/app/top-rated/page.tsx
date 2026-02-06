// app/top-rated/page.tsx
'use client';

import { useState } from 'react';
import { movies } from '@/lib/data';
import { Star, TrendingUp } from 'lucide-react';

export default function TopRatedPage() {
  const topRated = [...movies]
    .filter(movie => movie.topRated)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
        <h1 className="text-3xl font-bold">Top Rated Movies</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top 4 Featured */}
        <div className="space-y-6">
          {topRated.slice(0, 4).map((movie, index) => (
            <div
              key={movie.id}
              className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-red-600 to-yellow-500 rounded-lg font-bold text-xl">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold truncate">{movie.title}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold">{movie.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{movie.year}</span>
                  <span>•</span>
                  <span>{movie.duration}</span>
                  <span>•</span>
                  <span>{movie.genre.join(', ')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Rankings 5-8 */}
        <div className="space-y-6">
          {topRated.slice(4, 8).map((movie, index) => (
            <div
              key={movie.id}
              className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg font-bold text-xl">
                {index + 5}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold truncate">{movie.title}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold">{movie.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{movie.year}</span>
                  <span>•</span>
                  <span>{movie.duration}</span>
                  <span>•</span>
                  <div className="flex gap-2">
                    {movie.genre.slice(0, 2).map((genre) => (
                      <span key={genre} className="px-2 py-1 bg-gray-700 rounded text-xs">
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="mt-12 p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-6 h-6 text-green-400" />
          <h2 className="text-xl font-bold">Rating Statistics</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">
              {topRated[0]?.rating || '9.5'}
            </div>
            <p className="text-gray-400">Highest Rated</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">
              {topRated.length}
            </div>
            <p className="text-gray-400">Top Rated Movies</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">
              {Math.max(...topRated.map(m => m.year))}
            </div>
            <p className="text-gray-400">Latest Release</p>
          </div>
        </div>
      </div>
    </div>
  );
}