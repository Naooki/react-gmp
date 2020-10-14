import * as React from 'react';
import styled from 'styles/styled-components';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { parse, stringify } from 'query-string';

import { openModal } from 'containers/Modal/actions';
import { ModalTypes } from 'containers/Modal/constants';
import Loader from 'components/Loader';
import MovieList from 'components/MovieList';
import SortBy, { SortType } from 'components/SortBy';
import Tabs from 'components/Tabs';
import { makeSelectMovieItems } from './selectors';
import { deleteMovie, getMovies, movieSortChange } from './actions';

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
  const location = useLocation();

  const tabs = React.useMemo(() => {
    const params = parse(location.search);
    delete params.filter;

    return [
      { label: 'all', path: stringify({ ...params }) },
      {
        label: 'documentary',
        path: stringify({ ...params, filter: 'documentary' }),
      },
      {
        label: 'comedy',
        path: stringify({ ...params, filter: 'comedy' }),
      },
      {
        label: 'horror',
        path: stringify({ ...params, filter: 'horror' }),
      },
      {
        label: 'crime',
        path: stringify({ ...params, filter: 'crime' }),
      },
    ];
  }, [location.search]);

  const activeTab = React.useMemo(
    () => tabs.find(tab => `?${tab.path}` === location.search) || tabs[0],
    [tabs, location.search],
  );

  const movies = useSelector(makeSelectMovieItems());
  const dispatch = useDispatch();

  // Refetch on query params change
  React.useEffect(() => {
    dispatch(getMovies());
  }, [dispatch, location.search]);

  const onOrderChange = (
    sortBy: 'release_date' | 'vote_average',
    sortOrder: SortType,
  ) => {
    switch (sortOrder) {
      case SortType.Ascending:
      case SortType.Descending:
        dispatch(movieSortChange({ sortBy, sortOrder }));
        break;
      default:
        dispatch(movieSortChange({}));
    }
  };

  const onMovieEdit = React.useCallback(
    (id: number) => {
      const modalType = ModalTypes.EDIT_MOVIE;
      const modalProps = { id };
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

  const onMovieClick = React.useCallback(
    (id: number) => {
      dispatch(
        push({
          pathname: `/film/${id}`,
          search: location.search,
        }),
      );
    },
    [dispatch, location.search],
  );

  return (
    <Main>
      <MovieListControls>
        <Tabs tabs={tabs} activeTab={activeTab} />
        <SortControls>
          <span className="label">sort by</span>
          <SortBy
            label="release date"
            orderChange={type => onOrderChange('release_date', type)}
          />
        </SortControls>
      </MovieListControls>
      {movies ? (
        <MovieList
          movies={movies}
          onMovieClick={onMovieClick}
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
