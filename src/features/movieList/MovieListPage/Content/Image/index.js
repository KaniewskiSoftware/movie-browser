import styled from "styled-components";

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 434px;
  aspect-ratio: 2/3;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    max-height: 380px;
    width: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    max-height: 340px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-height: 240px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 40%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    max-width: 114px;
    max-height: 169px;
  }
`;
