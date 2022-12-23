import { StyledArrow, StyledButton, Title, Wrapper } from "./styled";

const Button = ({ title, rotate, reverse }) => (
  <StyledButton reverse={reverse}>
    <StyledArrow rotate={rotate} />
    <Title>{title}</Title>
  </StyledButton>
);

export default Button;
