import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Movies from 'containers/Movies';
import MoviePage from 'components/MoviePage';
import MovieSearch from 'components/MovieSearch';
import Footer from 'components/Footer';
import IconLink from 'components/IconLink';
import SecondaryButton from 'components/SecondaryButton';
import Modal from 'components/Modal';

import Topbar from './Topbar';
import Header from './Header';
import Logo from './Logo';

function Home() {
  const [showModal, toggleModal] = React.useState(false);

  return (
    <>
      <Topbar>
        <Header>
          <Logo>netflixRoulette</Logo>
          <Switch>
            <Route
              exact
              path="/movie/:id"
              component={() => <IconLink to="/">search</IconLink>}
            />
            <Route
              component={() => (
                <SecondaryButton onClick={() => toggleModal(true)}>
                  + Add Movie
                </SecondaryButton>
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

      <Modal show={showModal} handleClose={() => toggleModal(false)}>
        Some modal content.
      </Modal>
    </>
  );
}

export default Home;
