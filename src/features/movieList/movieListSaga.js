import { delay, call, put, takeLatest, select } from "redux-saga/effects";
import { apiKey } from "../../common/apiData/apiKey";
import { apiLink } from "../../common/apiData/apiLink";
import { getData } from "../../common/apiData/apiRequests";
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
  setPage,
  isQuery,
} from "./movieListSlice";

function* fetchMoviesHandler() {
  try {
    yield delay(loadingDelay); //for loader demo purpose

    yield put(fetchGenres());
    const page = yield select(selectPage);
    const query = yield select(selectQuery);

    const movies = yield call(getData, !query
      ? `${apiLink}/movie/popular?api_key=${apiKey}&page=${page}&language=en`
      : `${apiLink}/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}`
    );
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

function* fetchGenresHandler() {
  try {
    const genres = yield call(getData(`${apiLink}/genre/movie/list?api_key=${apiKey}`));
    yield put(fetchGenresSuccess(genres.genres));
  } catch (error) {
    yield put(fetchGenresError());
  }
}

export function* movieListSaga() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
  yield takeLatest(
    [fetchMovies.type, isQuery.type, setPage.type],
    fetchMoviesHandler
  );
}
