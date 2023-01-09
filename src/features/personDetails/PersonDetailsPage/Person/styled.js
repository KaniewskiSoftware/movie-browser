import styled from "styled-components";

export const DetailsWrapper = styled.div`
  display: grid;
  margin-top: 64px;
  margin-bottom: 336px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 24px;
    margin-bottom: 88px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    margin-top: 16px;
    margin-bottom: 66px;
  }
`;
