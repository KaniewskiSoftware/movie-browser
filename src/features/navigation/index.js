import { HashRouter } from "react-router-dom";
import { Item, List, Nav, StyledNavLink } from "./styled";

const Navigation = () => (
  <HashRouter>
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
  </HashRouter>
);

export default Navigation;
