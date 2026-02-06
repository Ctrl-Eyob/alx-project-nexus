// app/movies/[id]/page.tsx
import { notFound } from 'next/navigation';
import { movies } from '@/lib/data';
import MovieDetailsClient from '@/components/movies/MovieDetailsClient';

interface MoviePageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return movies.map((movie) => ({
    id: movie.id,
  }));
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = await params;
  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    notFound();
  }

  return <MovieDetailsClient movie={movie} />;
}