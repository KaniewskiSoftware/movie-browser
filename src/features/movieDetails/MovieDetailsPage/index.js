import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../common/states/Loader"
import ErrorPage from "../../../common/states/ErrorPage"
import { fetchMovieDetails, selectStatus, setMovieId } from "../movieDetailsSlice";
import Movie from "./Movie";
import { searchQueryParamName, useQueryParameter } from "../../../core/queryParameters";

const MovieDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const status = useSelector(selectStatus);
  const query = useQueryParameter(searchQueryParamName);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setMovieId(id));
    dispatch(fetchMovieDetails());
  }, [id, dispatch]);

  if (query !== null)
    return navigate("/movies");
  return {
    loading: <Loader />,
    success: <Movie />,
    error: <ErrorPage />,
  }[status];
};

export default MovieDetailsPage;
