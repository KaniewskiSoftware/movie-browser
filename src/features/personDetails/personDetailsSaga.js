import { delay, takeLatest, call, put, select } from "redux-saga/effects";
import { apiKey } from "../../common/apiData/apiKey";
import { apiLink } from "../../common/apiData/apiLink";
import { getData } from "../../common/apiData/apiRequests";
import { loadingDelay } from "../../common/states/loadingDelay";
import {
  fetchCredits,
  fetchPersonDetails,
  fetchError,
  fetchPersonDetailsSuccess,
  selectPersonId,
  fetchCreditsSuccess,
} from "./personDetailsSlice";

function* fetchPersonDetailsHandler() {
  try {
    const id = yield select(selectPersonId);

    yield put(fetchCredits());
    yield delay(loadingDelay); //for loader demo purpose
    const person = yield call(getData, `${apiLink}/person/${id}?api_key=${apiKey}&language=en`);
    yield put(fetchPersonDetailsSuccess(person));
  } catch (error) {
    yield put(fetchError());
  }
}

function* fetchPersonCreditsHandler() {
  try {
    const id = yield select(selectPersonId);

    const person = yield call(getData, `${apiLink}/person/${id}/movie_credits?api_key=${apiKey}&language=en`);
    yield put(fetchCreditsSuccess(person));
  } catch (error) {
    yield put(fetchError());
  }
}

export function* personDetailsSaga() {
  yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
  yield takeLatest(fetchCredits.type, fetchPersonCreditsHandler);
}
