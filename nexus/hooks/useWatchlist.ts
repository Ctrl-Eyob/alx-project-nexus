import { useEffect, useState } from 'react';
import { Movie } from '@/types/movie';


const KEY = 'nexus_watchlist';


export function useWatchlist() {
const [watchlist, setWatchlist] = useState<Movie[]>([]);


useEffect(() => {
const stored = localStorage.getItem(KEY);
if (stored) setWatchlist(JSON.parse(stored));
}, []);


const save = (movie: Movie) => {
const updated = [...watchlist, movie];
setWatchlist(updated);
localStorage.setItem(KEY, JSON.stringify(updated));
};


return { watchlist, save };
}