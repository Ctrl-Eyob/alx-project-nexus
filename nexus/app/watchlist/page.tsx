'use client';


import styled from 'styled-components';
import { useWatchlist } from '@/hooks/useWatchlist';
import { MovieCard } from '@/components/MovieCard';


const Wrapper = styled.main`
padding: 24px;
`;


const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 16px;
`;


export default function WatchlistPage() {
const { watchlist } = useWatchlist();


return (
<Wrapper>
<h1>Your Watchlist</h1>


{watchlist.length === 0 && <p>No saved movies yet.</p>}


<Grid>
{watchlist.map(movie => (
<MovieCard key={movie.id} movie={movie} />
))}
</Grid>
</Wrapper>
);
}