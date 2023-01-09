import { Logo, StyledHeader, Wrapper } from "./styled";
import png from "./Logo.png";
import Navigation from "./Navigation";
import Search from "./Search";

const Header = () => (
  <StyledHeader>
    <Wrapper>
      <Logo src={png} alt="logo" />
      <Navigation />
    </Wrapper>
    <Search />
  </StyledHeader>
);

export default Header;
