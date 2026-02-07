import axios from 'axios';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  genre_ids: number[];
}

export interface MovieDetails extends Movie {
  runtime: number;
  genres: { id: number; name: string }[];
  production_companies: { name: string; logo_path: string | null }[];
  credits: {
    cast: Array<{ name: string; character: string; profile_path: string | null }>;
    crew: Array<{ name: string; job: string }>;
  };
  videos: { results: Array<{ key: string; site: string; type: string }> };
  similar: Movie[];
}

export interface ApiResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

class TMDBClient {
  private client = axios.create({
    baseURL: TMDB_BASE_URL,
    params: { api_key: API_KEY },
    timeout: 10000,
  });

  async getTrendingMovies(page = 1): Promise<ApiResponse<Movie>> {
    const { data } = await this.client.get<ApiResponse<Movie>>('/trending/movie/week', {
      params: { page },
    });
    return data;
  }

  async getMovieDetails(id: number): Promise<MovieDetails> {
    const { data: movie } = await this.client.get<MovieDetails>(`/movie/${id}`, {
      params: { append_to_response: 'credits,videos,similar' },
    });
    return movie;
  }

  async searchMovies(query: string, page = 1): Promise<ApiResponse<Movie>> {
    const { data } = await this.client.get<ApiResponse<Movie>>('/search/movie', {
      params: { query, page },
    });
    return data;
  }

  async getMovieRecommendations(id: number): Promise<ApiResponse<Movie>> {
    const { data } = await this.client.get<ApiResponse<Movie>>(`/movie/${id}/recommendations`);
    return data;
  }

  async getGenres(): Promise<{ id: number; name: string }[]> {
    const { data } = await this.client.get<{ genres: { id: number; name: string }[] }>('/genre/movie/list');
    return data.genres;
  }
}

export const tmdb = new TMDBClient();