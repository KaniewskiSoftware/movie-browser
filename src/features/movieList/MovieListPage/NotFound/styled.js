import styled from "styled-components";
import { ReactComponent as Video } from "./video.svg";

export const Background = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 434px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const Camera = styled(Video)`
  position: absolute;
  width: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 70px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    width: 48px;
  }
`;
