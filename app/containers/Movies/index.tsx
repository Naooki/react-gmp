import * as React from 'react';
import styled from 'styles/styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Modal from 'components/Modal';
import Confirmation from 'components/Confirmation';
import EditMovie from 'containers/EditMovie';
import { Movie } from 'entities/Movie';
import MovieList from 'components/MovieList';
import SortBy from 'components/SortBy';
import Tabs from 'components/Tabs';
import { makeSelectMovieItems } from './selectors';
import { getMovies } from './actions';

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

  // const [movies, setMovies] = React.useState([...moviesData]);
  const movies = useSelector(makeSelectMovieItems());
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getMovies(''));
  }, [dispatch]);

  const [activeTab, activeTabChange] = React.useState(tabs[0]);
  // const releaseDateOrderChange = (type: SortType) => {
  //   let reorderedMovies: Movie[];
  //   switch (type) {
  //     case SortType.Ascending:
  //       reorderedMovies = movies.sort((a, b) =>
  //         a.releaseDate < b.releaseDate ? -1 : 1,
  //       );
  //       break;
  //     case SortType.Descending:
  //       reorderedMovies = movies.sort((a, b) =>
  //         a.releaseDate > b.releaseDate ? -1 : 1,
  //       );
  //       break;
  //     default:
  //       reorderedMovies = [...moviesData];
  //   }
  //   setMovies([...reorderedMovies]);
  // };

  const [modalContent, toggleModal] = React.useState<React.ReactNode>(null);

  const onMovieEdit = React.useCallback(async (id: number) => {
    // MOCK: fetch movie by id
    const movie = { id } as Movie;

    const editMovie = (
      <Modal onClose={() => toggleModal(null)}>
        <EditMovie movie={movie} />
      </Modal>
    );

    toggleModal(editMovie);
  }, []);

  const deleteMovie = React.useCallback(async (movieId: number) => {
    // MOCK: Delete Api call
    console.log(`Delete movie with id: ${movieId}`);
    await Promise.resolve(movieId);
    toggleModal(null);
  }, []);

  const onMovieDelete = React.useCallback(
    (id: number) => {
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
            <SortBy label="release date" orderChange={() => {}} />
          </SortControls>
        </MovieListControls>
        {movies ? (
          <MovieList
            movies={movies}
            onMovieClick={id => history.push(`/movie/${id}`)}
            onMovieEdit={onMovieEdit}
            onMovieDelete={onMovieDelete}
          />
        ) : (
          <div>loading...</div>
        )}
      </Main>

      {modalContent}
    </>
  );
};

export default Movies;
