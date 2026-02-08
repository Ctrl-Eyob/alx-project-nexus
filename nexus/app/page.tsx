'use client';

import styled from 'styled-components';
import { useMovies } from '@/hooks/useMovies';
import { MovieCard } from '@/components/MovieCard';
import { useWatchlist } from '@/hooks/useWatchlist';
import { useRouter } from 'next/navigation';

const Wrapper = styled.main`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const HeroSearch = styled.input`
  width: 100%;
  padding: 18px 24px;
  border-radius: 999px;
  border: none;
  font-size: 18px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
`;

const HorizontalScroll = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 8px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

export default function HomePage() {
  // ✅ hooks must be INSIDE the component
  const router = useRouter();

  const { movies: trending } = useMovies('trending');
  const { movies: upcoming } = useMovies('upcoming');
  const { watchlist } = useWatchlist();

  return (
    <Wrapper>
      {/* HERO SEARCH */}
      <HeroSearch
        placeholder="Search movies, genres, actors..."
        onFocus={() => router.push('/browse')}
      />

      {/* WATCHLIST */}
      <Section>
        <SectionTitle>Your Watchlist</SectionTitle>
        <HorizontalScroll>
          {watchlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </HorizontalScroll>
      </Section>

      {/* UPCOMING */}
      <Section>
        <SectionTitle>Upcoming Movies</SectionTitle>
        <Grid>
          {upcoming.slice(0, 8).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Grid>
      </Section>

      {/* TOP RATED / TRENDING */}
      <Section>
        <SectionTitle>Top Rated</SectionTitle>
        <Grid>
          {trending.slice(0, 8).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Grid>
      </Section>
    </Wrapper>
  );
}
