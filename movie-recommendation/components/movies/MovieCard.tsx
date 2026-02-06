'use client';

import { Movie } from '@/types/movie';
import { Star, Clock, Calendar, Plus, Check } from 'lucide-react';
import { useWatchlist } from '@\context\WatchlistContext.tsx';
import { useState } from 'react';
import Link from 'next/link';

interface MovieCardProps {
  movie: Movie;
  variant?: 'default' | 'compact';
}

export default function MovieCard({ movie, variant = 'default' }: MovieCardProps) {
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  const [isHovered, setIsHovered] = useState(false);

  const inWatchlist = isInWatchlist(movie.id);

  const handleWatchlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inWatchlist) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  };

  if (variant === 'compact') {
    return (
      <Link href={`/movies/${movie.id}`}>
        <div className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-lg mb-3">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full aspect-[2/3] object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <button
              onClick={handleWatchlistToggle}
              className="absolute top-2 right-2 p-2 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {inWatchlist ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Plus className="w-4 h-4" />
              )}
            </button>
            <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/60 px-2 py-1 rounded">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-bold">{movie.rating}</span>
            </div>
          </div>
          <h3 className="font-semibold text-sm truncate">{movie.title}</h3>
          <div className="flex items-center gap-4 text-xs text-gray-400 mt-1">
            <span>{movie.year}</span>
            <span>{movie.duration}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/movies/${movie.id}`}>
      <div
        className="group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-xl mb-4">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full aspect-[2/3] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="absolute bottom-0 p-4">
              <div className="flex items-center gap-2 mb-2">
                {movie.genre.slice(0, 2).map((genre) => (
                  <span key={genre} className="px-2 py-1 bg-red-600/80 rounded text-xs">
                    {genre}
                  </span>
                ))}
              </div>
              <p className="text-sm line-clamp-2">{movie.synopsis}</p>
            </div>
          </div>
          
          {/* Watchlist Button */}
          <button
            onClick={handleWatchlistToggle}
            className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
              inWatchlist
                ? 'bg-green-600/90 hover:bg-green-700/90'
                : 'bg-black/60 hover:bg-black/80'
            } ${isHovered ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
          >
            {inWatchlist ? (
              <Check className="w-5 h-5" />
            ) : (
              <Plus className="w-5 h-5" />
            )}
          </button>
          
          {/* Rating Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-bold">{movie.rating}</span>
          </div>
        </div>
        
        {/* Movie Info */}
        <div>
          <h3 className="font-bold text-lg truncate mb-2">{movie.title}</h3>
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {movie.year}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {movie.duration.split(' ')[0]}
              </span>
            </div>
            <div className="flex gap-2">
              {movie.genre.slice(0, 2).map((genre) => (
                <span key={genre} className="px-2 py-1 bg-gray-800 rounded text-xs">
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}