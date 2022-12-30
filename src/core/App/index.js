import { ThemeProvider } from "styled-components";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import MovieListPage from "../../features/movieList/MovieListPage";
import Header from "../../common/Header";
import MovieDetailsPage from "../../features/movieDetails/MovieDetailsPage";
import Footer from "../../common/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/movies/:id"} element={<MovieDetailsPage />} />
          <Route path={"/movies"} element={<MovieListPage />} />
          <Route path={"*"} element={<Navigate replace to="/movies" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
