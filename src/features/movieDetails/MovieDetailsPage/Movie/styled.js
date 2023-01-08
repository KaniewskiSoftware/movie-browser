import styled from "styled-components";

export const DetailsWrapper = styled.div`
  display: grid;
  margin-top: 64px;
  grid-gap: 64px;
  margin-bottom: 336px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 24px;
    grid-gap: 32px;
    margin-bottom: 88px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    margin-top: 16px;
    grid-gap: 21px;
    margin-bottom: 66px;
  }
`;