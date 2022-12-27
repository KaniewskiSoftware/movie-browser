import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import MovieListPage from "../../features/movieList/MovieListPage";
import Header from "../../common/Header";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import ErrorPage from "../../common/states/ErrorPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Header />
      <HashRouter>
        <Switch>
          <Route path="/movies">
            <MovieListPage />
          </Route>
          <Route path="/people">
            <ErrorPage />
          </Route>
          <Route path="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
