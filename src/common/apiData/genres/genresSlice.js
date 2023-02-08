import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    genresLoading: false,
    genres: null,
  },
  reducers: {
    fetchGenres: (state) => {
      state.genresLoading = true;
    },
    fetchGenresSuccess: (state, { payload: genres }) => {
      state.genres = genres;
      state.genresLoading = false;
    },
    fetchGenresError: (state) => {
      state.genres = null;
    },
  },
});

export const { fetchGenres, fetchGenresError, fetchGenresSuccess } =
  genres.actions;

const selectGenresState = (state) => state.genres;

export const selectGenresLoading = (state) =>
  selectGenresState(state).genresLoading;
export const selectGenres = (state) => selectGenresState(state).genres;

export default genresSlice.reducer;
