import * as React from 'react';
import styled from 'styles/styled-components';

import { Movie } from 'entities/Movie';
import MovieList from 'components/MovieList';
import SortBy, { SortType } from 'components/SortBy';
import Tabs from 'components/Tabs';
import moviesData from './movies-data';

const Main = styled.main`
  flex-grow: 1;
  padding: 0 3rem 2rem;
  background: ${props => props.theme.componentBackground};
`;

const MovieListControls = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${props => props.theme.footerBackground};
`;

const SortControls = styled.div`
  display: flex;
  text-transform: uppercase;
  > .label {
    align-self: center;
    margin-right: 2rem;
    font-size: 0.9rem;
    color: #aaa;
  }
`;

const Movies = () => {
  const tabs = [
    { label: 'all' },
    { label: 'documentary' },
    { label: 'comedy' },
    { label: 'horror' },
    { label: 'crime' },
  ];

  const [movies, setMovies] = React.useState([...moviesData]);
  const [activeTab, activeTabChange] = React.useState(tabs[0]);
  const releaseDateOrderChange = (type: SortType) => {
    let reorderedMovies: Movie[];
    switch (type) {
      case SortType.Ascending:
        reorderedMovies = movies.sort((a, b) =>
          a.releaseDate < b.releaseDate ? -1 : 1,
        );
        break;
      case SortType.Descending:
        reorderedMovies = movies.sort((a, b) =>
          a.releaseDate > b.releaseDate ? -1 : 1,
        );
        break;
      default:
        reorderedMovies = [...moviesData];
    }
    setMovies([...reorderedMovies]);
  };

  return (
    <Main>
      <MovieListControls>
        <Tabs tabs={tabs} activeTab={activeTab} tabChange={activeTabChange} />
        <SortControls>
          <span className="label">sort by</span>
          <SortBy label="release date" orderChange={releaseDateOrderChange} />
        </SortControls>
      </MovieListControls>
      <MovieList movies={movies} />
    </Main>
  );
};

export default Movies;
