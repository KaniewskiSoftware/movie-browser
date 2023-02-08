import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    status: "initial",
    movieDetails: null,
    movieId: null,
    credits: null,
  },
  reducers: {
    fetchMovieDetails: (state) => {
      state.status = "loading";
    },
    fetchMovieDetailsSuccess: (state, { payload: movieDetails }) => {
      state.status = "success";
      state.movieDetails = movieDetails;
    },
    fetchError: (state) => {
      state.status = "error";
    },
    setMovieId: (state, { payload: id }) => {
      state.movieId = id;
    },
    fetchCredits: (state) => {
      state.status = "loading";
    },
    fetchCreditsSuccess: (state, { payload: credits }) => {
      state.credits = credits;
    },
  },
});

export const {
  fetchMovieDetails,
  fetchError,
  fetchMovieDetailsSuccess,
  setMovieId,
  fetchCredits,
  fetchCreditsSuccess,
} = movieDetailsSlice.actions;

const selectMovieDetailsState = (state) => state.movieDetails;

export const selectStatus = (state) => selectMovieDetailsState(state).status;
export const selectMovieDetails = (state) =>
  selectMovieDetailsState(state).movieDetails;
export const selectMovieId = (state) => selectMovieDetailsState(state).movieId;
export const selectCredits = (state) => selectMovieDetailsState(state).credits;

export default movieDetailsSlice.reducer;
