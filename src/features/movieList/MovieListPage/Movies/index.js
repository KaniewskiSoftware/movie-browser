import { useSelector } from "react-redux";
import {
  selectGenres,
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
import PageTitle from "../../../../common/PageTitle";
import MovieTiles from "../../../../common/MovieTiles";

const Movies = () => {
  const query = useQueryParameter(searchQueryParamName);
  const genres = useSelector(selectGenres);
  const movies = useSelector(selectMovies);
  const totalResults = useSelector(selectTotalResults);
  const totalPages = useSelector(selectTotalPages);

  return totalResults === 0 ? (
    <NoResults />
  ) : (
    <>
      <Wrapper>
        <PageTitle
          title={
            !query
              ? "Popular movies"
              : `Search results for "${query}" (${totalResults})`
          }
        />
        <MovieTiles
          genres={genres}
          movies={movies}
        />
      </Wrapper>
      <Footer totalPages={totalPages} />
    </>
  );
};

export default Movies;
