import { Movie } from 'entities/Movie';

export type MovieFormModel = {
  [key in keyof Movie]?: number | string | string[];
};
