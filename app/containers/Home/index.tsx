import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { matchPath, RouteComponentProps } from 'react-router';

import Movies from 'containers/Movies';
import MoviePage from 'components/MoviePage';
import MovieSearch from 'components/MovieSearch';
import Footer from 'components/Footer';
import IconLink from 'components/IconLink';
import Modal from 'components/Modal';
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

  const isMoviePageActive = React.useMemo(
    () => !!matchPath(props.location.pathname, '/movie/:id'),
    [props.location.pathname],
  );

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
          <Route component={MovieSearch} />
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
