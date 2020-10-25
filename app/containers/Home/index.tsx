import * as React from 'react';
import {
  Switch,
  Route,
  matchPath,
  RouteComponentProps,
} from 'react-router-dom';
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
import { movieSearchChange } from 'containers/Movies/actions';
import Logo from 'components/Logo';

import AddMovieButton from './AddMovieButton';
import Topbar from './Topbar';
import Header from './Header';

type RouteParams = {
  id: string;
};

// TEMP: Only search by title now
const searchBy = 'title';

function Home(props: RouteComponentProps<RouteParams>) {
  const [searchStr, setSearch] = React.useState(() => {
    const queryParams = parse(props.location.search);
    return (queryParams.search as string) || '';
  });
  const dispatch = useDispatch();

  const isMoviePageActive = React.useMemo(
    () => !!matchPath(props.location.pathname, '/film/:id'),
    [props.location.pathname],
  );

  const onSearchChange = (search: string) => {
    setSearch(search);
    dispatch(movieSearchChange(search ? { searchBy, search } : {}));
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
              path="/film/:id"
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
          <Route exact path="/film/:id" component={MoviePage} />
          <Route
            component={() => (
              <MovieSearch value={searchStr} onSearchChange={onSearchChange} />
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
