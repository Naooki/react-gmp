import * as React from 'react';

import MovieList from 'components/MovieList';
import { Movie } from 'entities/Movie';

const movies: Movie[] = [
  {
    id: 'test-id-0',
    releaseDate: 'dt',
    about: 'test-about',
    title: 'Pulp fiction',
    imageUrl: 'src/src/src',
    duration: 154,
    rating: 4.2,
  },
  {
    id: 'test-id-1',
    releaseDate: 'dt',
    about: 'Drama, Biography, Music',
    title: 'Bohemian Rhapsody',
    imageUrl: 'src/src/src',
    duration: 154,
    rating: 4.0,
  },
  {
    id: 'test-id-2',
    releaseDate: 'dt',
    about: 'Oscar winning movie',
    title: 'Kill Bill: Vol 2',
    imageUrl: 'src/src/src',
    duration: 154,
    rating: 4.2,
  },
  {
    id: 'test-id-3',
    releaseDate: 'dt',
    about: 'Action & Adventure',
    title: 'Avengers: War of Infinity',
    imageUrl: 'src/src/src',
    duration: 154,
    rating: 4.8,
  },
  {
    id: 'test-id-4',
    releaseDate: 'dt',
    about: 'Action & Adventure',
    title: 'Inception',
    imageUrl: 'src/src/src',
    duration: 154,
    rating: 4.6,
  },
  {
    id: 'test-id-5',
    releaseDate: 'dt',
    about: 'Oscar winning movie',
    title: 'Reservoir dogs',
    imageUrl: 'src/src/src',
    duration: 154,
    rating: 4.6,
  },
];

const Movies = () => {
  return (
    <main>
      <div>
        <nav className="genres">nav</nav>
        <div className="sort-by">Release Date</div>
      </div>
      <MovieList movies={movies} />
    </main>
  );
};

export default Movies;
