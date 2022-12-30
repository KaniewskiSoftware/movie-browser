import { Logo, StyledHeader, Wrapper } from "./styled";
import png from "./Logo.png";
import Navigation from "./Navigation";

const Header = () => (
  <StyledHeader>
    <Wrapper>
      <Logo src={png} />
      <Navigation />
    </Wrapper>
    <Search />
  </StyledHeader>
);

export default Header;
