import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
} from './config';

const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}?page=${page}`;
    let a = endpoint
    await console.log(a)
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async movieId => {
    const endpoint = `${API_URL}movies/get/${movieId}`;
    await console.log(await (await fetch(endpoint)).json())
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async movieId => {
    const creditsEndpoint = `${API_URL}movies/cast/${movieId}`;
    return await (await fetch(creditsEndpoint)).json();
  },
};

export default apiSettings;
