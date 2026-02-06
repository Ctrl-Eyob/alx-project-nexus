import { nowPlayingMovies } from '@/lib/data';
import MovieGrid from '@/components/movies/MovieGrid';

export default function NowPlayingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Now Playing in Theaters</h1>
      <div className="mb-6">
        <p className="text-gray-400">
          Currently showing {nowPlayingMovies.length} movies
        </p>
      </div>
      <MovieGrid movies={nowPlayingMovies} />
    </div>
  );
}