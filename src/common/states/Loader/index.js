import { useQueryParameter } from "../../Header/Search/queryParameters";
import Header from "../Header";
import { Spinner, SpinnerBox, Wrapper } from "./styled";

const Loader = () => {
    const query = useQueryParameter();

    return (
        <Wrapper>
            <Header title={"Search results for ?{query}"} />
            <SpinnerBox>
                <Spinner />
            </SpinnerBox>
        </Wrapper>
    );
}

export default Loader;