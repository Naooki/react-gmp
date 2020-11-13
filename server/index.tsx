import fs from 'fs';
import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';

import configureStore from 'configureStore';
import App from 'containers/App';
import { Html } from './Html';
import { calculateInitialState } from './state';

const port = 3000;
const server = express();
const jsFiles: Array<string> = [];

const assetsDir = path.resolve(process.cwd(), 'build', 'assets');

fs.readdirSync(assetsDir).forEach(file => {
  if (file.split('.').pop() === 'js') {
    jsFiles.push(`/assets/${file}`);
  }
});

server.use('/assets', express.static(assetsDir));

server.get('*', async (req, res) => {
  const initialState = await calculateInitialState(req);

  const { store } = configureStore(initialState, req.url);
  const preloadedState = store.getState();

  const sheet = new ServerStyleSheet();
  const AppCollectedStyles = sheet.collectStyles(<App />);

  const nodeStream = ReactDOMServer.renderToNodeStream(
    <Html scripts={jsFiles} preloadedState={preloadedState}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          {AppCollectedStyles}
        </StaticRouter>
      </Provider>
    </Html>,
  );

  sheet.interleaveWithNodeStream(nodeStream).pipe(res);
});

server.listen(port, () => console.log(`Listening on port ${port}`));
