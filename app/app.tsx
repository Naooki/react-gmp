import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from 'containers/App';

const MOUNT_NODE = document.getElementById('app') as HTMLElement;

const ConnectedApp = () => (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(<ConnectedApp />, MOUNT_NODE);
