import { delay, call, put, takeLatest } from "redux-saga/effects";
import { getGenres, getMovies } from "./movieListAPI";
import {
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
  fetchGenres,
  fetchGenresError,
  fetchGenresSuccess,
} from "./movieListSlice";

const loadingDelay = 2000;

function* fetchMoviesHandler() {
  try {
    yield delay(loadingDelay); //for loader demo purpose

    yield put(fetchGenres());

    const movies = yield call(getMovies);
    yield console.log(movies);
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
