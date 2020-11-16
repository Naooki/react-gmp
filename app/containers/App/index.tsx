import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import styled, { ThemeProvider, theme } from 'styles/styled-components';
import Login from 'containers/Login';
import Home from 'containers/Home';
import NotFoundPage from 'containers/NotFoundPage';
import GlobalStyle from 'global-styles';
import Modal from 'containers/Modal';

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  z-index: 0;
`;

function App() {
  return (
    <ThemeProvider theme={theme.default}>
      <ModalContainer>
        <Switch>
          <Route exact path="/">
            <Redirect to="/search" />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route path="/(search|film)" component={Home} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
        <Modal />
      </ModalContainer>
    </ThemeProvider>
  );
}

export default App;
