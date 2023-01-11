import axios from "axios";

export const getData = async (apiURL) => {
  const response = await axios.get(apiURL);

  return await response.data;
};