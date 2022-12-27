import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    status: "loading",
    movies: [],
    genres: null,
    query: "",
  },
  reducers: {
    fetchMovies: (state) => {
      state.status = "loading";
    },
    fetchMoviesSuccess: (state, { payload: movies }) => {
      state.status = "success";
      state.movies = movies;
    },
    fetchMoviesError: (state) => {
      state.status = "error";
    },
    fetchGenres: () => { },
    fetchGenresSuccess: (state, { payload: genres }) => {
      state.genres = genres;
    },
    fetchGenresError: (state) => {
      state.genres = null;
    },
    isQuery: (state, { poayload: query }) => {
      state.status = "loading";
      state.query = query;
    },
  },
});

export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchGenres,
  fetchGenresError,
  fetchGenresSuccess,
  isQuery
} = movieListSlice.actions;

const selectMovieListState = (state) => state.movieList;

export const selectStatus = (state) => selectMovieListState(state).status;
export const selectMovies = (state) => selectMovieListState(state).movies;
export const selectGenres = (state) => selectMovieListState(state).genres;
export const selectIsGenres = (state) => selectMovieListState(state).isGenres;

export const selectMoviesByQuery = (state, query) => {
  const movies = selectMovies(state);
  if (!query || query.trim() === "") {
    return movies
  }
  return selectMovies(state).filter(({ original_title }) => original_title.toUpperCase().includes(query.trim().toUpperCase()))
};

export default movieListSlice.reducer;
