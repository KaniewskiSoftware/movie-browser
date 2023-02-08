import { useSelector } from "react-redux";
import { selectGenres } from "../apiData/genres/genresSlice";
import { Tag, Tags } from "../Tags";
import {
  Content,
  GreyText,
  Image,
  ImageBackground,
  MovieLink,
  Rate,
  Rating,
  Star,
  Tile,
  Tiles,
  Title,
} from "./styled";

const MovieTiles = ({ movies }) => {
  const genres = useSelector(selectGenres);
  
  return (
    <Tiles>
      {movies.map((movie) => (
        <MovieLink key={movies.indexOf(movie)} to={`/movies/${movie.id}`}>
          <Tile>
            <ImageBackground>
              {movie.poster_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt=""
                />
              ) : (
                <Image />
              )}
            </ImageBackground>
            <Content>
              {movie.title && <Title>{movie.title}</Title>}
              {movie.release_date && (movie.department || movie.character) ? (
                <GreyText>
                  {movie.department || movie.character} (
                  {movie.release_date.slice(0, 4)})
                </GreyText>
              ) : movie.release_date ? (
                <GreyText>{movie.release_date.slice(0, 4)}</GreyText>
              ) : movie.department || movie.character ? (
                <GreyText>{movie.department || movie.character}</GreyText>
              ) : null}
              {movie.genre_ids && genres ? (
                <Tags>
                  {movie.genre_ids.map((genre_id) => (
                    <Tag key={genre_id}>
                      {genres[genre_id]}
                    </Tag>
                  ))}
                </Tags>
              ) : (
                ""
              )}
              {movie.vote_average > 0 && (
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
  );
};

export default MovieTiles;
