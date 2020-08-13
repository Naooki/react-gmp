import { Movie } from 'entities/Movie';

import img0 from 'assets/images/pulp-fiction.jpg';
import img1 from 'assets/images/bohemian-rhapsody.jpg';

const movies: Movie[] = [
  {
    id: 'test-id-0',
    releaseDate: '1994-01-14',
    about: 'Action & Adventure',
    title: 'Pulp fiction',
    imageUrl: img0,
    duration: 154,
    rating: 4.2,
  },
  {
    id: 'test-id-1',
    releaseDate: '2018-01-11',
    about: 'Drama, Biography, Music',
    title: 'Bohemian Rhapsody',
    imageUrl: img1,
    duration: 154,
    rating: 4.0,
  },
  {
    id: 'test-id-2',
    releaseDate: '2003-04-05',
    about: 'Oscar winning movie',
    title: 'Kill Bill: Vol 2',
    duration: 154,
    rating: 4.2,
  },
  {
    id: 'test-id-3',
    releaseDate: '2019-02-02',
    about: 'Action & Adventure',
    title: 'Avengers: War of Infinity',
    duration: 154,
    rating: 4.8,
  },
  {
    id: 'test-id-4',
    releaseDate: '2014-03-06',
    about: 'Action & Adventure',
    title: 'Inception',
    duration: 154,
    rating: 4.6,
  },
  {
    id: 'test-id-5',
    releaseDate: '1991-08-25',
    about: 'Oscar winning movie',
    title: 'Reservoir dogs',
    duration: 154,
    rating: 4.6,
  },
];

export default movies;
