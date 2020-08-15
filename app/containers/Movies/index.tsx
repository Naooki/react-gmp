import * as React from 'react';
import styled from 'styles/styled-components';

import MovieList from 'components/MovieList';
import Tabs from 'components/Tabs';
import movies from './movies-data';

const Main = styled.main`
  flex-grow: 1;
  padding: 0 3rem 2rem;
  background: ${props => props.theme.componentBackground};
`;

const MovieListControls = styled.div`
  display: flex;
  border-bottom: 2px solid ${props => props.theme.footerBackground};
`;

const Movies = () => {
  const tabs = [
    { label: 'all' },
    { label: 'documentary' },
    { label: 'comedy' },
    { label: 'horror' },
    { label: 'crime' },
  ];

  const [activeTab, activeTabChange] = React.useState(tabs[0]);

  return (
    <Main>
      <MovieListControls>
        <Tabs tabs={tabs} activeTab={activeTab} tabChange={activeTabChange} />
        <div className="sort-by">Release Date</div>
      </MovieListControls>
      <MovieList movies={movies} />
    </Main>
  );
};

export default Movies;
