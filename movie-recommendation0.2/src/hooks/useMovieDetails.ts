'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Movie } from '@/types/movie';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export function useMovieDetails(id: string) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchMovie() {
      try {
        const res = await axios.get(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
        );
        setMovie(res.data);
      } catch {
        setError('Failed to load movie');
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [id]);

  return { movie, loading, error };
}
