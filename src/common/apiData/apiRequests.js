import { apiKey } from "./apiKey";
import { apiLink } from "./apiLink";

export const getPersonDetails = async (id) => {
  const response = await fetch(
    `${apiLink}/person/${id}?api_key=${apiKey}&language=en`
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};

export const getPersonCredits = async (id) => {
  const response = await fetch(
    `${apiLink}/person/${id}/movie_credits?api_key=${apiKey}&language=en`
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};

export const getMovies = async (page) => {
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

export const getMoviesByQuery = async (query, page) => {
  if (!query) {
    return;
  }
  const response = await fetch(
    `${apiLink}/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}`
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};

export const getMovieDetails = async (id) => {
  const response = await fetch(
    `${apiLink}/movie/${id}?api_key=${apiKey}&language=en`
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};

export const getCredits = async (id) => {
  const response = await fetch(
    `${apiLink}/movie/${id}/credits?api_key=${apiKey}&language=en`
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};

export const getPeople = async (page) => {
  const response = await fetch(
    `${apiLink}/person/popular?api_key=${apiKey}&page=${page}&language=en`
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};

export const getPeopleByQuery = async (query, page) => {
  if (!query) {
    return;
  }
  const response = await fetch(
    `${apiLink}/search/person?api_key=${apiKey}&language=en-US&query=${query}&page=${page}`
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
