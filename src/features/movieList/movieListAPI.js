import { apiKey } from "../../common/apiData/apiKey";
import { apiLink } from "../../common/apiData/apiLink";

export const getMovies = async () => {
  const response = await fetch(
    `${apiLink}/movie/popular?api_key=${apiKey}&page=${page}&language=en`
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};

export const getGenres = async () => {
  const response = await fetch(`${apiLink}/genre/movie/list?api_key=${apiKey}`);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};

const getMoviesByQuery = async (query) => {
  if (!query) {
    return;
  }

  const response = await fetch(`${apiLink}search/movie?api_key=${apiKey}&language=en-US&query=${query}`);

  const movies = await response.json();

  return movies;
};

export const getMovies = (query) => {
  if (!!query) {
    return getMoviesByQuery(query);
  }

  return getPopularMovies();
};