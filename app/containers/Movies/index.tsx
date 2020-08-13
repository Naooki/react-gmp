import * as React from 'react';
import styled from 'styles/styled-components';

import MovieList from 'components/MovieList';
import movies from './movies-data';

const Main = styled.main`
  flex-grow: 1;
  background: ${props => props.theme.componentBackground};
`;

const Movies = () => {
  return (
    <Main>
      <div>
        <nav className="genres">nav</nav>
        <div className="sort-by">Release Date</div>
      </div>
      <MovieList movies={movies} />
    </Main>
  );
};

export default Movies;
