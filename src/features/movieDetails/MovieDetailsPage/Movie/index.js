import { useSelector } from "react-redux";
import { Wrapper } from "../../../../common/Wrapper";
import { selectCredits, selectMovieDetails } from "../../movieDetailsSlice";
import { DetailsWrapper } from "./styled";
import {
  CreditContainer,
  CreditHeader,
  CreditTiles,
} from "../../../../common/Credits/CreditEssentials";
import Backdrop from "./Backdrop";
import DetailsTile from "../../../../common/DetailsTile";
import Credits from "../../../../common/Credits";

const Movie = () => {
  const movieDetails = useSelector(selectMovieDetails);
  const credits = useSelector(selectCredits);

  return (
    <>
      {movieDetails.backdrop_path && (
        <Backdrop
          backdrop={movieDetails.backdrop_path}
          title={movieDetails.original_title}
          vote={movieDetails.vote_average}
          votes={movieDetails.vote_count}
        />
      )}
      <Wrapper>
        <DetailsWrapper>
          <DetailsTile
            poster={movieDetails.poster_path}
            title={movieDetails.original_title}
            release={movieDetails.release_date}
            production={movieDetails.production_countries}
            genres={movieDetails.genres}
            vote={movieDetails.vote_average}
            votes={movieDetails.vote_count}
            description={movieDetails.overview}
          />

          {credits.cast.length > 0 && (
            <CreditContainer>
              <CreditHeader>Cast</CreditHeader>
              <CreditTiles>
                {credits.cast.map((actor) => (
                  <Credits
                    key={actor.credit_id}
                    path={actor.profile_path}
                    name={actor.original_name}
                    role={actor.character}
                    id={actor.id}
                  />
                ))}
              </CreditTiles>
            </CreditContainer>
          )}
          
          {credits.crew.length > 0 && (
            <CreditContainer>
              <CreditHeader>Crew</CreditHeader>
              <CreditTiles>
                {credits.crew.map((member) => (
                  <Credits
                    key={member.credit_id}
                    path={member.profile_path}
                    name={member.original_name}
                    role={member.job}
                    id={member.id}
                  />
                ))}
              </CreditTiles>
            </CreditContainer>
          )}

        </DetailsWrapper>
      </Wrapper>
    </>
  );
};

export default Movie;
