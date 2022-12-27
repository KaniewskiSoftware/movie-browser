import { useSelector } from "react-redux";
import { Wrapper } from "../../../../common/Wrapper";
import { selectMovieDetails } from "../../movieDetailsSlice";

const Movie = () => {
  const movieDetails = useSelector(selectMovieDetails);
  console.log(movieDetails);
 
  return <Wrapper>1234</Wrapper>;
};

export default Movie;
