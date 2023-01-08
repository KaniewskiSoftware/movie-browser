import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../common/states/Loader"
import ErrorPage from "../../../common/states/ErrorPage"
import Person from "./Person";
import { fetchPersonDetails, setPersonId, selectStatus } from "../personDetailsSlice";

const PersonDetailsPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const status = useSelector(selectStatus);

    useEffect(() => {
        dispatch(setPersonId(id));
        dispatch(fetchPersonDetails());
    }, [id, dispatch]);

    return {
        loading: <Loader />,
        success: <Person />,
        error: <ErrorPage />,
    }[status];
};

export default PersonDetailsPage;
