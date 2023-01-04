import { ThemeProvider } from "styled-components";
import { Route, Routes, Navigate, HashRouter } from "react-router-dom";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import MovieListPage from "../../features/movieList/MovieListPage";
import Header from "../../common/Header";
import MovieDetailsPage from "../../features/movieDetails/MovieDetailsPage";
import PeoplePage from "../../features/peopleList/PeoplePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <HashRouter>
        <Header />
        <Routes>
          <Route path={"/movies/:id"} element={<MovieDetailsPage />} />
          <Route path={"/movies"} element={<MovieListPage />} />
          <Route path={"/people"} element={<PeoplePage />} />
          <Route path={"*"} element={<Navigate replace to="/movies" />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
