import * as React from 'react';

import { Movie } from 'entities/Movie';
import MovieForm from 'components/MovieForm';

function AddMovie() {
  const movie = {} as Movie;

  return (
    <>
      <h2>add movie</h2>
      <MovieForm movie={movie} />
    </>
  );
}

export default AddMovie;
