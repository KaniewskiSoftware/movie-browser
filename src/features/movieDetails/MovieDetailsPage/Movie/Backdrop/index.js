import { BackdropContent, Background, Container, Title } from "./styled";
import { Rate, RateBox, SmallText, Star, TextBox } from "../Rating/index";
const Backdrop = ({ backdrop, title, vote, votes }) => (
  <Container>
    <Background backdrop={backdrop}>
      <BackdropContent>
        {title && <Title>{title}</Title>}
        {vote && (
          <RateBox>
            <Star />
            <TextBox>
              <Rate>{vote.toFixed(1)}</Rate>
              <SmallText>/ 10</SmallText>
              {votes && <SmallText $small>{votes} votes</SmallText>}
            </TextBox>
          </RateBox>
        )}
        {votes && <SmallText $big>{votes} votes</SmallText>}
      </BackdropContent>
    </Background>
  </Container>
);

export default Backdrop;
