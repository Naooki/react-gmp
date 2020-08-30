import { Movie } from 'entities/Movie';
import MovieGenre from 'entities/MovieGenre';

import img0 from 'assets/images/pulp-fiction.jpg';
import img1 from 'assets/images/bohemian-rhapsody.jpg';

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet nunc dolor. Quisque fringilla orci ac hendrerit lacinia. Maecenas tristique molestie quam, vel suscipit risus elementum sed. Curabitur et mi interdum purus bibendum pretium. Praesent non nisl ac erat viverra dictum. Aliquam neque eros, maximus ut ipsum non, molestie mattis dolor. Suspendisse mauris augue, consectetur quis tristique ac, elementum vel nisi. Aenean vehicula sem sem. Ut consectetur sagittis metus, non dictum lectus molestie et. Fusce sed sapien augue. Nulla blandit commodo quam sed tincidunt. Aliquam vitae ultrices felis, vel viverra tellus. Vestibulum fringilla nisi ligula, et pretium turpis dignissim ut. Ut porttitor feugiat hendrerit. In eu elit lacus.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque convallis suscipit tellus eleifend viverra. Vivamus luctus egestas magna vitae varius. Aliquam convallis congue vulputate. Vestibulum nec magna fringilla, imperdiet orci sed, volutpat massa. Fusce tincidunt accumsan lectus, vitae efficitur leo ornare vitae. Vestibulum ultrices, nulla ac pretium condimentum, mi turpis viverra purus, vel placerat nisi leo quis ligula. Integer ut purus ut ex rutrum feugiat. Nullam vulputate lobortis suscipit. Aliquam ullamcorper neque ut orci ullamcorper pretium. Fusce diam mauris, semper ut elit ut, rhoncus tristique dolor. Aliquam finibus nulla velit, et varius nunc pretium ac.

Ut massa enim, luctus eu consectetur id, fringilla mollis enim. Aliquam pharetra aliquam gravida. Duis nec risus et enim porta semper a nec velit. Praesent vitae faucibus dui. Pellentesque eget quam congue, iaculis lorem nec, scelerisque velit. Praesent diam tortor, dignissim a magna tincidunt, pulvinar ullamcorper velit. Vestibulum eget nisl sit amet augue accumsan dictum. Pellentesque ac lectus varius, mattis sem quis, auctor ante. Phasellus non ante arcu. Curabitur tempor pretium lobortis. Praesent ut libero porttitor, tincidunt risus a, dignissim est. Suspendisse enim magna, molestie vitae magna quis, faucibus semper felis.

Nullam tempus magna sed felis tincidunt, vitae sodales nibh aliquam. Suspendisse vitae vehicula tellus. Sed ut tortor vitae odio rutrum varius sed id lacus. Integer enim eros, bibendum vel ultricies at, suscipit ut nibh. Nam sem metus, porta et orci ac, maximus fermentum risus. Nulla metus magna, vestibulum id urna quis, varius mattis purus. Maecenas varius lacus at nibh scelerisque, consequat placerat nisl fringilla. Sed eget dui ornare, auctor leo eu, dictum magna.

Nulla aliquet massa nulla, vel dapibus nunc auctor imperdiet. Suspendisse rhoncus dui in odio lobortis sollicitudin. Donec blandit massa vitae quam condimentum, et sollicitudin diam venenatis. Morbi aliquet dignissim lectus ut imperdiet. Aenean ac efficitur orci, at efficitur neque. Aenean ullamcorper mauris eleifend lacus eleifend, nec elementum libero venenatis. Nulla urna dolor, finibus et lectus ut, interdum eleifend diam. Suspendisse id erat euismod, posuere urna vitae, luctus felis. Pellentesque eget tortor vel urna pellentesque egestas eu eu eros. Ut sollicitudin ac nisi vel volutpat. Phasellus sodales, tellus sed pellentesque varius, sapien ligula aliquam orci, imperdiet rhoncus libero diam eu neque. Phasellus in facilisis ligula.`;

const movies: Movie[] = [
  {
    id: 'test-id-0',
    releaseDate: '1994-01-14',
    title: 'Pulp fiction',
    imageUrl: img0,
    duration: 154,
    rating: 4.2,
    genres: [MovieGenre.Comedy, MovieGenre.Crime],
    about: lorem,
  },
  {
    id: 'test-id-1',
    releaseDate: '2018-01-11',
    about: 'Drama, Biography, Music',
    title: 'Bohemian Rhapsody',
    imageUrl: img1,
    duration: 154,
    rating: 4.0,
    genres: [MovieGenre.Documentary],
  },
  {
    id: 'test-id-2',
    releaseDate: '2003-04-05',
    about: 'Oscar winning movie',
    title: 'Kill Bill: Vol 2',
    duration: 154,
    rating: 4.2,
    genres: [MovieGenre.Comedy, MovieGenre.Crime],
  },
  {
    id: 'test-id-3',
    releaseDate: '2019-02-02',
    about: 'Action & Adventure',
    title: 'Avengers: War of Infinity',
    duration: 154,
    rating: 4.8,
    genres: [],
  },
  {
    id: 'test-id-4',
    releaseDate: '2014-03-06',
    about: 'Action & Adventure',
    title: 'Inception',
    duration: 154,
    rating: 4.6,
    genres: [],
  },
  {
    id: 'test-id-5',
    releaseDate: '1991-08-25',
    about: 'Oscar winning movie',
    title: 'Reservoir dogs',
    duration: 154,
    rating: 4.6,
    genres: [MovieGenre.Crime],
  },
];

export default movies;
