import * as React from 'react';
import {
  Switch,
  Route,
  matchPath,
  RouteComponentProps,
} from 'react-router-dom';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import { parse } from 'query-string';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Movies from 'containers/Movies';
import MoviePage from 'containers/MoviePage';
import MovieSearch from 'components/MovieSearch';
import Footer from 'components/Footer';
import IconLink from 'components/IconLink';
import { ButtonVariant } from 'components/Button';
import { ModalTypes } from 'containers/Modal/constants';
import { openModal } from 'containers/Modal/actions';

import AddMovieButton from './AddMovieButton';
import Topbar from './Topbar';
import Header from './Header';
import Logo from './Logo';

type RouteParams = {
  id: string;
};

function Home(props: RouteComponentProps<RouteParams>) {
  const [search, setSearch] = React.useState(() => {
    const queryParams = parse(props.location.search);
    return (queryParams.search as string) || '';
  });
  const dispatch = useDispatch();

  const isMoviePageActive = React.useMemo(
    () => !!matchPath(props.location.pathname, '/movie/:id'),
    [props.location.pathname],
  );

  const onSearchChange = (value: string) => {
    setSearch(value);
    dispatch(push(value ? `?searchBy=${'title'}&search=${value}` : ''));
  };

  const addMovieClick = React.useCallback(() => {
    const modalType = ModalTypes.ADD_MOVIE;
    const modalProps = {};
    dispatch(openModal({ modalType, modalProps }));
  }, [dispatch]);

  return (
    <>
      <Topbar className={isMoviePageActive ? 'dark' : ''}>
        <Header>
          <Logo>netflixRoulette</Logo>
          <Switch>
            <Route
              exact
              path="/movie/:id"
              component={() => (
                <IconLink to="/">
                  <FontAwesomeIcon icon={faSearch} />
                </IconLink>
              )}
            />
            <Route
              component={() => (
                <AddMovieButton
                  className={ButtonVariant.Default}
                  type="button"
                  onClick={addMovieClick}
                >
                  + Add Movie
                </AddMovieButton>
              )}
            />
          </Switch>
        </Header>

        <Switch>
          <Route exact path="/movie/:id" component={MoviePage} />
          <Route
            component={() => (
              <MovieSearch value={search} onSearchChange={onSearchChange} />
            )}
          />
        </Switch>
      </Topbar>

      <Movies />

      <Footer>
        <Logo>netflixRoulette</Logo>
      </Footer>
    </>
  );
}

export default Home;
