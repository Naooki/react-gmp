import { Request } from 'express';
import fetch from 'node-fetch';

import { Movie } from 'entities/Movie';

const API_URL = 'http://localhost:4000';

export async function calculateInitialState(req: Request) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { path, query } = req;
  const paths = path.split('/').slice(1);

  // movie items
  // eslint-disable-next-line prefer-const
  let items: Movie[] = [];
  let selectedItem: Movie | null = null;

  // if (paths[0].startsWith('search')) {
  //   const
  // }

  if (paths[0].startsWith('film')) {
    const id = paths[1];
    selectedItem = await fetch(`${API_URL}/movies/${id}`).then(res =>
      res.json(),
    );
  }

  return { movies: { items, selectedItem } };
}
