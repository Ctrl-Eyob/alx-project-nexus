import { Movie } from '@/types/movie';


const API_KEY = process.env.NEXT_PUBLIC_TMDB_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';


async function fetcher<T>(endpoint: string): Promise<T> {
const res = await fetch(`${BASE_URL}${endpoint}&api_key=${API_KEY}`);
if (!res.ok) throw new Error('Failed fetching TMDB');
return res.json();
}


export const tmdb = {
trending: () => fetcher<{ results: Movie[] }>(`/trending/movie/week?`),
upcoming: () => fetcher<{ results: Movie[] }>(`/movie/upcoming?`),
movieDetails: (id: string) => fetcher<Movie>(`/movie/${id}?`),
credits: (id: string) => fetcher(`/movie/${id}/credits?`)
};