import axios from "axios";
import { apiKey } from "./apiKey";
import { apiLink } from "./apiLink";

export const getPersonDetails = async (id) => {
  const response = await axios.get(
    `${apiLink}/person/${id}?api_key=${apiKey}&language=en`
  );

  return await response.data;
};

export const getPersonCredits = async (id) => {
  const response = await axios.get(
    `${apiLink}/person/${id}/movie_credits?api_key=${apiKey}&language=en`
  );

  return await response.data;
};

export const getMovies = async (page) => {
  const response = await axios.get(
    `${apiLink}/movie/popular?api_key=${apiKey}&page=${page}&language=en`
  );

  return await response.data;
};

export const getGenres = async () => {
  const response = await axios.get(`${apiLink}/genre/movie/list?api_key=${apiKey}`);

  return await response.data;
};

export const getMoviesByQuery = async (query, page) => {
  if (!query) {
    return;
  }
  const response = await axios.get(
    `${apiLink}/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}`
  );

  return await response.data;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(
    `${apiLink}/movie/${id}?api_key=${apiKey}&language=en`
  );

  return await response.data;
};

export const getCredits = async (id) => {
  const response = await axios.get(
    `${apiLink}/movie/${id}/credits?api_key=${apiKey}&language=en`
  );

  return await response.data;
};

export const getPeople = async (page) => {
  const response = await axios.get(
    `${apiLink}/person/popular?api_key=${apiKey}&page=${page}&language=en`
  );

  return await response.data;
};

export const getPeopleByQuery = async (query, page) => {
  if (!query) {
    return;
  }
  const response = await axios.get(
    `${apiLink}/search/person?api_key=${apiKey}&language=en-US&query=${query}&page=${page}`
  );

  return await response.data;
};
