import { all } from "redux-saga/effects";
import { movieDetailsSaga } from "../features/movieDetails/movieDetailsSaga";
import { movieListSaga } from "../features/movieList/movieListSaga";
import { peopleSaga } from "../features/peopleList/peopleSaga";

export default function* saga() {
  yield all([movieListSaga(), movieDetailsSaga(), peopleSaga()]);
}
