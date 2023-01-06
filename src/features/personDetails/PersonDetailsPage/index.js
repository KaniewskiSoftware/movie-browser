import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../common/states/Loader"
import ErrorPage from "../../../common/states/ErrorPage"
import Person from "./Person";
import { searchQueryParamName, useQueryParameter } from "../../../core/queryParameters";
import { fetchPersonDetails, setPersonId, selectStatus } from "../personDetailsSlice";

const PersonDetailsPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const status = useSelector(selectStatus);
    const query = useQueryParameter(searchQueryParamName);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setPersonId(id));
        dispatch(fetchPersonDetails());
    }, [id, dispatch]);

    if (query !== null)
        return navigate("/people");
    return {
        loading: <Loader />,
        success: <Person />,
        error: <ErrorPage />,
    }[status];
};

export default PersonDetailsPage;
