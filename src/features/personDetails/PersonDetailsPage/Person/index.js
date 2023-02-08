import { useSelector } from "react-redux";
import DetailsTile from "../../../../common/DetailsTile";
import MovieTiles from "../../../../common/MovieTiles";
import Title from "../../../../common/Title";
import { Wrapper } from "../../../../common/Wrapper";
import { selectCredits, selectPersonDetails } from "../../personDetailsSlice";
import { DetailsWrapper } from "./styled";

const Person = () => {
    const personDetails = useSelector(selectPersonDetails);
    const personCredits = useSelector(selectCredits);

    return (
        <Wrapper>
            <DetailsWrapper>
                <DetailsTile
                    poster={personDetails.profile_path}
                    title={personDetails.name}
                    dateBirth={personDetails.birthday}
                    placeBirth={personDetails.place_of_birth}
                    description={personDetails.biography}
                />
                {personCredits.cast.length > 0 ? <>
                    <Title
                        title={`Movies - cast (${personCredits.cast.length})`}
                        credits
                        tag
                    />
                    <MovieTiles
                        movies={personCredits.cast}
                    />
                </>
                    : null
                }
                {personCredits.crew.length > 0 ? <>
                    <Title
                        title={`Movies - crew (${personCredits.crew.length})`}
                        credits
                        tag
                    />
                    <MovieTiles
                        movies={personCredits.crew}
                    />
                </>
                    : null
                }
            </DetailsWrapper>
        </Wrapper>
    );
};

export default Person;
