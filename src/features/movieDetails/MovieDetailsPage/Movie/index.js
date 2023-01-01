import { useSelector } from "react-redux";
import { Wrapper } from "../../../../common/Wrapper";
import { selectCredits, selectMovieDetails } from "../../movieDetailsSlice";
import {
  DetailsWrapper,
  Container,
  SubHeader,
  Tiles,
  Tile,
  Portrait,
  PortraitBackground,
  FullName,
  Role,
  Storage,
} from "./styled";
import Backdrop from "./Backdrop";
import DetailsTile from "./DetailsTile";

const Movie = () => {
  const movieDetails = useSelector(selectMovieDetails);
  const credits = useSelector(selectCredits);
  console.log(movieDetails)

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
          <Container>
            <SubHeader>Cast</SubHeader>
            <Tiles>
              {credits.cast.map((actor) => (
                <Tile key={actor.credit_id}>
                  <PortraitBackground>
                    {actor.profile_path ? (
                      <Portrait
                        src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                      />
                    ) : (
                      <Portrait />
                    )}
                  </PortraitBackground>
                  <Storage>
                    <FullName>{actor.original_name}</FullName>
                    <Role>{actor.character}</Role>
                  </Storage>
                </Tile>
              ))}
            </Tiles>
          </Container>
          <Container>
            <SubHeader>Crew</SubHeader>
            <Tiles>
              {credits.crew.map((member) => (
                <Tile key={member.credit_id}>
                  <PortraitBackground>
                    {member.profile_path ? (
                      <Portrait
                        src={`https://image.tmdb.org/t/p/w500/${member.profile_path}`}
                      />
                    ) : (
                      <Portrait />
                    )}
                  </PortraitBackground>
                  <Storage>
                    <FullName>{member.original_name}</FullName>
                    <Role>{member.job}</Role>
                  </Storage>
                </Tile>
              ))}
            </Tiles>
          </Container>
        </DetailsWrapper>
      </Wrapper>
    </>
  );
};

export default Movie;
