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
} from "./styled";

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
            <Rate>{movieDetails.vote_average.toFixed(1)}</Rate>
            <SmallText>/10</SmallText>
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
            <PropertyText>Production:</PropertyText>
          </Content>
        </DetailsTile>
      </Wrapper>
    </>
  );
};

export default Movie;
