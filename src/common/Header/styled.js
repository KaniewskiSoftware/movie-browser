import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  height: 94px;
  background-color: ${({ theme }) => theme.colors.header.background};
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: column;
    height: 142px;
    align-items: center;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Logo = styled.img`
  margin: 23px;
  width: 220px;
  height: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 180px;
    height: 40px;
    margin: auto 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 120px;
    height: 30px;
  }
`;