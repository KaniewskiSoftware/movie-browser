import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { loadingDelay } from "../../common/states/loadingDelay";
import { getPeople } from "./peopleAPI";
import { fetchPeople, fetchPeopleError, fetchPeopleSuccess, selectPage, setPage } from "./peopleSlice";

function* fetchPeopleHandler() {
    try {
        yield delay(loadingDelay); //for loader demo purpose

        const page = yield select(selectPage);

        const people = yield call(getPeople, page)
        yield put(fetchPeopleSuccess(people));

    } catch (error) {
        yield put(fetchPeopleError());
    }
}

export function* peopleSaga() {
    yield takeLatest([fetchPeople.type, setPage.type], fetchPeopleHandler);
}