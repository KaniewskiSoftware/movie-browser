import { apiKey } from "../../common/apiData/apiKey";
import { apiLink } from "../../common/apiData/apiLink";

export const getMovieDetails = async (id) => {
  const response = await fetch(
    `${apiLink}/movie/${id}?api_key=${apiKey}&language=en`
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
