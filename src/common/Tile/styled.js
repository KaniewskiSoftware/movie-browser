import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  gap: 16px;
  padding: 16px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.colors.tile.background};
  color: ${({ theme }) => theme.colors.primaryText};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
`;
