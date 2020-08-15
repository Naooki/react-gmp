import * as React from 'react';
import styled from 'styles/styled-components';

import { Movie } from 'entities/Movie';
import MovieListItem from 'components/MovieListItem';

interface Props {
  movies: Movie[];
}

const Wrapper = styled.div``;

const MovieQuantity = styled.div`
  margin: 1rem 0;
  font-size: 1.1rem;
  color: #ccc;
  > b {
    color: ${props => props.theme.text};
  }
`;

const MoviesUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const MovieList = (props: Props) => {
  return (
    <Wrapper>
      <MovieQuantity>
        <b>{props.movies.length}</b> movies found
      </MovieQuantity>
      <MoviesUl>
        {props.movies.map(movie => (
          <li key={movie.id}>
            <MovieListItem movie={movie} />
          </li>
        ))}
      </MoviesUl>
    </Wrapper>
  );
};

export default MovieList;
