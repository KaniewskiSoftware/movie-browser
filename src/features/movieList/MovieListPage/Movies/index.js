import { useSelector } from "react-redux";
import { selectGenres, selectMovies, selectTotalPages, selectTotalResults } from "../../movieListSlice";
import { Wrapper } from "../../../../common/Wrapper";
import { useQueryParameter, searchQueryParamName } from "../../../../core/queryParameters";
import NoResults from "../../../../common/states/NoResults";
import Footer from "../../../../common/Footer";
import {
  GreyText,
  Tiles,
  Tile,
  Content,
  ImageBackground,
  Image,
  Rate,
  Rating,
  Star,
  Title,
  MovieLink,
} from "./styled";
import PageTitle from "../../../../common/PageTitle";
import { Tag, Tags } from "../../../../common/Tags";

const Movies = () => {
  const query = useQueryParameter(searchQueryParamName);
  const genres = useSelector(selectGenres);
  const movies = useSelector(selectMovies);
  const totalResults = useSelector(selectTotalResults);
  const totalPages = useSelector(selectTotalPages);

  return totalResults === 0 ? <NoResults /> : (
    <>
      <Wrapper>
        <PageTitle title={!query ? "Popular movies" : `Search results for "${query}" (${totalResults})`} />
        <Tiles>
          {movies.map((movie) => (
            <MovieLink key={movie.original_title} to={`/movies/${movie.id}`}>
              <Tile>
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
      <Footer
        totalPages={totalPages}
      />
    </>
  );
};

export default Movies;