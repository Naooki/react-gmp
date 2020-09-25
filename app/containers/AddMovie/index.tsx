import * as React from 'react';

import { Movie } from 'entities/Movie';
import MovieForm from 'components/MovieForm';
import ModalHeading from 'containers/Modal/ModalHeading';
import { useDispatch } from 'react-redux';

interface Props {
  loading: boolean;
}
function AddMovie(props: Props) {
  const movie = {} as Movie;
  const dispatch = useDispatch();
  const onCreateMovieClick = React.useCallback(() => {
    dispatch(null);
  }, [dispatch]);

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
