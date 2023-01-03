import { useLocation, useSearchParams } from "react-router-dom";

export const useQueryParameter = (key) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(key);
};

export const useReplaceQueryParameter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return ({ key, value }) => {
    if (!value) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    };
    setSearchParams(searchParams);
  };
};

export const searchQueryParamName = "search";