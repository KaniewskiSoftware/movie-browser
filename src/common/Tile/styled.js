import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  gap: 16px;
  padding: 16px;
  box-shadow: 0px 4px 12px ${({ theme }) => theme.color.tile.boxShadow};
  background-color: ${({ theme }) => theme.color.tile.background};
  color: ${({ theme }) => theme.color.tile.primaryText};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    flex-direction: row;
  }
`;
