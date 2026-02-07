// src/services/tmdbClient.ts
import axios from 'axios';

export const tmdbClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
  },
});

tmdbClient.interceptors.response.use(
  res => res,
  err => {
    console.error('TMDB Error', err);
    throw new Error('Failed to fetch data');
  }
);
