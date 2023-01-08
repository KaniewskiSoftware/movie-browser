import { useSelector } from "react-redux";
import MovieTiles from "../../../../common/MovieTiles";
import { Wrapper } from "../../../../common/Wrapper";
import { selectCredits, selectPersonDetails } from "../../personDetailsSlice";

const Person = () => {
    const personDetails = useSelector(selectPersonDetails);
    const personCredits = useSelector(selectCredits);

    return (
        <Wrapper>
            {personDetails.name}
            CAST:
            <MovieTiles
                movies={personCredits.cast}
                genres={personCredits.cast.genres_ids}
            />
            CREW:
            <MovieTiles
                movies={personCredits.crew}
                genres={personCredits.crew.genres_ids}
            />
        </Wrapper>
    );
};

export default Person;