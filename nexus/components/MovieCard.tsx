'use client';


import styled from 'styled-components';
import Image from 'next/image';
import { Movie } from '@/types/movie';


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


export function MovieCard({ movie }: { movie: Movie }) {
return (
<Card>
<Image
src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
alt={movie.title}
width={300}
height={450}
/>
</Card>
);
}