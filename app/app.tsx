import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import configureStore from 'configureStore';
import App from 'containers/App';
import { ThemeProvider, theme } from 'styles/styled-components';
import history from 'utils/history';

const MOUNT_NODE = document.getElementById('app') as HTMLElement;

// Create redux store with history
const initialState = {};
const store = configureStore(initialState);

const ConnectedApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme.default}>
        <App />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<ConnectedApp />, MOUNT_NODE);
