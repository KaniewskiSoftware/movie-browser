import { Plane, PlaneBox, Wrapper } from "./styled";
import Header from "../Header";

const NoResults = () => (
    <Wrapper>
        <Header title={`Sorry, there are no results for “Muan”`} />
        <PlaneBox>
            <Plane />
        </PlaneBox>
    </Wrapper>
);

export default NoResults;