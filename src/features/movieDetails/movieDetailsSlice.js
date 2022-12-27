import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    status: "loading",
    movieDetails: [],
    movieId: null,
  },
  reducers: {
    fetchMovieDetails: (state) => {
      state.status = "loading";
    },
    fetchMovieDetailsSuccess: (state, { payload: movieDetails }) => {
      state.status = "success";
      state.movieDetails = movieDetails;
    },
    fetchMovieDetailsError: (state) => {
      state.status = "error";
    },
    setMovieId: (state, { payload: id }) => {
      state.movieId = id;
    },
  },
});

export const {
  fetchMovieDetails,
  fetchMovieDetailsError,
  fetchMovieDetailsSuccess,
  setMovieId,
} = movieDetailsSlice.actions;

const selectMovieDetailsState = (state) => state.movieDetails;

export const selectStatus = (state) => selectMovieDetailsState(state).status;
export const selectMovieDetails = (state) =>
selectMovieDetailsState(state).movieDetails;
export const selectMovieId = (state) => selectMovieDetailsState(state).movieId;

export default movieDetailsSlice.reducer;
