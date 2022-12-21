import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 0px;
    gap: 2px;
  }
`;

export const Item = styled.li`
  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.header.primary};
  font-size: 14px;
  line-height: 21px;
  font-weight: 600;
  padding: 8px 24px;

  &.active {
    border: 1px solid ${({ theme }) => theme.colors.header.primary};
    border-radius: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
    line-height: 18px;
    padding: 8px 16px;
  }
`;
