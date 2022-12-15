import Header from "../Header";
import { Spinner } from "./styled";

const Loader = () => (
    <>
        <Header title={`Search results for “Mulan”`} />
        <Spinner />
    </>
);

export default Loader;