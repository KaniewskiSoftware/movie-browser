import { useSelector } from "react-redux";
import { Wrapper } from "../../../../common/Wrapper";
import { selectPersonDetails } from "../../personDetailsSlice";

const Person = () => {
    const personDetails = useSelector(selectPersonDetails);
    return (
        <Wrapper>
            {personDetails.name}
        </Wrapper>
    );
};

export default Person;