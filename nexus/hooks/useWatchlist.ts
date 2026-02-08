import { useEffect, useState } from 'react';
import { Movie } from '@/types/movie';


const KEY = 'nexus_watchlist';


export function useWatchlist() {
const [watchlist, setWatchlist] = useState<Movie[]>([]);


useEffect(() => {
const stored = localStorage.getItem(KEY);
if (stored) setWatchlist(JSON.parse(stored));
}, []);


const persist = (list: Movie[]) => {
setWatchlist(list);
localStorage.setItem(KEY, JSON.stringify(list));
};


const save = (movie: Movie) => {
if (watchlist.find(m => m.id === movie.id)) return;
persist([...watchlist, movie]);
};


const remove = (id: number) => {
persist(watchlist.filter(m => m.id !== id));
};


return { watchlist, save, remove };
}