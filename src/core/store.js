import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import movieListReducer from "../features/movieList/movieListSlice"
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:{
        movieList: movieListReducer,
    },
    middleware:[sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;