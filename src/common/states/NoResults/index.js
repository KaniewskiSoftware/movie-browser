import { Plane, PlaneBox, Wrapper } from "./styled";
import SearchTitle from "../SearchTitle";
import { searchQueryParamName, useQueryParameter } from "../../Header/Search/queryParameters";

const NoResults = () => {
    const query = useQueryParameter(searchQueryParamName);

    return (
        <Wrapper>
            <SearchTitle title={`Sorry, there are no results for "${query}"`} />
            <PlaneBox>
                <Plane />
            </PlaneBox>
        </Wrapper>
    );
}

export default NoResults;