import { delay, call, put, takeLatest, select } from "redux-saga/effects";
import { getGenres, getMovies, getMoviesByQuery } from "./movieListAPI";
import { loadingDelay } from "../../common/states/loadingDelay";
import {
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
  fetchGenres,
  fetchGenresError,
  fetchGenresSuccess,
  selectPage,
  selectQuery,
} from "./movieListSlice";

function* fetchMoviesHandler() {
  try {
    yield delay(loadingDelay); //for loader demo purpose

    yield put(fetchGenres());
    const page = yield select(selectPage);
    const query = yield select(selectQuery);

    const movies = yield query === "" ? call(getMovies, page) : call(getMoviesByQuery, query, page);
    yield put(fetchMoviesSuccess(movies.results));

  } catch (error) {
    yield put(fetchMoviesError());
  }
}

function* fetchGenresHandler() {
  try {
    const genres = yield call(getGenres);
    yield put(fetchGenresSuccess(genres.genres));
  } catch (error) {
    yield put(fetchGenresError());
  }
}

export function* movieListSaga() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
