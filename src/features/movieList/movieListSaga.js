import { delay, call, put, takeLatest, select } from "redux-saga/effects";
import { getGenres, getMovies } from "./movieListAPI";
import { loadingDelay } from "../../common/states/loadingDelay";
import {
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
  fetchGenres,
  fetchGenresError,
  fetchGenresSuccess,
  selectQuery,
} from "./movieListSlice";

function* fetchMoviesHandler() {
  const query = yield select(selectQuery);
  try {
    yield delay(loadingDelay); //for loader demo purpose

    yield put(fetchGenres());

    const data = yield call(getMovies, query);
    const movies = data;
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
