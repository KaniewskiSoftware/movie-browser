import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { apiKey } from "../../common/apiData/apiKey";
import { apiLink } from "../../common/apiData/apiLink";
import { getData } from "../../common/apiData/apiRequests";
import { loadingDelay } from "../../common/states/loadingDelay";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
  selectPage,
  selectQuery,
  setPage,
} from "./peopleSlice";

function* fetchPeopleHandler() {
  try {
    yield delay(loadingDelay); //for loader demo purpose

    const page = yield select(selectPage);
    const query = yield select(selectQuery);

    const people = yield call(getData, !query
      ? `${apiLink}/person/popular?api_key=${apiKey}&page=${page}&language=en`
      : `${apiLink}/search/person?api_key=${apiKey}&language=en-US&query=${query}&page=${page}`
    );
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* peopleSaga() {
  yield takeLatest([fetchPeople.type, setPage.type], fetchPeopleHandler);
}
