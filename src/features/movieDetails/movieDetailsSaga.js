import { delay, takeLatest, call, put, select } from "redux-saga/effects";
import { loadingDelay } from "../../common/states/loadingDelay";
import { getMovieDetails } from "./movieDetailsAPI";
import {
  fetchMovieDetails,
  fetchMovieDetailsError,
  fetchMovieDetailsSuccess,
  selectMovieId,
} from "./movieDetailsSlice";

function* fetchMovieDetailsHandler() {
  try {
    const id = yield select(selectMovieId);

    yield delay(loadingDelay); //for loader demo purpose
    const movie = yield call(getMovieDetails, id);
    yield put(fetchMovieDetailsSuccess(movie));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}

export function* movieDetailsSaga() {
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}
