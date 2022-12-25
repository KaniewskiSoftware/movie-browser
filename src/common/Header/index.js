import { Logo, StyledHeader, Wrapper } from "./styled";
import png from "./Logo.png";
import Navigation from "../../features/navigation/Navigation";
import Search from "./Search";

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
