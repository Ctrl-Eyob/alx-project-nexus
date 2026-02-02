// src/components/organisms/MovieGrid.tsx
import { Movie } from '@/types/movie';
import { MovieCard } from '../molecules/MovieCard';

export const MovieGrid = ({ movies }: { movies: Movie[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {movies.map(movie => (
      <MovieCard
        key={movie.id}
        movieId={movie.id}
        title={movie.title}
        poster={movie.poster_path}
      />
    ))}
  </div>
);
