import MovieGenre from './MovieGenre';

export interface Movie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path?: string;
  overview?: string;
  budget?: number;
  revenue?: number;
  genres: MovieGenre[];
  runtime: number;
}
