import MovieGenre from './MovieGenre';

export interface Movie {
  id: string;
  releaseDate: string;
  about: string;
  title: string;
  imageUrl?: string;
  duration: number;
  rating: number;
  genres: MovieGenre[];
}
