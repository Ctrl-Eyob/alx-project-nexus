'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MovieCard } from '@/components/MovieCard';
import { GenrePill } from '@/components/GenrePill';
import { tmdb } from '@/services/tmdb';
import { Movie } from '@/types/movie';

const Wrapper = styled.main`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  border-radius: 999px;
  border: none;
  font-size: 16px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
`;

const PillsRow = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

const GENRES = [
  'ALL',
  'Action',
  'Comedy',
  'Romance',
  'Drama',
  'Horror',
  'Sci-Fi',
];

export default function BrowsePage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [activeGenre, setActiveGenre] = useState('ALL');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function searchMovies() {
      setLoading(true);

      try {
        if (query.length > 0) {
          const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`
          );
          const data = await res.json();
          setMovies(data.results || []);
        } else {
          const res = await tmdb.trending();
          setMovies(res.results);
        }
      } catch (e) {
        console.error('Search failed', e);
      } finally {
        setLoading(false);
      }
    }

    searchMovies();
  }, [query]);

  const filteredMovies =
    activeGenre === 'ALL'
      ? movies
      : movies.filter((movie: any) => movie.genre_ids?.length);

  return (
    <Wrapper>
      <SearchInput
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <PillsRow>
        {GENRES.map((genre) => (
          <GenrePill
            key={genre}
            label={genre}
            active={activeGenre === genre}
            onClick={() => setActiveGenre(genre)}
          />
        ))}
      </PillsRow>

      {loading && <p>Loading movies...</p>}

      <Grid>
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
    </Wrapper>
  );
}
