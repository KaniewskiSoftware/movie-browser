import { delay, takeLatest, call, put, select } from "redux-saga/effects";
import { apiKey } from "../../common/apiData/apiKey";
import { apiLink } from "../../common/apiData/apiLink";
import { getData } from "../../common/apiData/apiRequests";
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
    const movie = yield call(getData, `${apiLink}/movie/${id}?api_key=${apiKey}&language=en`);
    yield put(fetchMovieDetailsSuccess(movie));
  } catch (error) {
    yield put(fetchError());
  }
}

function* fetchCreditsHandler() {
  try {
    const id = yield select(selectMovieId);

    const movie = yield call(getData, `${apiLink}/movie/${id}/credits?api_key=${apiKey}&language=en`);
    yield put(fetchCreditsSuccess(movie));
  } catch (error) {
    yield put(fetchError());
  }
}

export function* movieDetailsSaga() {
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
  yield takeLatest(fetchCredits.type, fetchCreditsHandler);
}
