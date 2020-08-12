import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from 'containers/App';
import { ThemeProvider, theme } from 'styles/styled-components';

const MOUNT_NODE = document.getElementById('app') as HTMLElement;

const ConnectedApp = () => (
  <Router>
    <ThemeProvider theme={theme.default}>
      <App />
    </ThemeProvider>
  </Router>
);

ReactDOM.render(<ConnectedApp />, MOUNT_NODE);
