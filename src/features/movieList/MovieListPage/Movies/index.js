import { useSelector } from "react-redux";
import {
  selectMovies,
  selectTotalPages,
  selectTotalResults,
} from "../../movieListSlice";
import { Wrapper } from "../../../../common/Wrapper";
import {
  useQueryParameter,
  searchQueryParamName,
} from "../../../../core/queryParameters";
import NoResults from "../../../../common/states/NoResults";
import Footer from "../../../../common/Footer";
import Title from "../../../../common/Title";
import MovieTiles from "../../../../common/MovieTiles";

const Movies = () => {
  const query = useQueryParameter(searchQueryParamName);
  const movies = useSelector(selectMovies);
  const totalResults = useSelector(selectTotalResults);
  const totalPages = useSelector(selectTotalPages);

  return totalResults === 0 ? (
    <NoResults />
  ) : (
    <>
      <Wrapper>
        <Title
          title={
            !query
              ? "Popular movies"
              : `Search results for "${query}" (${totalResults})`
          }
        />
        <MovieTiles
          movies={movies}
        />
      </Wrapper>
      <Footer totalPages={totalPages} />
    </>
  );
};

export default Movies;
