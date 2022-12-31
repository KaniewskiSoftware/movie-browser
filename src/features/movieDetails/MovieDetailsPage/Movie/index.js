import { useSelector } from "react-redux";
import { Wrapper } from "../../../../common/Wrapper";
import { selectCredits, selectMovieDetails } from "../../movieDetailsSlice";
import {
  Backdrop,
  Background,
  SmallText,
  Rate,
  Rating,
  Star,
  Title,
  DetailsTile,
  ImageBackground,
  Image,
  Content,
  TileTitle,
  Year,
  PropertyText,
  Property,
  Properties,
  TextBox,
  Description,
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
import { Tag, Tags } from "../../../../common/Tags/index";

const Movie = () => {
  const movieDetails = useSelector(selectMovieDetails);
  console.log(movieDetails);
  const credits = useSelector(selectCredits);

  return (
    <>
      {movieDetails.backdrop_path && (
        <Background>
          <Backdrop backdrop={movieDetails.backdrop_path}>
            {movieDetails.original_title && (
              <Title>{movieDetails.original_title}</Title>
            )}
            {movieDetails.vote_average && (
              <Rating>
                <Star />
                <TextBox>
                  <Rate>{movieDetails.vote_average.toFixed(1)}</Rate>
                  <SmallText>/ 10</SmallText>
                </TextBox>
              </Rating>
            )}
            {movieDetails.vote_count && (
              <SmallText>{movieDetails.vote_count} votes</SmallText>
            )}
          </Backdrop>
        </Background>
      )}

      <Wrapper>
        <DetailsWrapper>
          <DetailsTile>
            <ImageBackground>
              {movieDetails.poster_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                  alt=""
                />
              ) : (
                <Image />
              )}
            </ImageBackground>
            <Content>
              <TileTitle>{movieDetails.original_title}</TileTitle>
              <Year>{movieDetails.release_date.slice(0, 4)}</Year>
              <Properties>
                <Property>
                  <PropertyText entitled>Production:</PropertyText>
                  {movieDetails.production_countries.map(
                    (country, index, countries) => (
                      <PropertyText key={country.name}>
                        {country.name}
                        {countries.length > 0 ? (
                          index < countries.length - 1 ? (
                            <span>,&nbsp;</span>
                          ) : (
                            ""
                          )
                        ) : (
                          ""
                        )}
                      </PropertyText>
                    )
                  )}
                </Property>
                <Property>
                  <PropertyText entitled>Release date:</PropertyText>
                  <PropertyText>{movieDetails.release_date}</PropertyText>
                </Property>
              </Properties>
              {movieDetails.genres && (
                <Tags details>
                  {movieDetails.genres.map((genre) => (
                    <Tag key={genre.id}>{genre.name}</Tag>
                  ))}
                </Tags>
              )}
              <Rating tile>
                <Star $mini />
                <TextBox>
                  <Rate tile>{movieDetails.vote_average.toFixed(1)}</Rate>
                  <SmallText tile $display>/ 10</SmallText>
                  <SmallText tile last>
                    {movieDetails.vote_count} votes
                  </SmallText>
                </TextBox>
              </Rating>
              <Description big>{movieDetails.overview}</Description>
            </Content>
            <Description small>{movieDetails.overview}</Description>
          </DetailsTile>

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
