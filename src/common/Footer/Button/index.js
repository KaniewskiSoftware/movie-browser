import { StyledArrow, StyledButton, Title } from "./styled";

const Button = ({ title, rotate, reverse, onClick }) => (
  <StyledButton onClick={onClick} reverse={reverse}>
    <StyledArrow rotate={rotate} />
    <Title>{title}</Title>
  </StyledButton>
);

export default Button;
