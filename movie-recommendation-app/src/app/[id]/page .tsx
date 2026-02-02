// src/app/page.tsx
'use client';

import { useTrendingMovies } from '@/hooks/useTrendingMovies';
import { MovieGrid } from '@/components/organisms/MovieGrid';

export default function Home() {
  const { data, isLoading, error } = useTrendingMovies();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load movies</p>;

  return <MovieGrid movies={data ?? []} />;
}
