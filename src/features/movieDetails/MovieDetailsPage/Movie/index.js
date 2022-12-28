import { useSelector } from "react-redux";
import { Wrapper } from "../../../../common/Wrapper";
import { selectMovieDetails } from "../../movieDetailsSlice";
import {
  Backdrop,
  Background,
  SmallText,
  Rate,
  Rating,
  Star,
  Title,
  DetailsTile,
  Image,
  Content,
  TileTitle,
  Year,
  PropertyText,
  Property,
  Properties,
  TextBox,
  Description,
  MiniStar,
} from "./styled";
import { Tag, Tags } from "../../../../common/Tags/index";

const Movie = () => {
  const movieDetails = useSelector(selectMovieDetails);
  console.log(movieDetails);

  return (
    <>
      <Background>
        <Backdrop backdrop={movieDetails.backdrop_path}>
          <Title>{movieDetails.original_title}</Title>
          <Rating>
            <Star />
            <TextBox>
              <Rate>{movieDetails.vote_average.toFixed(1)}</Rate>
              <SmallText>/ 10</SmallText>
            </TextBox>
          </Rating>
          <SmallText>{movieDetails.vote_count} votes</SmallText>
        </Backdrop>
      </Background>

      <Wrapper>
        <DetailsTile>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          />
          <Content>
            <TileTitle>{movieDetails.original_title}</TileTitle>
            <Year>{movieDetails.release_date.slice(0, 4)}</Year>
            <Properties>
              <Property>
                <PropertyText entitled>Production:</PropertyText>
                {movieDetails.production_countries.map((country, index) => (
                  <PropertyText key={country.name}>
                    {index > 0 && ", "}
                    {country.name}
                  </PropertyText>
                ))}
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
              <MiniStar />
              <TextBox>
                <Rate tile>{movieDetails.vote_average.toFixed(1)}</Rate>
                <SmallText tile>/ 10</SmallText>
                <SmallText tile last>
                  {movieDetails.vote_count} votes
                </SmallText>
              </TextBox>
            </Rating>
            <Description>{movieDetails.overview}</Description>
          </Content>
        </DetailsTile>
      </Wrapper>
    </>
  );
};

export default Movie;
