import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectPage, selectStatus } from "../movieListSlice";
import ErrorPage from "../../../common/states/ErrorPage";
import Loader from "../../../common/states/Loader";
import { useEffect } from "react";
import Movies from "./Movies";

const MovieListPage = () => {
  const dispatch = useDispatch();

  const status = useSelector(selectStatus);
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch, page]);

  return {
    loading: <Loader />,
    success: <Movies />,
    error: <ErrorPage />,
  }[status];
};

export default MovieListPage;
