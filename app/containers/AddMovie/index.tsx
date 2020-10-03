import * as React from 'react';

import { Movie } from 'entities/Movie';
import MovieForm from 'components/MovieForm';
import ModalHeading from 'containers/Modal/ModalHeading';
import { useDispatch } from 'react-redux';
import { createMovie } from 'containers/Movies/actions';
import { MovieFormModel } from 'components/MovieForm/MovieFormModel';

interface Props {
  loading: boolean;
}
function AddMovie(props: Props) {
  const movie = {
    title: '',
    poster_path: '',
    overview: '',
    genres: [],
    runtime: '',
    release_date: '',
  } as MovieFormModel;
  const dispatch = useDispatch();
  const onCreateMovieClick = React.useCallback(
    (movieData: Movie) => {
      dispatch(createMovie(movieData));
    },
    [dispatch],
  );

  return (
    <>
      <ModalHeading>add movie</ModalHeading>
      <MovieForm
        movie={movie}
        loading={props.loading}
        onConfirm={onCreateMovieClick}
      />
    </>
  );
}

export default AddMovie;
