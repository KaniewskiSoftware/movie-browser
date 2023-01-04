import { Item, List, Nav, StyledNavLink } from "./styled";

const Navigation = () => (
  <Nav>
    <List>
      <Item>
        <StyledNavLink to={"/movies"}>MOVIES</StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink to={"/people"}>PEOPLE</StyledNavLink>
      </Item>
    </List>
  </Nav>
);

export default Navigation;
