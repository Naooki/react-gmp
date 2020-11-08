import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import configureStore from 'configureStore';
import App from 'containers/App';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

// Create redux store with history
const initialState = {};
const { store, history } = configureStore(initialState);

const ConnectedApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

document.addEventListener(
  'DOMContentLoaded',
  () => {
    ReactDOM.hydrate(<ConnectedApp />, MOUNT_NODE);
  },
  { once: true },
);
