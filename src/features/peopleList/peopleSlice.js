import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "peopleList",
    initialState: {
        status: "initial",
        people: null,
        query: null,
        page: null,
        totalResults: 0,
        totalPages: 0,
    },
    reducers: {
        fetchPeople: (state) => {
            state.status = "loading";
        },
        fetchPeopleSuccess: (state, { payload: people }) => {
            state.status = "success";
            state.people = people.results;
            state.totalPages = people.total_pages;
            state.totalResults = people.total_results;
        },
        fetchPeopleError: (state) => {
            state.status = "error";
        },
        setQuery: (state, { payload: query }) => {
            state.query = query;
            state.status = "loading";
        },
        setPage: (state, { payload: page }) => {
            state.page = page;
        }
    },
});

export const {
    fetchPeople,
    fetchPeopleSuccess,
    fetchPeopleError,
    setQuery,
    setPage,
} = peopleSlice.actions;

const selectPeopleListState = (state) => state.peopleList;

export const selectStatus = (state) => selectPeopleListState(state).status;
export const selectPeople = (state) => selectPeopleListState(state).people;
export const selectPage = (state) => selectPeopleListState(state).page;
export const selectQuery = (state) => selectPeopleListState(state).query;
export const selectTotalResults = (state) => selectPeopleListState(state).totalResults;
export const selectTotalPages = (state) => selectPeopleListState(state).totalPages;

export default peopleSlice.reducer;