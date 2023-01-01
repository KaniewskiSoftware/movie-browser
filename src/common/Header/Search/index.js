import { useDispatch } from "react-redux";
import { searchQueryParamName, useQueryParameter, useReplaceQueryParameter } from "../../../core/queryParameters";
import svg from "./Search.svg"
import { Input, InputWrapper, Loupe } from "./styled";
import { isQuery } from "../../../features/movieList/movieListSlice";

const Search = () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();
    const dispatch = useDispatch();
    const setPage = (page) => {
        replaceQueryParameter({
            key: "page",
            value: page,
        });
    };

    const onInputChange = ({ target }) => {
        dispatch(isQuery());
        setPage(1);
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : "",
        });

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