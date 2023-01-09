import {
  searchQueryParamName,
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../../core/queryParameters";
import svg from "./Search.svg";
import { Input, InputWrapper, Loupe } from "./styled";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { toMovie, toMovies, toPeople, toPerson } from "../../../core/App/routes";

const Search = () => {
  const location = useLocation();
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();
  const navigate = useNavigate();

  const setPage = (page) => {
    replaceQueryParameter({
      key: "page",
      value: page,
    });
  };

  const onInputChange = ({ target }) => {
    if (location.pathname.split("/")[1] === toMovie.split("/")[1]) {
      navigate({
        pathname: toMovies,
        search: createSearchParams({ [searchQueryParamName]: target.value }).toString()
      });
    } else if (location.pathname.split("/")[1] === toPerson.split("/")[1]) {
      navigate({
        pathname: toPeople,
        search: createSearchParams({ [searchQueryParamName]: target.value }).toString()
      });
    } else {
      setPage(1);
      replaceQueryParameter({
        key: searchQueryParamName,
        value: target.value.trim() !== "" ? target.value : "",
      });
    };
  };

  return (
    <InputWrapper>
      <Loupe src={svg} alt="Loupe" />
      <Input
        placeholder={
          location.pathname.includes("people")
            ? "Search for people..."
            : "Search for movies..."
        }
        value={query || ""}
        onChange={onInputChange}
      />
    </InputWrapper>
  );
};

export default Search;
