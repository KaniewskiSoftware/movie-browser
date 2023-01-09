import { StyledTitle } from "./styled";

const Title = ({ title, credits, tag}) => (
  <StyledTitle as={tag ? "h2" : "h1"} credits={credits}>{title}</StyledTitle>
);

export default Title;
