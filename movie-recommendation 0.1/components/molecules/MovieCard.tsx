'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star, Eye } from 'lucide-react';
import { Movie } from '@/lib/api';
import { useMovieStore } from '@/lib/store';
import { Button } from '@/components/atoms/Button';

interface MovieCardProps {
  movie: Movie;
  showDetails?: boolean;
}

export function MovieCard({ movie, showDetails = false }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { isFavorite, toggleFavorite, addToHistory } = useMovieStore();
  const isFav = isFavorite(movie.id);

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/placeholder.jpg';

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
    : posterUrl;

  const handleView = () => {
    addToHistory(movie);
  };

  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 
                 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link 
        href={`/movies/${movie.id}`} 
        className="block"
        onClick={handleView}
      >
        <div className="relative aspect-[2/3] w-full overflow-hidden">
          <Image
            src={posterUrl}
            alt={movie.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Rating Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-white text-sm font-semibold">
              {movie.vote_average.toFixed(1)}
            </span>
          </div>

          {/* Favorite Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm hover:bg-red-500/80"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavorite(movie);
            }}
            aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart className={`w-5 h-5 ${isFav ? 'fill-red-500 text-red-500' : 'text-white'}`} />
          </Button>
        </div>

        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-1 mb-1">
            {movie.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {movie.release_date?.split('-')[0] || 'N/A'}
          </p>
          {showDetails && (
            <p className="text-sm text-gray-500 dark:text-gray-500 line-clamp-2 mt-2">
              {movie.overview}
            </p>
          )}
          
          {/* Hover Actions */}
          {isHovered && (
            <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 animate-in fade-in duration-200">
              <Button
                size="sm"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                onClick={(e) => {
                  e.preventDefault();
                  handleView();
                  window.location.href = `/movies/${movie.id}`;
                }}
              >
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}