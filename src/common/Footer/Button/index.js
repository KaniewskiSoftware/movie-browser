import { StyledArrow, StyledButton, Title } from "./styled";

const Button = ({ title, rotate, onClick, disabled, mobile }) => (
  <StyledButton disabled={disabled} onClick={onClick}>
    <StyledArrow $rotate={rotate} />
    <StyledArrow $rotate={rotate} mobile={mobile} hide="true" />
    <Title>{title}</Title>
  </StyledButton>
);

export default Button;
