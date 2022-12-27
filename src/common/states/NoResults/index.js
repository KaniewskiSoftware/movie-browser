import { Plane, PlaneBox, Wrapper } from "./styled";
import Header from "../Header";
import { useQueryParameter } from "../../Header/Search/queryParameters";

const NoResults = () => {
    const query = useQueryParameter();

    return (
        <Wrapper>
            <Header title={`Sorry, there are no results for ${query}`} />
            <PlaneBox>
                <Plane />
            </PlaneBox>
        </Wrapper>
    );
}

export default NoResults;