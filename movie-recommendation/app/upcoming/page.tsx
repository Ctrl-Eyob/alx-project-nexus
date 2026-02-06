// app/upcoming/page.tsx
'use client';

import { useState } from 'react';
import { genres, movies } from '@/lib/data';
import MovieGrid from '@/components/movies/MovieGrid';
import { Calendar, Bell } from 'lucide-react';

export default function UpcomingPage() {
  const [selectedGenre, setSelectedGenre] = useState<string>('all');
  
  const upcomingMovies = movies.filter(movie => movie.upcoming);
  
  const filteredMovies = selectedGenre === 'all' 
    ? upcomingMovies
    : upcomingMovies.filter(movie => movie.genre.includes(selectedGenre));
  
  const featuredMovies = upcomingMovies.slice(0, 2);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Upcoming Movies</h1>
      
      {/* Featured Upcoming Movies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {featuredMovies.map((movie) => (
          <div key={movie.id} className="relative rounded-2xl overflow-hidden group">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
              <div className="absolute bottom-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-red-500" />
                  <span className="text-red-500 font-semibold">{movie.releaseDate}</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
                <div className="flex items-center gap-2">
                  {movie.genre.map((genre) => (
                    <span key={genre} className="px-3 py-1 bg-gray-800/80 rounded-full text-sm">
                      {genre}
                    </span>
                  ))}
                </div>
                <button className="mt-4 flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors">
                  <Bell className="w-4 h-4" />
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Genre Filter */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Browse by Genre</h2>
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedGenre === 'all'
                ? 'bg-red-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => setSelectedGenre('all')}
          >
            All
          </button>
          {genres.map((genre) => (
            <button
              key={genre.id}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedGenre === genre.name
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setSelectedGenre(genre.name)}
            >
              {genre.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Upcoming Movies Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            {selectedGenre === 'all' ? 'All Upcoming' : selectedGenre}
          </h2>
          <span className="text-gray-400">{filteredMovies.length} movies</span>
        </div>
        
        {filteredMovies.length > 0 ? (
          <MovieGrid movies={filteredMovies} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400">No upcoming movies in this genre</p>
          </div>
        )}
      </div>
    </div>
  );
}