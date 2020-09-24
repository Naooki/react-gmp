import * as React from 'react';
import styled from 'styles/styled-components';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { parse } from 'query-string';
import { push } from 'connected-react-router';

import { openModal } from 'containers/Modal/actions';
import { ModalTypes } from 'containers/Modal/constants';
import Loader from 'components/Loader';
import MovieList from 'components/MovieList';
import SortBy, { SortType } from 'components/SortBy';
import Tabs from 'components/Tabs';
import { makeSelectMovieItems } from './selectors';
import { deleteMovie, getMovies } from './actions';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 3rem 2rem;
  background: ${props => props.theme.componentBackground};
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
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

  const location = useLocation();

  const movies = useSelector(makeSelectMovieItems());
  const dispatch = useDispatch();
  const [searchBy, search] = React.useMemo(() => {
    const params = parse(location.search);
    return [params.searchBy as 'title' | 'genres', params.search as string];
  }, [location.search]);
  const [sortBy] = React.useState<'release_date'>('release_date');
  const [sortOrder, setSortOrder] = React.useState<SortType | null>(null);

  React.useEffect(() => {
    dispatch(getMovies(searchBy, search, sortBy, sortOrder));
  }, [dispatch, searchBy, search, sortBy, sortOrder]);

  const [activeTab, activeTabChange] = React.useState(tabs[0]);
  const releaseDateOrderChange = (type: SortType) => {
    switch (type) {
      case SortType.Ascending:
      case SortType.Descending:
        setSortOrder(type);
        break;
      default:
        setSortOrder(null);
    }
  };

  const onMovieEdit = React.useCallback(
    (id: number) => {
      const modalType = ModalTypes.EDIT_MOVIE;
      const modalProps = { id, loading: true };
      dispatch(openModal({ modalType, modalProps }));
    },
    [dispatch],
  );

  const onMovieDelete = React.useCallback(
    (id: number) => {
      const modalType = ModalTypes.CONFIRMATION;
      const modalProps = {
        heading: 'delete movie',
        text: 'Are you sure you want to delete this movie?',
        loading: false,
        onConfirm: () => dispatch(deleteMovie(id.toString())),
      };

      dispatch(openModal({ modalType, modalProps }));
    },
    [dispatch],
  );

  return (
    <Main>
      <MovieListControls>
        <Tabs tabs={tabs} activeTab={activeTab} tabChange={activeTabChange} />
        <SortControls>
          <span className="label">sort by</span>
          <SortBy label="release date" orderChange={releaseDateOrderChange} />
        </SortControls>
      </MovieListControls>
      {movies ? (
        <MovieList
          movies={movies}
          onMovieClick={id => dispatch(push(`/movie/${id}`))}
          onMovieEdit={onMovieEdit}
          onMovieDelete={onMovieDelete}
        />
      ) : (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
    </Main>
  );
};

export default Movies;
