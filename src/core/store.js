import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import movieListReducer from "../features/movieList/movieListSlice";
import movieDetailsReducer from "../features/movieDetails/movieDetailsSlice";
import peopleListReducer from "../features/peopleList/peopleSlice";
import personDetailsReducer from "../features/personDetails/personDetailsSlice";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movieList: movieListReducer,
        movieDetails: movieDetailsReducer,
        peopleList: peopleListReducer,
        personDetails: personDetailsReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;