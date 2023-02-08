import { call, put, takeLatest } from "redux-saga/effects";
import { getGenres } from "../apiRequests";
import {
  fetchGenres,
  fetchGenresError,
  fetchGenresSuccess,
} from "./genresSlice";

const convertGenresArrayToObject = (genres) =>
  genres.reduce(
    (accumulator, { id, name }) => ({
      ...accumulator,
      [id]: name,
    }),
    {}
  );

function* fetchGenresHandler() {
  try {
    const response = yield call(getGenres);
    yield put(fetchGenresSuccess(convertGenresArrayToObject(response.genres)));
  } catch (error) {
    yield put(fetchGenresError());
  }
}

export function* genresSaga() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
