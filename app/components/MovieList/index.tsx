import * as React from 'react';

import { Movie } from 'entities/Movie';
import MovieListItem from 'components/MovieListItem';

interface Props {
  movies: Movie[];
}

const MovieList = (props: Props) => {
  return (
    <div>
      <div className="movies-quantity">
        <span>{props.movies.length}</span> movies found
      </div>
      <ul>
        {props.movies.map(movie => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
