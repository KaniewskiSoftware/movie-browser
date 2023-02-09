import { useDispatch, useSelector } from "react-redux";
import ErrorPage from "../../../common/states/ErrorPage";
import Loader from "../../../common/states/Loader";
import { useEffect } from "react";
import { searchQueryParamName, useQueryParameter } from "../../../core/queryParameters";
import { fetchPeople, setQuery, selectStatus, setPage } from "../peopleSlice";
import People from "./People";

const PeoplePage = () => {
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
        if (query !== null) {
            dispatch(setQuery(query));
        }
        dispatch(fetchPeople());
    }, [dispatch, page, query]);

    return {
        loading: <Loader />,
        success: <People />,
        error: <ErrorPage />,
    }[status];
};

export default PeoplePage;
