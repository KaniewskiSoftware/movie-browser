import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    status: "loading",
    movies: [],
    genres: null,
    page: "1",
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
    fetchGenres: () => {},
    fetchGenresSuccess: (state, { payload: genres }) => {
      state.genres = genres;
    },
    fetchGenresError: (state) => {
      state.genres = null;
    },
    setPage: (state, {payload: page}) => {
      state.page = page;
      console.log(page);
    }
  },
});

export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchGenres,
  fetchGenresError,
  fetchGenresSuccess,
  setPage,
} = movieListSlice.actions;

const selectMovieListState = (state) => state.movieList;

export const selectStatus = (state) => selectMovieListState(state).status;
export const selectMovies = (state) => selectMovieListState(state).movies;
export const selectGenres = (state) => selectMovieListState(state).genres;
export const selectIsGenres = (state) => selectMovieListState(state).isGenres;
export const selectPage = (state) => selectMovieListState(state).page;

export default movieListSlice.reducer;
