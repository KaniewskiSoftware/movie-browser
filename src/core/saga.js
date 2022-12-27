import { all } from "redux-saga/effects";
import { movieDetailsSaga } from "../features/movieDetails/movieDetailsSaga";
import { movieListSaga } from "../features/movieList/movieListSaga";

export default function* saga() {
  yield all([movieListSaga(), movieDetailsSaga()]);
}
