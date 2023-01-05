import { useDispatch, useSelector } from "react-redux";
import ErrorPage from "../../../common/states/ErrorPage";
import Loader from "../../../common/states/Loader";
import { useEffect } from "react";
import { useQueryParameter } from "../../../core/queryParameters";
import { fetchPeople, selectStatus, setPage } from "../peopleSlice";
import People from "./People";

const PeoplePage = () => {
    const dispatch = useDispatch();

    const status = useSelector(selectStatus);
    const page = +useQueryParameter("page");

    useEffect(() => {
        if (!page) {
            dispatch(setPage(1));
        } else {
            dispatch(setPage(page));
        }
        dispatch(fetchPeople());
    }, [dispatch, page]);

    return {
        loading: <Loader />,
        success: <People />,
        error: <ErrorPage />,
    }[status];
};

export default PeoplePage;