import React from 'react';

interface Html {
  scripts: Array<string>;
  preloadedState: unknown;
}

export function Html({
  children,
  scripts,
  preloadedState,
}: React.PropsWithChildren<Html>) {
  const preloadedStringifiedState = `window.__PRELOADED_STATE__ = ${JSON.stringify(
    preloadedState,
  ).replace(/</g, '\\u003c')}`;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Netflix Roulette</title>
      </head>
      <body>
        <div id="root">{children}</div>
        <script>{preloadedStringifiedState}</script>
        {scripts.map((script, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <script src={script} key={index} defer />
        ))}
      </body>
    </html>
  );
}
