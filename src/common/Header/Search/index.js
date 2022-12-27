import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import svg from "./Search.svg"
import searchQueryParamName from "./searchQueryParamName";
import { Input, InputWrapper, Loupe } from "./styled";

const Search = () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
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