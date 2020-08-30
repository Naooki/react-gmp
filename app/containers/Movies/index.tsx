import * as React from 'react';
import styled from 'styles/styled-components';
import { useHistory } from 'react-router-dom';

import Modal from 'components/Modal';
import Confirmation from 'components/Confirmation';
import EditMovie from 'containers/EditMovie';
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

  const history = useHistory();

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

  const [modalContent, toggleModal] = React.useState<React.ReactNode>(null);

  const onMovieEdit = React.useCallback(async (id: string) => {
    // MOCK: fetch movie by id
    const movie = await Promise.resolve(
      moviesData.find(m => m.id === id) as Movie,
    );

    const editMovie = (
      <Modal onClose={() => toggleModal(null)}>
        <EditMovie movie={movie} />
      </Modal>
    );

    toggleModal(editMovie);
  }, []);

  const deleteMovie = React.useCallback(async (movieId: string) => {
    // MOCK: Delete Api call
    console.log(`Delete movie with id: ${movieId}`);
    await Promise.resolve(movieId);
    toggleModal(null);
  }, []);

  const onMovieDelete = React.useCallback(
    (id: string) => {
      const heading = 'delete movie';
      const text = 'Are you sure you want to delete this movie?';

      const deleteMovieConfirmation = (
        <Modal onClose={() => toggleModal(null)}>
          <Confirmation
            heading={heading}
            text={text}
            onConfirm={() => deleteMovie(id)}
          />
        </Modal>
      );

      toggleModal(deleteMovieConfirmation);
    },
    [deleteMovie],
  );

  return (
    <>
      <Main>
        <MovieListControls>
          <Tabs tabs={tabs} activeTab={activeTab} tabChange={activeTabChange} />
          <SortControls>
            <span className="label">sort by</span>
            <SortBy label="release date" orderChange={releaseDateOrderChange} />
          </SortControls>
        </MovieListControls>
        <MovieList
          movies={movies}
          onMovieClick={id => history.push(`/movie/${id}`)}
          onMovieEdit={onMovieEdit}
          onMovieDelete={onMovieDelete}
        />
      </Main>

      {modalContent}
    </>
  );
};

export default Movies;
