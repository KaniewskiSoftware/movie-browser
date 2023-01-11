import Title from "../../../../common/Title";
import { Wrapper } from "../../../../common/Wrapper";
import {
  CreditContainer,
  CreditTiles,
} from "../../../../common/Credits/CreditEssentials";
import Credits from "../../../../common/Credits";
import { useSelector } from "react-redux";
import {
  selectPeople,
  selectTotalPages,
  selectTotalResults,
} from "../../peopleSlice";
import Footer from "../../../../common/Footer";
import {
  searchQueryParamName,
  useQueryParameter,
} from "../../../../core/queryParameters";
import NoResults from "../../../../common/states/NoResults";

const People = () => {
  const people = useSelector(selectPeople);
  const totalPages = useSelector(selectTotalPages);
  const totalResults = useSelector(selectTotalResults);
  const query = useQueryParameter(searchQueryParamName);

  return totalResults === 0 ? (
    <NoResults />
  ) : (
    <>
      <Wrapper>
        <CreditContainer>
          <Title
            title={
              !query
                ? "Popular people"
                : `Search results for "${query}" (${totalResults})`
            }
          />
          <CreditTiles>
            {people.map((person) => (
              <Credits
                key={person.id}
                path={person.profile_path}
                name={person.name}
                id={person.id}
              />
            ))}
          </CreditTiles>
        </CreditContainer>
      </Wrapper>
      <Footer totalPages={totalPages} />
    </>
  );
};

export default People;
