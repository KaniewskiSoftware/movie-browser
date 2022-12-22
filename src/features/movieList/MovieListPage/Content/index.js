import { Container, Rate, Rating, Star, Tag, Tags, Title } from "./styled";
import { GreyText } from "../GreyText";

const Content = ({ title, year, genres, rate, votes }) => (
  <Container>
    {title && <Title>{title}</Title>}
    {year && <GreyText>{year}</GreyText>}
    {genres && (
      <Tags>
        {genres.map((genre) => (
          <Tag key={genre.id}>{genre.name}</Tag>
        ))}
      </Tags>
    )}
    {rate && (
      <Rating>
        <Star />
        <Rate>{rate.toFixed(2)}</Rate>
        {votes && <GreyText>{`${votes} votes`}</GreyText>}
      </Rating>
    )}
  </Container>
);

export default Content;
