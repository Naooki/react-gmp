import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import styled from 'styles/styled-components';
import Login from 'containers/Login';
import Home from 'containers/Home';
import NotFoundPage from 'containers/NotFoundPage';
import GlobalStyle from 'global-styles';
import Modal from 'containers/Modal';

const ModalContainer = styled.div`
  position: relative;
  z-index: 0;
`;

function App() {
  return (
    <ModalContainer>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
      <Modal />
    </ModalContainer>
  );
}

export default App;
