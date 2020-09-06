import { Movie } from './Movie';

export default interface MoviesResponse {
  data: Movie[];
  total: number;
  offset: number;
  limit: number;
}
