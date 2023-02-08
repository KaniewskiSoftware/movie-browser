import {useDispatch, useSelector} from "react-redux";
import {fetchMovies, selectStatus, setPage, setQuery,} from "../movieListSlice";
import ErrorPage from "../../../common/states/ErrorPage";
import Loader from "../../../common/states/Loader";
import {useEffect} from "react";
import Movies from "./Movies";
import {searchQueryParamName, useQueryParameter,} from "../../../core/queryParameters";
import {fetchGenres, selectIsGenres} from "../../../common/apiData/genres/genresSlice";

const MovieListPage = () => {
	const dispatch = useDispatch();
	
	const status = useSelector(selectStatus);
	const isGenres = useSelector(selectIsGenres);
	const page = +useQueryParameter("page");
	const query = useQueryParameter(searchQueryParamName);
	
	useEffect(() => {
		if (!isGenres) {
			dispatch(fetchGenres());
		}
		if (!page) {
			dispatch(setPage(1));
		} else {
			dispatch(setPage(page));
		}
		if (query !== null) {
			dispatch(setQuery(query));
		}
		dispatch(fetchMovies());
	}, [dispatch, isGenres, page, query]);
	
	return {
		loading: <Loader/>,
		success: <Movies/>,
		error: <ErrorPage/>,
	}[status];
};

export default MovieListPage;
