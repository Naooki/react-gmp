import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MovieForm from 'components/MovieForm';
import ModalHeading from 'containers/Modal/ModalHeading';
import { getMovieById } from 'containers/Movies/actions';
import { makeSelectSelectedMovie } from 'containers/Movies/selectors';

interface Props {
  id: number;
}

function EditMovie(props: Props) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getMovieById(`${props.id}`));
  }, [dispatch, props.id]);

  const movie = useSelector(makeSelectSelectedMovie());

  return (
    <>
      <ModalHeading>edit movie</ModalHeading>
      {movie ? <MovieForm movie={movie} /> : <div>loading...</div>}
    </>
  );
}

export default EditMovie;
