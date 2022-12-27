import { ThemeProvider } from "styled-components";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import MovieListPage from "../../features/movieList/MovieListPage";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import MovieDetailsPage from "../../features/movieDetails/MovieDetailsPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <HashRouter>
        <Header />
        <Switch>
          <Route path={"/movies/:id"}>
            <MovieDetailsPage />
          </Route>
          <Route path={"/movies"}>
            <MovieListPage />
          </Route>
          <Route path={"/"}>
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
