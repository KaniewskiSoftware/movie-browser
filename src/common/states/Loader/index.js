import Header from "../Header";
import { Spinner, SpinnerBox, Wrapper } from "./styled";

const Loader = () => (
    <Wrapper>
        <Header title={`Search results for “Mulan”`} />
        <SpinnerBox>
            <Spinner />
        </SpinnerBox>
    </Wrapper>
);

export default Loader;