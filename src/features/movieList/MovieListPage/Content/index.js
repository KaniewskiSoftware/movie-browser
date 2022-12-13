import { Container, Rate, Rating, Star, Tag, Tags, Title } from "./styled";
import { GreyText } from "../GreyText";

const Content = ({ title, year, tags, rate, votes }) => (
  <Container>
    {title && <Title>{title}</Title>}
    {year && <GreyText>{year}</GreyText>}
    {tags && (
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    )}
    {rate && (
      <Rating>
        <Star />
        <Rate>{rate}</Rate>
        <GreyText>{votes && `${votes} votes`}</GreyText>
      </Rating>
    )}
  </Container>
);

export default Content;
