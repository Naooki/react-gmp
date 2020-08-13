import * as React from 'react';
import styled from 'styles/styled-components';

import { Movie } from 'entities/Movie';
import MovieListItem from 'components/MovieListItem';

interface Props {
  movies: Movie[];
}

const Wrapper = styled.div`
  padding: 1rem 3rem;
`;

const MoviesUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  grid-gap: 1rem;
  list-style-type: none;
  padding: 0;
`;

const MovieList = (props: Props) => {
  return (
    <Wrapper>
      <div className="movies-quantity">
        <span>{props.movies.length}</span> movies found
      </div>
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
