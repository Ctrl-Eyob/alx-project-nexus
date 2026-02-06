'use client';

import { useState } from 'react';
import { Movie } from '@/types/movie';
import { Star, Clock, Calendar, Play, Share2, Bookmark, Check } from 'lucide-react';
import { useWatchlist } from '@/context/WatchlistContext';
import CastSection from './CastSection';
import ReviewSection from './ReviewSection';

interface MovieDetailsClientProps {
  movie: Movie;
}

export default function MovieDetailsClient({ movie }: MovieDetailsClientProps) {
  const [activeTab, setActiveTab] = useState<'about' | 'reviews' | 'cast'>('about');
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  const inWatchlist = isInWatchlist(movie.id);

  const handleWatchlistToggle = () => {
    if (inWatchlist) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Backdrop */}
      <div className="relative h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${movie.backdrop})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
        
        <div className="relative h-full container mx-auto px-4 flex items-end">
          <div className="flex flex-col md:flex-row gap-8 items-end pb-12">
            {/* Movie Poster */}
            <div className="w-48 lg:w-64 flex-shrink-0">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
            
            {/* Movie Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-500 font-bold">MARVEL STUDIOS</span>
                <div className="flex items-center gap-1 bg-black/40 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">{movie.rating}/10</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>
              
              <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-300">
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {movie.year}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {movie.duration}
                </span>
                <div className="flex gap-2">
                  {movie.genre.map((genre) => (
                    <span key={genre} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                  <Play className="w-5 h-5" />
                  Watch Trailer
                </button>
                <button
                  onClick={handleWatchlistToggle}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                    inWatchlist
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  {inWatchlist ? (
                    <>
                      <Check className="w-5 h-5" />
                      In Watchlist
                    </>
                  ) : (
                    <>
                      <Bookmark className="w-5 h-5" />
                      Add to Watchlist
                    </>
                  )}
                </button>
                <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Tabs */}
        <div className="flex border-b border-gray-800 mb-8">
          <button
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'about'
                ? 'text-red-500 border-b-2 border-red-500'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('about')}
          >
            About Movie
          </button>
          <button
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'reviews'
                ? 'text-red-500 border-b-2 border-red-500'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
          <button
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'cast'
                ? 'text-red-500 border-b-2 border-red-500'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('cast')}
          >
            Cast
          </button>
        </div>
        
        {/* Tab Content */}
        <div className="max-w-4xl">
          {activeTab === 'about' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Synopsis</h2>
              <p className="text-gray-300 leading-relaxed">{movie.synopsis}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Director</h3>
                  <p className="text-gray-300">{movie.director}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Release Date</h3>
                  <p className="text-gray-300">{movie.releaseDate}</p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <ReviewSection reviews={movie.reviews} />
          )}
          
          {activeTab === 'cast' && (
            <CastSection cast={movie.cast} />
          )}
        </div>
      </div>
    </div>
  );
}