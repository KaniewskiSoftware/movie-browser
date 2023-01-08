import { useSelector } from "react-redux";
import MovieTiles from "../../../../common/MovieTiles";
import Title from "../../../../common/Title";
import { Wrapper } from "../../../../common/Wrapper";
import { selectCredits, selectPersonDetails } from "../../personDetailsSlice";

const Person = () => {
    const personDetails = useSelector(selectPersonDetails);
    const personCredits = useSelector(selectCredits);

    return (
        <Wrapper>
            {personDetails.name}
            <Title
                title={`Movies - cast (${personCredits.cast.length})`}
            />
            <MovieTiles
                movies={personCredits.cast}
                genres={personCredits.cast.genres_ids}
            />
            <Title
                title={`Movies - crew (${personCredits.crew.length})`}
            />
            <MovieTiles
                movies={personCredits.crew}
                genres={personCredits.crew.genres_ids}
            />
        </Wrapper>
    );
};

export default Person;