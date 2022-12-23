import { apiKey } from "../../common/apiData/apiKey";
import {apiLink} from "../../common/apiData/apiLink";

export const getMovies = async () => {
  const response = await fetch(`${apiLink}/movie/popular?api_key=${apiKey}`);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};

export const getGenres = async () => {
  const response = await fetch(`${apiLink}/genre/movie/list?api_key=${apiKey}`);
  
  if(!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
}