import { delay, call, put, takeLatest, select } from "redux-saga/effects";
import {
  getMovies,
  getMoviesByQuery,
} from "../../common/apiData/apiRequests";
import { loadingDelay } from "../../common/states/loadingDelay";
import {
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
  selectPage,
  selectQuery,
  setPage,
  setQuery,
} from "./movieListSlice";

function* fetchMoviesHandler() {
  try {
    yield delay(loadingDelay); //for loader demo purpose

    const page = yield select(selectPage);
    const query = yield select(selectQuery);

    const movies = yield !query
      ? call(getMovies, page)
      : call(getMoviesByQuery, query, page);
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* movieListSaga() {
  yield takeLatest(
    [fetchMovies.type, setQuery.type, setPage.type],
    fetchMoviesHandler
  );
}
