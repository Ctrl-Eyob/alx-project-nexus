'use client';


import styled from 'styled-components';
import Image from 'next/image';
import { Movie } from '@/types/movie';
import { useWatchlist } from '@/hooks/useWatchlist';


const Card = styled.div`
position: relative;
border-radius: ${({ theme }) => theme.radius.md};
overflow: hidden;
cursor: pointer;
transition: transform 0.3s ease, box-shadow 0.3s ease;


&:hover {
transform: translateY(-6px);
box-shadow: 0 10px 30px rgba(0,0,0,0.4);
}
`;


const SaveButton = styled.button<{ $saved?: boolean }>`
position: absolute;
bottom: 12px;
right: 12px;
padding: 8px 12px;
border-radius: 999px;
border: none;
background: ${({ $saved, theme }) =>
$saved ? theme.colors.primary : 'rgba(0,0,0,0.6)'};
color: white;
font-size: 12px;
cursor: pointer;
`;


export function MovieCard({ movie }: { movie: Movie }) {
const { watchlist, save, remove } = useWatchlist();


const isSaved = watchlist.some(m => m.id === movie.id);


const toggleWatchlist = () => {
if (isSaved) remove(movie.id);
else save(movie);
};


return (
<Card>
<Image
src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
alt={movie.title}
width={300}
height={450}
/>


<SaveButton $saved={isSaved} onClick={toggleWatchlist}>
{isSaved ? 'Saved' : 'Save'}
</SaveButton>
</Card>
);
}