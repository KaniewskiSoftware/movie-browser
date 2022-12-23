import { useSelector } from "react-redux";
import { selectGenres } from "../../movieListSlice";
import { Container, Rate, Rating, Star, Tag, Tags, Title } from "./styled";
import { GreyText } from "../GreyText";

const Content = ({ title, date, genres_ids, rate, votes }) => {
  const genres = useSelector(selectGenres);

  return (
    <Container>
      {title && <Title>{title}</Title>}
      {date && <GreyText>{date.slice(0, 4)}</GreyText>}
      {genres_ids && genres ? (
        <Tags>
          {genres_ids.map((genre_id) => (
            <Tag key={genre_id}>
              {genres.find((genre) => genre.id === genre_id).name}
            </Tag>
          ))}
        </Tags>
      ) : ""}
      {rate && (
        <Rating>
          <Star />
          <Rate>{rate.toFixed(2)}</Rate>
          {votes && <GreyText>{`${votes} votes`}</GreyText>}
        </Rating>
      )}
    </Container>
  );
};

export default Content;
