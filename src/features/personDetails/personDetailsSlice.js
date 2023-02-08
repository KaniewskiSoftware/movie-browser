import { createSlice } from "@reduxjs/toolkit";

const personDetailsSlice = createSlice({
  name: "personDetails",
  initialState: {
    status: "initial",
    personDetails: null,
    personId: null,
    credits: null,
    genres: null,
  },
  reducers: {
    fetchPersonDetails: (state) => {
      state.status = "loading";
    },
    fetchPersonDetailsSuccess: (state, { payload: personDetails }) => {
      state.status = "success";
      state.personDetails = personDetails;
    },
    fetchError: (state) => {
      state.status = "error";
    },
    setPersonId: (state, { payload: id }) => {
      state.personId = id;
    },
    fetchCredits: (state) => {
      state.status = "loading";
    },
    fetchCreditsSuccess: (state, { payload: credits }) => {
      state.credits = credits;
    },
    fetchGenres: () => {},
    fetchGenresSuccess: (state, { payload: genres }) => {
      state.genres = genres;
    },
    fetchGenresError: (state) => {
      state.genres = null;
    },
  },
});

export const {
  fetchPersonDetails,
  fetchError,
  fetchPersonDetailsSuccess,
  setPersonId,
  fetchCredits,
  fetchCreditsSuccess,
  fetchGenres,
  fetchGenresError,
  fetchGenresSuccess,
} = personDetailsSlice.actions;

const selectPersonDetailsState = (state) => state.personDetails;

export const selectStatus = (state) => selectPersonDetailsState(state).status;
export const selectPersonDetails = (state) =>
  selectPersonDetailsState(state).personDetails;
export const selectPersonId = (state) =>
  selectPersonDetailsState(state).personId;
export const selectCredits = (state) => selectPersonDetailsState(state).credits;
export const selectGenres = (state) => selectPersonDetailsState(state).genres;

export default personDetailsSlice.reducer;
