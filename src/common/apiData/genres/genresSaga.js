import { call, put, takeLatest, select } from "redux-saga/effects";
import { getGenres } from "../apiRequests";
import { fetchGenres, fetchGenresError, fetchGenresSuccess } from "./genresSlice";

function* fetchGenresHandler() {
  try {
    const genres = yield call(getGenres);
    yield put(fetchGenresSuccess(genres.genres));
  } catch (error) {
    yield put(fetchGenresError());
  }
}

export function* genresSaga() {
  yield takeLatest([fetchGenres.type], fetchGenresHandler);
}
