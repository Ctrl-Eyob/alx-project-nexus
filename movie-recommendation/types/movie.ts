
export interface Movie {
  id: string;
  title: string;
  year: number;
  rating: number;
  duration: string;
  genre: string[];
  poster: string;
  backdrop: string;
  director: string;
  synopsis: string;
  cast: CastMember[];
  reviews: Review[];
  releaseDate: string;
  nowPlaying: boolean;
  upcoming: boolean;
  topRated: boolean;
}

export interface CastMember {
  id: string;
  name: string;
  character: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
}

export interface Genre {
  id: string;
  name: string;
}