'use client';
import { useParams } from 'next/navigation';
import { useMovieDetails } from '../../hooks/useMovieDetails';
export default function MoviePage() {
  const params = useParams();
  const id = params?.id as string;
  const { movie, loading, error } = useMovieDetails(id);
  if (loading) return <p>Loading movie...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>Movie not found</p>;
  return (
    <main style={{ padding: '2rem' }}>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </main>
  );
}
