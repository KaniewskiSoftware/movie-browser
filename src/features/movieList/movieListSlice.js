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

const selectMovieListState = (state) => state.movieList;

export const selectMovies = (state) => selectMovieListState(state).movies;
export const selectStatus = (state) => selectMovieListState(state).status;

export default movieListSlice.reducer;
