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
import Modal from 'containers/Modal';
import AddMovie from 'containers/AddMovie';
import { ButtonVariant } from 'components/Button';

import AddMovieButton from './AddMovieButton';
import Topbar from './Topbar';
import Header from './Header';
import Logo from './Logo';

type RouteParams = {
  id: string;
};

function Home(props: RouteComponentProps<RouteParams>) {
  const [showModal, toggleModal] = React.useState(false);
  const [search, setSearch] = React.useState(() => {
    const queryParams = parse(props.location.search);
    return (queryParams.search as string) || '';
  });
  const dispatch = useDispatch();

  const isMoviePageActive = React.useMemo(
    () => !!matchPath(props.location.pathname, '/movie/:id'),
    [props.location.pathname],
  );

  // const [searchBy] = React.useState('title');

  const onSearchChange = (value: string) => {
    setSearch(value);
    dispatch(push(value ? `?searchBy=${'title'}&search=${value}` : ''));
  };

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
                  onClick={() => toggleModal(true)}
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

      {showModal && (
        <Modal onClose={() => toggleModal(false)}>
          <AddMovie />
        </Modal>
      )}
    </>
  );
}

export default Home;
