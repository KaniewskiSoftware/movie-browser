import { Plane, PlaneBox, Wrapper } from "./styled";
import PageTitle from "../../PageTitle";
import { searchQueryParamName, useQueryParameter } from "../../../core/queryParameters";

const NoResults = () => {
    const query = useQueryParameter(searchQueryParamName);

    return (
        <Wrapper>
            <PageTitle title={`Sorry, there are no results for "${query}"`} />
            <PlaneBox>
                <Plane />
            </PlaneBox>
        </Wrapper>
    );
}

export default NoResults;