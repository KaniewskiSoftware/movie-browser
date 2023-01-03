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