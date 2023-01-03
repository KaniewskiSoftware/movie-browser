import PageTitle from "../../../../common/PageTitle";
import { Wrapper } from "../../../../common/Wrapper";
import { CreditContainer, CreditTiles } from "../../../../common/Credits/CreditEssentials";
import Credits from "../../../../common/Credits";
import { useSelector } from "react-redux";
import { selectPeople, selectTotalPages } from "../../peopleSlice";
import Footer from "../../../../common/Footer";

const People = () => {
    const people = useSelector(selectPeople);
    const totalPages = useSelector(selectTotalPages);

    return (
        <>
            <Wrapper>
                <CreditContainer>
                    <PageTitle title={"Popular people"} />
                    <CreditTiles>
                        {people.map((person) => (
                            <Credits
                                key={person.id}
                                path={person.profile_path}
                                name={person.name}
                            />
                        ))}
                    </CreditTiles>
                </CreditContainer>
                <CreditContainer></CreditContainer>
            </Wrapper>
            <Footer
                totalPages={totalPages}
            />
        </>
    );
};

export default People;