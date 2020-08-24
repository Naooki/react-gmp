import * as React from 'react';

import { Movie } from 'entities/Movie';
import MovieForm from 'components/MovieForm';
import Heading from 'components/Heading';

function AddMovie() {
  const movie = {} as Movie;

  return (
    <>
      <Heading>add movie</Heading>
      <MovieForm movie={movie} />
    </>
  );
}

export default AddMovie;
