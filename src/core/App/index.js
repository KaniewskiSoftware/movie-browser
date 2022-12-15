import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import MovieListPage from "../../features/movieList/MovieListPage";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <MovieListPage />
    </ThemeProvider>
  );
}

export default App;
