import { useSelector } from "react-redux";
import { selectGenres, selectMovies } from "../../movieListSlice";
import Tile from "../../../../common/Tile";
import { Wrapper } from "../../../../common/Wrapper";
import {
  GreyText,
  Tiles,
  Content,
  ImageBackground,
  Image,
  Rate,
  Rating,
  Star,
  Tag,
  Tags,
  Title,
  MovieLink,
} from "./styled";

const Movies = () => {
  const genres = useSelector(selectGenres);
  const movies = useSelector(selectMovies);

  return (
    <Wrapper>
      <Tiles>
        {movies.map((movie) => (
          <MovieLink>
            <Tile key={movie.original_title}>
              <ImageBackground>
                {movie.poster_path ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt=""
                  />
                ) : (
                  <Image />
                )}
              </ImageBackground>
              <Content>
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
              </Content>
            </Tile>
          </MovieLink>
        ))}
      </Tiles>
    </Wrapper>
  );
};

export default Movies;
