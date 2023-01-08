import { delay, takeLatest, call, put, select } from "redux-saga/effects";
import {
  getPersonCredits,
  getPersonDetails,
} from "../../common/apiData/apiRequests";
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
    const person = yield call(getPersonDetails, id);
    yield put(fetchPersonDetailsSuccess(person));
  } catch (error) {
    yield put(fetchError());
  }
}

function* fetchPersonCreditsHandler() {
  try {
    const id = yield select(selectPersonId);

    const person = yield call(getPersonCredits, id);
    yield put(fetchCreditsSuccess(person));
  } catch (error) {
    yield put(fetchError());
  }
}

export function* personDetailsSaga() {
  yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
  yield takeLatest(fetchCredits.type, fetchPersonCreditsHandler);
}
