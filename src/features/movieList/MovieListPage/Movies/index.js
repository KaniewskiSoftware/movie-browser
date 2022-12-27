import { useSelector } from "react-redux";
import { selectGenres, selectMoviesByQuery } from "../../movieListSlice";
import Tile from "../../../../common/Tile";
import notfound from "./noposter.png";
import {
  GreyText,
  Wrapper,
  Content,
  Image,
  Rate,
  Rating,
  Star,
  Tag,
  Tags,
  Title,
} from "./styled";
import { useLocation } from "react-router-dom";

const Movies = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("search");

  const genres = useSelector(selectGenres);
  const movies = useSelector(state => selectMoviesByQuery(state, query));

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
      ))}
    </Wrapper>
  );
};

export default Movies;