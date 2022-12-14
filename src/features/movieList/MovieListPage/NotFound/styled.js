import styled from "styled-components";
import { ReactComponent as Video } from "./video.svg";

export const Background = styled.div`
  display: block;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 434px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.tile.imageBackground};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    max-height: 380px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    max-height: 340px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-height: 240px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 40%;
    max-height: 240px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    max-width: 114px;
    max-height: 169px;
  }
`;

export const Camera = styled(Video)`
  width: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 70px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    width: 48px;
  }
`;
