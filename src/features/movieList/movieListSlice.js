import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    status: "initial",
    movies: null,
  },
  reducers: {
    fetchMovies: () => ({
      status: "loading",
      movies: null,
    }),
    fetchMoviesSuccess: (_, { payload: movies }) => ({
      status: "success",
      movies,
    }),
    fetchMoviesError: () => ({
      status: "error",
      movies: null,
    }),
  },
});

export const { fetchMovies, fetchMoviesSuccess, fetchMoviesError } =
  movieListSlice.actions;

export default movieListSlice.reducer;
