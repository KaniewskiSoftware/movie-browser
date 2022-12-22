export const getMovies = async () => {
  const response = await fetch("https://api.themoviedb.org/3/movie/550?api_key=ed894dc65acf23e1be4175dbf123bd10");

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
