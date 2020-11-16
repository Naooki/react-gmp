import { createMemoryHistory, createBrowserHistory } from 'history';

export default function createHistory(url?: string) {
  return url
    ? createMemoryHistory({
        initialEntries: [url],
      })
    : createBrowserHistory();
}
