import { apiKey } from "../../common/apiData/apiKey";
import { apiLink } from "../../common/apiData/apiLink";

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