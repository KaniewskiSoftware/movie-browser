import { delay, takeLatest, call, put, select } from "redux-saga/effects";
import { getCredits, getMovieDetails } from "../../common/apiData/apiRequests";
import { loadingDelay } from "../../common/states/loadingDelay";
import {
  fetchCredits,
  fetchMovieDetails,
  fetchError,
  fetchMovieDetailsSuccess,
  selectMovieId,
  fetchCreditsSuccess,
} from "./movieDetailsSlice";

function* fetchMovieDetailsHandler() {
  try {
    const id = yield select(selectMovieId);

    yield put(fetchCredits());
    yield delay(loadingDelay); //for loader demo purpose
    const movie = yield call(getMovieDetails, id);
    yield put(fetchMovieDetailsSuccess(movie));
  } catch (error) {
    yield put(fetchError());
  }
}

function* fetchCreditsHandler() {
  try {
    const id = yield select(selectMovieId);

    const movie = yield call(getCredits, id);
    yield put(fetchCreditsSuccess(movie));
  } catch (error) {
    yield put(fetchError());
  }
}

export function* movieDetailsSaga() {
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
  yield takeLatest(fetchCredits.type, fetchCreditsHandler);
}
