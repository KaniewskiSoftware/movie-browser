import { useQueryParameter, searchQueryParamName } from "../../Header/Search/queryParameters";
import SearchTitle from "../SearchTitle";
import { Spinner, SpinnerBox, Wrapper } from "./styled";

const Loader = () => {
    const query = useQueryParameter(searchQueryParamName);

    return (
        <Wrapper>
            <SearchTitle title={!query ? "" : `Search results for "${query}"`} />
            <SpinnerBox hasTitle={!!query}>
                <Spinner />
            </SpinnerBox>
        </Wrapper>
    );
}

export default Loader;