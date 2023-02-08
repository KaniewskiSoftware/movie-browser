import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../common/states/Loader";
import ErrorPage from "../../../common/states/ErrorPage";
import Person from "./Person";
import {
  fetchPersonDetails,
  setPersonId,
  selectStatus,
} from "../personDetailsSlice";
import {
  fetchGenres,
  selectIsGenres,
} from "../../../common/apiData/genres/genresSlice";

const PersonDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const isGenres = useSelector(selectIsGenres);
  const status = useSelector(selectStatus);

  useEffect(() => {
    if (!isGenres) {
      dispatch(fetchGenres());
    }
    dispatch(setPersonId(id));
    dispatch(fetchPersonDetails());
  }, [id, isGenres, dispatch]);

  return {
    loading: <Loader />,
    success: <Person />,
    error: <ErrorPage />,
  }[status];
};

export default PersonDetailsPage;
