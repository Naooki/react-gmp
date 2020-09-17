import * as React from 'react';

import { Movie } from 'entities/Movie';
import MovieForm from 'components/MovieForm';
import ModalHeading from 'containers/Modal/ModalHeading';

function AddMovie() {
  const movie = {} as Movie;

  return (
    <>
      <ModalHeading>add movie</ModalHeading>
      <MovieForm movie={movie} />
    </>
  );
}

export default AddMovie;
