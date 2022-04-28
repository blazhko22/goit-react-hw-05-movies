const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd0d0c76743394dffaefbccf1872ae919';

export async function fetchTrending() {
  return fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`).then(
    response => response.json(),
  );
}

export async function fetchByName(query) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=true`,
  ).then(response => response.json());
}

export async function fetchById(id) {
  return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`).then(
    response => response.json(),
  );
}

export async function fetchCredits(id) {
  return fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
  ).then(response => response.json());
}

export async function fetchReviews(id) {
  return fetch(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  ).then(response => response.json());
}
