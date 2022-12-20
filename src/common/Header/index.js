import { Input, InputWrapper, Logo, Loupe, StyledHeader, Wrapper } from "./styled";
import png from "./Logo.png";
import svg from "./Search.svg"
import Navigation from "../../features/Navigation";

const Header = () => (
  <StyledHeader>
    <Wrapper>
    <Logo src={png} />
    <Navigation/>
    </Wrapper>
    <InputWrapper>
    <Loupe src={svg}/>
    <Input placeholder="Search for movies..."></Input>
    </InputWrapper>
  </StyledHeader>
);

export default Header;
