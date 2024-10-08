import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTk3Zjk2ZDlkMGUyMzEyZTFkOWQzYzY1MGU2MGRhNCIsIm5iZiI6MTcyODQwMDcxOS4yNzE0MzIsInN1YiI6IjY3MDUzZjZlNWY5NTg5MjQ4OGMwMjRjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yvBWMYaxIkDg4ygF37nUWJZ61y5ccP7_xVFf-aJg0mk",
  },
};

export const getTrendingMovies = async () => {
  const trendUrl =
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

  const trendResponse = await axios.get(trendUrl, options);
  return trendResponse.data.results;
};

export const getMovieDetails = async (id) => {
  const detailsUrl = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  const detailsResponse = await axios.get(detailsUrl, options);
  return detailsResponse.data;
};

export const getSearchMovies = async (word) => {
  const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${word}&include_adult=false&language=en-US&page=1`;

  const searchResponse = await axios.get(searchUrl, options);
  return searchResponse.data.results;
};

export const getCreaditsOfMovie = async (id) => {
  const creaditsUrl = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;

  const creaditsResponse = await axios.get(creaditsUrl, options);
  return creaditsResponse.data.cast;
};

export const getReviewsOfMovie = async (id) => {
  const reviewsUrl = `https://api.themoviedb.org/3/movie/${id}}/reviews?language=en-US&page=1`;

  const reviewsResponse = await axios.get(reviewsUrl, options);
  return reviewsResponse.data.results;
};
