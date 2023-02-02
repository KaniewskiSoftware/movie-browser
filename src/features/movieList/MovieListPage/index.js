import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, setQuery, selectStatus, setPage } from "../movieListSlice";
import ErrorPage from "../../../common/states/ErrorPage";
import Loader from "../../../common/states/Loader";
import { useEffect } from "react";
import Movies from "./Movies";
import { searchQueryParamName, useQueryParameter } from "../../../core/queryParameters";

const MovieListPage = () => {
  const dispatch = useDispatch();

  const status = useSelector(selectStatus);
  const page = +useQueryParameter("page");
  const query = useQueryParameter(searchQueryParamName);

  useEffect(() => {
    if (!page) {
      dispatch(setPage(1));
    } else {
      dispatch(setPage(page));
    }
    if (!!query) {
      dispatch(setQuery(query))
    }
    dispatch(fetchMovies());
  }, [dispatch, page, query]);

  return {
    loading: <Loader />,
    success: <Movies />,
    error: <ErrorPage />,
  }[status];
};

export default MovieListPage;
