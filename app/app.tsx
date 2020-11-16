import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { loadableReady } from '@loadable/component';

import configureStore from 'configureStore';
import App from 'containers/App';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

// eslint-disable-next-line no-underscore-dangle
const preloadedState = (window as any).__PRELOADED_STATE__;
console.log(preloadedState);

// eslint-disable-next-line no-underscore-dangle
delete (window as any).__PRELOADED_STATE__;

// Create redux store with history
const initialState = {};
const { store, history } = configureStore(preloadedState || initialState);

const ConnectedApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

loadableReady(() => {
  ReactDOM.hydrate(<ConnectedApp />, MOUNT_NODE);
});
