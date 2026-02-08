'use client';


import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';
import { tmdb } from '@/services/tmdb';
import { CastCard } from '@/components/CastCard';


const Tabs = styled.div`
display: flex;
gap: 24px;
margin: 24px 0;
`;


const Tab = styled.button<{ active?: boolean }>`
background: none;
border: none;
color: ${({ theme, active }) =>
active ? theme.colors.primary : theme.colors.text};
font-size: 16px;
cursor: pointer;
`;


export default function MovieDetailsPage() {
const { id } = useParams();
const [tab, setTab] = useState<'about' | 'reviews' | 'cast'>('about');
const [movie, setMovie] = useState<any>();
const [cast, setCast] = useState<any[]>([]);


useEffect(() => {
async function load() {
const details = await tmdb.movieDetails(id as string);
const credits = await tmdb.credits(id as string);
setMovie(details);
setCast(credits.cast);
}
load();
}, [id]);


return (
<div>
{movie && (
<>
<h1>{movie.title}</h1>


<Tabs>
<Tab active={tab === 'about'} onClick={() => setTab('about')}>
About Movie
</Tab>
<Tab active={tab === 'reviews'} onClick={() => setTab('reviews')}>
Reviews
</Tab>
<Tab active={tab === 'cast'} onClick={() => setTab('cast')}>
Cast
</Tab>
</Tabs>


{tab === 'about' && <p>{movie.overview}</p>}
{tab === 'reviews' && <p>No reviews yet.</p>}


{tab === 'cast' && (
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px' }}>
{cast.slice(0, 12).map(actor => (
<CastCard key={actor.id} actor={actor} />
))}
</div>
)}
</>
)}
}