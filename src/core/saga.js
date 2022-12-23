import { all } from "redux-saga/effects";
import { movieListSaga } from "../features/movieList/movieListSaga";

export default function* saga() {
  yield all([movieListSaga()]);
}
