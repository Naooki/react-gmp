import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from 'containers/Login';
import Home from 'containers/Home';
import NotFoundPage from 'containers/NotFoundPage';

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/" component={Home} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default App;
