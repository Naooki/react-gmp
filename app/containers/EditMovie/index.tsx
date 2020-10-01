import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MovieForm from 'components/MovieForm';
import ModalHeading from 'containers/Modal/ModalHeading';
import { makeSelectMovieById } from 'containers/Movies/selectors';
import { updateMovie } from 'containers/Movies/actions';
import { Movie } from 'entities/Movie';

interface Props {
  id: number;
  loading: boolean;
}

function EditMovie(props: Props) {
  const dispatch = useDispatch();
  const movie = useSelector(makeSelectMovieById(props.id)) as Movie;

  const onEditMovie = React.useCallback(
    (updatedMovie: Movie) => {
      dispatch(updateMovie(updatedMovie));
    },
    [dispatch],
  );

  return (
    <>
      <ModalHeading>edit movie</ModalHeading>
      <MovieForm
        movie={movie}
        onConfirm={onEditMovie}
        loading={props.loading}
      />
    </>
  );
}

export default EditMovie;
