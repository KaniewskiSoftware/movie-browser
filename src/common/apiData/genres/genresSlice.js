import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    status: "initial",
    genres: null,
  },
  reducers: {
    fetchGenres: (state) => {
      state.status = "loading";
    },
    fetchGenresSuccess: (state, { payload: genres }) => {
      state.genres = genres;
      state.status = "success";
    },
    fetchGenresError: (state) => {
      state.genres = null;
      state.status = "error";
    },
  },
});

export const { fetchGenres, fetchGenresError, fetchGenresSuccess } =
  genres.actions;

const selectGenresState = (state) => state.genres;

export const selectGenresLoading = (state) => selectGenresState(state).status;
export const selectGenres = (state) => selectGenresState(state).genres;

export default genresSlice.reducer;
