import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Container from "./Container";
import Tile from "../../../common/Tile";
import { Image } from "./Image";
import Content from "./Content";
import notfound from "./Image/noposter.png";
import { fetchMovies, selectMovies, selectStatus } from "../movieListSlice";

const MovieListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const movies = useSelector(selectMovies);
  const status = useSelector(selectStatus);

  console.log(movies);
  if (status === "success") {
    return (
      <Container>
        <Tile>
          {movies.poster_path ? (
            <Image src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} alt="" />
          ) : (
            <Image src={notfound} alt="" />
          )}
          <Content
            title={movies.original_title}
            year={movies.release_date.slice(0,4)}
            genres={movies.genres}
            rate={movies.vote_average}
            votes={movies.vote_count}
          />
        </Tile>
      </Container>
    );
  }
};

export default MovieListPage;
