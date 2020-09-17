import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from 'containers/Login';
import Home from 'containers/Home';
import NotFoundPage from 'containers/NotFoundPage';
import GlobalStyle from 'global-styles';
import { ModalProvider } from 'containers/Modal';

function App() {
  return (
    <ModalProvider>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </ModalProvider>
  );
}

export default App;
