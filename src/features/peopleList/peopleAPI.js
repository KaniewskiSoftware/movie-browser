import { apiKey } from "../../common/apiData/apiKey";
import { apiLink } from "../../common/apiData/apiLink";

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
