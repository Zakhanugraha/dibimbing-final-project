
const API_URL = 'http://localhost:9000/';
// const API_URL = 'https://api-movie-react.herokuapp.com/';

const SEARCH_BASE_URL = `${API_URL}movies/search?key=`;
const POPULAR_BASE_URL = `${API_URL}movies/popular`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
