import { Request } from 'express';
import fetch from 'node-fetch';
import { stringify } from 'query-string';

import { Movie } from 'entities/Movie';

const API_URL = 'http://localhost:4000';

export async function calculateInitialState(req: Request) {
  const { path, query } = req;
  const paths = path.split('/').slice(1);

  // movie items
  // eslint-disable-next-line prefer-const
  let items: Movie[] = [];
  let selectedItem: Movie | null = null;

  if (paths[0].startsWith('search')) {
    const queryParams = stringify(query);
    items = await fetch(`${API_URL}/movies?${queryParams}`)
      .then(res => res.json())
      .then(res => res.data);
  }

  if (paths[0].startsWith('film')) {
    const id = paths[1];
    selectedItem = await fetch(`${API_URL}/movies/${id}`).then(res =>
      res.json(),
    );
  }

  return { movies: { items, selectedItem } };
}
