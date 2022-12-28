import { useDispatch } from "react-redux";
import { fetchMovies, isQuery } from "../../../features/movieList/movieListSlice";
import { searchQueryParamName, useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import svg from "./Search.svg"
import { Input, InputWrapper, Loupe } from "./styled";

const Search = () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();
    const dispatch = useDispatch();

    const onInputChange = ({ target }) => {
        dispatch(isQuery());
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        }); setTimeout(() => {
            dispatch(fetchMovies());
        }, 1000);
    };

    return (
        <InputWrapper>
            <Loupe src={svg} />
            <Input
                placeholder="Search for movies..."
                value={query || ""}
                onChange={onInputChange} />
        </InputWrapper>
    );
};

export default Search;