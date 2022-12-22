import { delay, call, put, takeLatest } from "@reduxjs/toolkit/dist/utils";
import { getMovies } from "./movieListAPI";
import {
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
} from "./movieListSlice";

const loadingDelay = 2000;
function* fetchMoviesHandler() {
  try {
    yield delay(loadingDelay); //for loader demo purpose
    const movies = yield call(getMovies);
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* movieListSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
