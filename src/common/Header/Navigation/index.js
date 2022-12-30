import { Item, List, Nav, StyledNavLink } from "./styled";

const Navigation = () => (
  <Nav>
    <List>
      <Item>
        <StyledNavLink to={"/movies"}>Movies</StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink to={"/people"}>People</StyledNavLink>
      </Item>
    </List>
  </Nav>
);

export default Navigation;
