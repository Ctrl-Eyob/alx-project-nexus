import { useEffect, useState } from 'react';
import { tmdb } from '@/services/tmdb';
import { Movie } from '@/types/movie';


export function useMovies(type: 'trending' | 'upcoming') {
const [movies, setMovies] = useState<Movie[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);


useEffect(() => {
async function load() {
try {
setLoading(true);
const data =
type === 'trending'
? await tmdb.trending()
: await tmdb.upcoming();
setMovies(data.results);
} catch (e) {
setError('Unable to load movies');
} finally {
setLoading(false);
}
}
load();
}, [type]);


return { movies, loading, error };
}