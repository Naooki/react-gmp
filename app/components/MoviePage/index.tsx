import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styles/styled-components';

import { Movie } from 'entities/Movie';

const Article = styled.article`
  display: grid;
  grid-template: minmax(0, 70vh) / 1fr 3fr;
  grid-gap: 5rem;
  color: ${props => props.theme.text};

  & .movie-poster-image {
    max-width: 100%;
  }
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

type RouteParams = {
  id: string; // /movie/:id
};

interface Props
  extends RouteComponentProps<RouteParams>,
    React.Props<RouteParams> {}

const MoviePage = (props: Props) => {
  const { id } = props.match.params;
  console.log(id);

  // MOCK: fetch movie here
  // const movie = moviesData.find(m => m.id === id) as Movie;
  const movie = {} as Movie;

  const rating = React.useMemo(() => movie.vote_average.toPrecision(2), [
    movie.vote_average,
  ]);
  const genres = React.useMemo(() => movie.genres.join(', '), [movie.genres]);
  const releaseYear = React.useMemo(() => movie.release_date.slice(0, 4), [
    movie.release_date,
  ]);

  return (
    <Article>
      <aside>
        <img
          src={movie.poster_path}
          alt="movie poster"
          className="movie-poster-image"
        />
      </aside>
      <MovieDescription>
        <header>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieRating>{rating}</MovieRating>
          <div>{genres}</div>
        </header>
        <MovieHighlightInfo>
          <div>{releaseYear}</div>
          <div>{`${movie.runtime} min`}</div>
        </MovieHighlightInfo>
        <MovieParagraph>{movie.overview}</MovieParagraph>
      </MovieDescription>
    </Article>
  );
};

export default MoviePage;
