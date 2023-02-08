import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    status: "initial",
    genres: null,
    isGenres: false,
  },
  reducers: {
    fetchGenres: (state) => {
      state.status = "loading";
    },
    fetchGenresSuccess: (state, { payload: genres }) => {
      state.genres = genres;
      state.status = "success";
      state.isGenres = true;
    },
    fetchGenresError: (state) => {
      state.genres = null;
      state.status = "error";
    },
  },
});

export const { fetchGenres, fetchGenresError, fetchGenresSuccess } =
  genresSlice.actions;

const selectGenresState = (state) => state.genres;

export const selectGenresStatus = (state) => selectGenresState(state).status;
export const selectIsGenres = (state) => selectGenresState(state).isGenres;
export const selectGenres = (state) => selectGenresState(state).genres;

export default genresSlice.reducer;
