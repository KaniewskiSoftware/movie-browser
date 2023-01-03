import styled from "styled-components";

export const CreditContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CreditHeader = styled.h2`
  margin: 0;
  margin-bottom: 32px;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 26px;
    margin-bottom: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

export const CreditTiles = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(208px, 1fr));
  grid-auto-rows: minmax(auto, 1fr);
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: repeat(auto-fit, minmax(136px, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    grid-template-columns: repeat(2, minmax(136px, 1fr));
  }
`;
