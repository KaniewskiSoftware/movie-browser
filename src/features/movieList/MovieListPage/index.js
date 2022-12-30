import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, selectStatus, setPage } from "../movieListSlice";
import ErrorPage from "../../../common/states/ErrorPage";
import Loader from "../../../common/states/Loader";
import { useEffect } from "react";
import Movies from "./Movies";
import { useQueryParameter } from "../../../common/Footer/queryParameters";

const MovieListPage = () => {
  const dispatch = useDispatch();

  const status = useSelector(selectStatus);
  const page = +useQueryParameter("page");

  useEffect(() => {
    if (!page) {
      dispatch(setPage(1));
    } else {
      dispatch(setPage(page));
    }
    dispatch(fetchMovies());
  }, [dispatch, page]);

  return {
    loading: <Loader />,
    success: <Movies />,
    error: <ErrorPage />,
  }[status];
};

export default MovieListPage;
