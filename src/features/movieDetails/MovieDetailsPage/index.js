import { useSelector } from "react-redux";
import { selectStatus } from "../movieListSlice";
import Loader from "../../../common/states/Loader"
import ErrorPage from "../../../common/states/ErrorPage"

const MovieDetailsPage = () => {
  const status = useSelector(selectStatus);

  return {
    loading: <Loader />,
    success: <Movie />,
    error: <ErrorPage />,
  }[status];
};

export default MovieDetailsPage;
