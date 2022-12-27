import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../common/states/Loader"
import ErrorPage from "../../../common/states/ErrorPage"
import { fetchMovieDetails, selectStatus, setMovieId } from "../movieDetailsSlice";
import Movie from "./Movie";

const MovieDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(setMovieId(id));
    dispatch(fetchMovieDetails());
  }, [id, dispatch]);

  return {
    loading: <Loader />,
    success: <Movie />,
    error: <ErrorPage />,
  }[status];
};

export default MovieDetailsPage;
