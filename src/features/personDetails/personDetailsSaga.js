import { delay, takeLatest, call, put, select } from "redux-saga/effects";
import { loadingDelay } from "../../common/states/loadingDelay";
import { getPersonDetails } from "./personDetailsAPI";
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

        yield delay(loadingDelay); //for loader demo purpose
        const person = yield call(getPersonDetails, id);
        yield put(fetchPersonDetailsSuccess(person));
    } catch (error) {
        yield put(fetchError());
    }
}

export function* personDetailsSaga() {
    yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
}
