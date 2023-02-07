import axios from "axios";
import {apiLink} from "./apiLink";
import {apiKey} from "./apiKey";
import {apiLanguage} from "./apiLanguage";


const makeApiCall = async (url) => {
	const response = await axios.get(url);
	
	return await response.data;
};

export const getPersonDetails = async (id) => {
	return makeApiCall(`${apiLink}/person/${id}${apiKey}${apiLanguage}`);
};

export const getPersonCredits = async (id) => {
	return makeApiCall(`${apiLink}/person/${id}/movie_credits${apiKey}${apiLanguage}`);
};

export const getMovies = async (page) => {
	return makeApiCall(`${apiLink}/movie/popular${apiKey}&page=${page}${apiLanguage}`);
};

export const getGenres = async () => {
	return makeApiCall(`${apiLink}/genre/movie/list${apiKey}`);
};

export const getMoviesByQuery = async (query, page) => {
	if (!query) {
		return;
	}
	return makeApiCall(`${apiLink}/search/movie${apiKey}${apiLanguage}&query=${query}&page=${page}`);
};

export const getMovieDetails = async (id) => {
	return makeApiCall(`${apiLink}/movie/${id}${apiKey}${apiLanguage}`);
};

export const getCredits = async (id) => {
	return makeApiCall(`${apiLink}/movie/${id}/credits${apiKey}${apiLanguage}`);
};

export const getPeople = async (page) => {
	return makeApiCall(`${apiLink}/person/popular${apiKey}&page=${page}${apiLanguage}`);
};

export const getPeopleByQuery = async (query, page) => {
	if (!query) {
		return;
	}
	return makeApiCall(`${apiLink}/search/person${apiKey}${apiLanguage}&query=${query}&page=${page}`);
};
