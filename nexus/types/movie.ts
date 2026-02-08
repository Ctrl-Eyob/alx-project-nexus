export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
}

export interface CastMember {
  id: number;
  name: string;
  profile_path: string | null;
  character: string;
}

export interface CreditsResponse {
  cast: CastMember[];
}
