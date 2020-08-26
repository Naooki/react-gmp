import * as React from 'react';

import { Movie } from 'entities/Movie';
import MovieForm from 'components/MovieForm';
import ModalHeading from 'components/Modal/ModalHeading';

interface Props {
  movie: Movie;
}

function EditMovie(props: Props) {
  return (
    <>
      <ModalHeading>edit movie</ModalHeading>
      <MovieForm movie={props.movie} />
    </>
  );
}

export default EditMovie;
