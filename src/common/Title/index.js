import { StyledTitle } from "./styled";

const Title = ({ title, credits }) => (
  <StyledTitle credits={credits}>{title}</StyledTitle>
);

export default Title;
