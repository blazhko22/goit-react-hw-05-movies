import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd0d0c76743394dffaefbccf1872ae919';

const fetchTrendingMovies = () => {
  return axios
    .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.data.results);
};

const fetchSearchMovies = searchQuery => {
  return axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
    )
    .then(response => response.data.results);
};

const fetchMovie = id => {
  return axios
    .get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=images&language=en-US`,
    )
    .then(response => response.data);
};

const fetchCast = id => {
  return axios
    .get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
};

const fetchReviews = id => {
  return axios
    .get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
};

const movieApi = {
  fetchTrendingMovies,
  fetchSearchMovies,
  fetchMovie,
  fetchCast,
  fetchReviews,
};

export default movieApi;

// const fetchTrendingMovies = () => {
//   return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`).then(
//     response => response.json(),
//   );
// };

// const fetchSearchMovies = searchQuery => {
//   return fetch(
//     `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=true`,
//   ).then(response => response.json());
// };

// const fetchMovie = id => {
//   return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`).then(
//     response => response.json(),
//   );
// };

// const fetchCast = id => {
//   return fetch(
//     `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
//   ).then(response => response.json());
// };

// const fetchReviews = id => {
//   return fetch(
//     `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
//   ).then(response => response.json());
// };

// const movieApi = {
//   fetchTrendingMovies,
//   fetchSearchMovies,
//   fetchMovie,
//   fetchCast,
//   fetchReviews,
// };

// export default movieApi;

// export async function fetchTrending() {
//   return fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=0fbf6f1a4cbaabd00dcc7bb0f87f0a26').then(
//     response => response.json(),
//   );
// }

// export async function fetchByName(query) {
//   return fetch(
//     `https://api.themoviedb.org/3/search/movie?api_key=0fbf6f1a4cbaabd00dcc7bb0f87f0a26&language=en-US&query=${query}&page=1&include_adult=true`,
//   ).then(response => response.json());
// }

// export async function fetchById(id) {
//   return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0fbf6f1a4cbaabd00dcc7bb0f87f0a26&language=en-US`).then(
//     response => response.json(),
//   );
// }

// export async function fetchCredits(id) {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}/credits?api_key=0fbf6f1a4cbaabd00dcc7bb0f87f0a26&language=en-US`,
//   ).then(response => response.json());
// }

// export async function fetchReviews(id) {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=0fbf6f1a4cbaabd00dcc7bb0f87f0a26&language=en-US&page=1`,
//   ).then(response => response.json());
// }