import { ThemeProvider } from "styled-components";
import { Route, Routes, Navigate, HashRouter } from "react-router-dom";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import MovieListPage from "../../features/movieList/MovieListPage";
import Header from "../../common/Header";
import MovieDetailsPage from "../../features/movieDetails/MovieDetailsPage";
import PeoplePage from "../../features/peopleList/PeoplePage";
import PersonDetailsPage from "../../features/personDetails/PersonDetailsPage";
import { toMovie, toMovies, toPeople, toPerson } from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <HashRouter>
        <Header />
        <Routes>
          <Route path={toMovie} element={<MovieDetailsPage />} />
          <Route path={toMovies} element={<MovieListPage />} />
          <Route path={toPeople} element={<PeoplePage />} />
          <Route path={toPerson} element={<PersonDetailsPage />} />
          <Route path={"*"} element={<Navigate replace to="/movies" />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
