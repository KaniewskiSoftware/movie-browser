import { useSelector } from "react-redux";
import { selectGenres, selectMovies } from "../../movieListSlice";
import Wrapper from "./Wrapper";
import Tile from "../../../../common/Tile";
import { Image } from "./Image";
import notfound from "./Image/noposter.png";
import { Container, Rate, Rating, Star, Tag, Tags, Title } from "./styled";
import { GreyText } from "../GreyText";

const Content = () => {
  const genres = useSelector(selectGenres);
  const movies = useSelector(selectMovies);

  return (
    <Wrapper>
      {movies.map((movie) => (
        <Tile key={movie.original_title}>
          {movie.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
            />
          ) : (
            <Image src={notfound} alt="" />
          )}
          <Container>
            {movie.original_title && <Title>{movie.original_title}</Title>}
            {movie.release_date && (
              <GreyText>{movie.release_date.slice(0, 4)}</GreyText>
            )}
            {movie.genre_ids && genres ? (
              <Tags>
                {movie.genre_ids.map((genre_id) => (
                  <Tag key={genre_id}>
                    {genres.find((genre) => genre.id === genre_id).name}
                  </Tag>
                ))}
              </Tags>
            ) : (
              ""
            )}
            {movie.vote_average && (
              <Rating>
                <Star />
                <Rate>{movie.vote_average.toFixed(2)}</Rate>
                {movie.vote_count && (
                  <GreyText>{`${movie.vote_count} votes`}</GreyText>
                )}
              </Rating>
            )}
          </Container>
        </Tile>
      ))}
    </Wrapper>
  );
};

export default Content;
