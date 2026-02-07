// src/hooks/useTrendingMovies.ts
import { useQuery } from '@tanstack/react-query';
import { tmdbClient } from '@/services/tmdbClient';
import { Movie } from '@/types/movie';

export const useTrendingMovies = () =>
  useQuery<Movie[]>(
    queryKey: ['trending'],
    queryFn: async () => {
      const res = await tmdbClient.get('/trending/movie/week');
      return res.data.results;
    },
    staleTime: 1000 * 60 * 5,
     queryKey: ['movie', id],
    queryFn: async () => {
      const res = await tmdbClient.get(`/movie/${id}`);
      return res.data;
  });