'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { tmdb } from '@/services/tmdb';
import { Movie } from '@/types/movie';
import { MovieCard } from './MovieCard';

const Section = styled.section`
  margin-top: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export function Recommendations({ movieId }: { movieId: string }) {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    tmdb.recommendations(movieId).then(res =>
      setMovies(res.results.slice(0, 8))
    );
  }, [movieId]);

  if (!movies.length) return null;

  return (
    <Section>
      <h2>You may also like</h2>
      <Grid>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
    </Section>
  );
}
