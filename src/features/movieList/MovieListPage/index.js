import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectStatus } from "../movieListSlice";
import ErrorPage from "../../../common/states/ErrorPage";
import Loader from "../../../common/states/Loader";
import { useEffect } from "react";
import Movies from "./Movies";

const MovieListPage = () => {
  const dispatch = useDispatch();

  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return {
    loading: <Loader />,
    success: <Movies />,
    error: <ErrorPage />,
  }[status];
};

export default MovieListPage;
