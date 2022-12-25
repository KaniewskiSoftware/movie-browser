import svg from "./Search.svg"
import { Input, InputWrapper, Loupe } from "./styled";

const Search = () => {

    return (
        <InputWrapper>
            <Loupe src={svg} />
            <Input placeholder="Search for movies..." />
        </InputWrapper>
    );
};

export default Search;