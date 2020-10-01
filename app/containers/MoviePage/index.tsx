import * as React from 'react';
import styled from 'styles/styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { makeSelectSelectedMovie } from 'containers/Movies/selectors';
import { getMovieById } from 'containers/Movies/actions';
import Loader from 'components/Loader';
import MovieImage from 'components/MovieImage';

const LoaderWrapper = styled.div`
  height: 65vh;
`;

const Article = styled.article`
  display: grid;
  grid-template: minmax(0, auto) / 1fr 3fr;
  grid-gap: 5rem;
  color: ${props => props.theme.text};
`;

const MovieDescription = styled.section`
  display: grid;
  grid-template-rows: auto auto minmax(0, 1fr);
`;

const MovieTitle = styled.h3`
  display: inline-block;
  margin: 0 1rem 0 0;
  font-size: 2rem;
  font-weight: 100;
`;

const MovieRating = styled.div`
  display: inline-block;
  padding: 1rem;
  color: lightgreen;
  border: ${props => `1px solid ${props.theme.text}`};
  border-radius: 50%;
  font-size: 2rem;
  &.missing {
    color: #f00;
  }
`;

const MovieHighlightInfo = styled.div`
  display: flex;
  margin: 1rem 0;
  font-size: 1.5rem;
  color: ${props => props.theme.primary};

  & > div {
    margin-right: 3rem;
  }
`;

const MovieParagraph = styled.p`
  margin: 0;
  font-family: inherit;
  overflow-y: auto;
`;

const MoviePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams() as { id: string };

  React.useEffect(() => {
    dispatch(getMovieById(id));
  }, [dispatch, id]);

  const movie = useSelector(makeSelectSelectedMovie());

  const rating = React.useMemo(() => movie?.vote_average?.toPrecision(2), [
    movie,
  ]);
  const genres = React.useMemo(() => movie?.genres?.join(', ') || '', [movie]);
  const releaseYear = React.useMemo(() => movie?.release_date.slice(0, 4), [
    movie,
  ]);

  return movie ? (
    <Article>
      <aside>
        <MovieImage src={movie.poster_path} alt="movie poster" />
      </aside>
      <MovieDescription>
        <header>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieRating className={rating ? '' : 'missing'}>
            {rating || 'NA'}
          </MovieRating>
          <div>{genres}</div>
        </header>
        <MovieHighlightInfo>
          <div>{releaseYear}</div>
          <div>{`${movie.runtime} min`}</div>
        </MovieHighlightInfo>
        <MovieParagraph>{movie.overview}</MovieParagraph>
      </MovieDescription>
    </Article>
  ) : (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  );
};

export default MoviePage;
