import { useEffect, useState } from 'react';
import { tmdb } from '@/services/tmdb';
import { Movie } from '@/types/movie';

type MovieType = 'trending' | 'upcoming' | 'topRated';

export function useMovies(type: MovieType) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);

      const data =
        type === 'trending'
          ? await tmdb.trending()
          : type === 'upcoming'
          ? await tmdb.upcoming()
          : await tmdb.topRated();

      setMovies(data.results);
      setLoading(false);
    }

    load();
  }, [type]);

  return { movies, loading };
}
