import { useQueryParameter, searchQueryParamName } from "../../../core/queryParameters";
import PageTitle from "../../PageTitle";
import { Spinner, SpinnerBox, Wrapper } from "./styled";

const Loader = () => {
    const query = useQueryParameter(searchQueryParamName);

    return (
        <Wrapper>
            <PageTitle title={!query ? "" : `Search results for "${query}"`} />
            <SpinnerBox hasTitle={!!query}>
                <Spinner />
            </SpinnerBox>
        </Wrapper>
    );
}

export default Loader;