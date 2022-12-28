import { useQueryParameter, searchQueryParamName } from "../../Header/Search/queryParameters";
import Header from "../Header";
import { Spinner, SpinnerBox, Wrapper } from "./styled";

const Loader = () => {
    const searchQuery = useQueryParameter(searchQueryParamName);

    return (
        <Wrapper>
            <Header title={!searchQuery ? "" : `Search results for "${searchQuery}"`} />
            <SpinnerBox hasTitle={!!searchQuery}>
                <Spinner />
            </SpinnerBox>
        </Wrapper>
    );
}

export default Loader;