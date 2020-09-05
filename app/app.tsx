import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configureStore from 'configureStore';
import App from 'containers/App';
import { ThemeProvider, theme } from 'styles/styled-components';

const MOUNT_NODE = document.getElementById('app') as HTMLElement;

// Create redux store with history
const initialState = {};
const store = configureStore(initialState);

const ConnectedApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme.default}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<ConnectedApp />, MOUNT_NODE);
