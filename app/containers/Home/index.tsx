import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Movies from 'containers/Movies';
import MoviePage from 'components/MoviePage';
import MovieSearch from 'components/MovieSearch';

function Home() {
  return (
    <>
      <section>
        <header>
          <h2 className="logo">netflixroulette</h2>
          <div>
            <button type="button">search</button>
          </div>
        </header>

        <Switch>
          <Route exact path="/movie/:id" component={MoviePage} />
          <Route component={MovieSearch} />
        </Switch>
      </section>

      <Movies />
    </>
  );
}

export default Home;
