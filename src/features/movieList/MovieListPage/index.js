import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Container from "./Container";
import Tile from "../../../common/Tile";
import { Image } from "./Image";
import Content from "./Content";
import notfound from "./Image/noposter.png";
import { fetchMovies, selectMovies, selectStatus } from "../movieListSlice";
import  ErrorPage  from "../../../common/states/ErrorPage";
import  Loader  from "../../../common/states/Loader";

const MovieListPage = () => {
  const dispatch = useDispatch();

  const status = useSelector(selectStatus);
  const movies = useSelector(selectMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (status === "loading") {
    <Loader />;
  }

  if (status === "error") {
    return <ErrorPage />;
  }

  if (status === "success") {
    return (
      <Container>
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
            <Content
              title={movie.original_title}
              date={movie.release_date}
              genres_ids={movie.genre_ids}
              rate={movie.vote_average}
              votes={movie.vote_count}
            />
          </Tile>
        ))}
      </Container>
    );
  }
};

export default MovieListPage;
