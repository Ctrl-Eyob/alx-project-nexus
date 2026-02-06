// lib/data.ts
import { Movie, Genre } from 'c:/Users/etcre/alx-project-nexus/movie-recommendation/types/movie';

export const genres: Genre[] = [
  { id: '1', name: 'Action' },
  { id: '2', name: 'Comedy' },
  { id: '3', name: 'Adventure' },
  { id: '4', name: 'Romance' },
  { id: '5', name: 'Sci-Fi' },
  { id: '6', name: 'Drama' },
  { id: '7', name: 'Thriller' },
];

export const movies: Movie[] = [
  {
    id: '1',
    title: 'SPIDER-MAN: No Way Home',
    year: 2021,
    rating: 9.5,
    duration: '148 minutes',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    poster: '/api/placeholder/300/450',
    backdrop: '/api/placeholder/1200/600',
    director: 'Jon Watts',
    synopsis: 'With Spider-Man\'s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.',
    cast: [
      { id: '1', name: 'Tom Holland', character: 'Peter Parker / Spider-Man', image: '/api/placeholder/150/150' },
      { id: '2', name: 'Zendaya', character: 'MJ', image: '/api/placeholder/150/150' },
      { id: '3', name: 'Benedict Cumberbatch', character: 'Doctor Strange', image: '/api/placeholder/150/150' },
      { id: '4', name: 'Jacob Batalon', character: 'Ned Leeds', image: '/api/placeholder/150/150' },
    ],
    reviews: [
      { id: '1', author: 'John Doe', rating: 9, content: 'Amazing movie! Best Spider-Man film ever.', date: '2023-12-15' },
      { id: '2', author: 'Jane Smith', rating: 10, content: 'Perfect blend of nostalgia and fresh storytelling.', date: '2023-12-10' },
    ],
    releaseDate: '2021-12-17',
    nowPlaying: true,
    upcoming: false,
    topRated: true,
  },
  {
    id: '2',
    title: 'JURASSIC WORLD: Dominion',
    year: 2022,
    rating: 8.7,
    duration: '147 minutes',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    poster: '/api/placeholder/300/450',
    backdrop: '/api/placeholder/1200/600',
    director: 'Colin Trevorrow',
    synopsis: 'Four years after the destruction of Isla Nublar, dinosaurs now live and hunt alongside humans all over the world.',
    cast: [
      { id: '5', name: 'Chris Pratt', character: 'Owen Grady', image: '/api/placeholder/150/150' },
      { id: '6', name: 'Bryce Dallas Howard', character: 'Claire Dearing', image: '/api/placeholder/150/150' },
    ],
    reviews: [],
    releaseDate: '2022-06-10',
    nowPlaying: true,
    upcoming: false,
    topRated: false,
  },
  // Add more movies here...
];

export const nowPlayingMovies = movies.filter(movie => movie.nowPlaying);
export const upcomingMovies = movies.filter(movie => movie.upcoming);
export const topRatedMovies = movies.filter(movie => movie.topRated);