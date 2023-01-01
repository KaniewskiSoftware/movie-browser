import styled, { css } from "styled-components";
import { ReactComponent as star } from "./star.svg";

export const RateBox = styled.div`
  display: flex;
  margin-bottom: 16px;
  gap: 8px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    margin-bottom: 0;
  }

  ${({ tile }) =>
    tile &&
    css`
      margin: 0;
      gap: 16px;

      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        margin-top: auto;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        text-align: center;
        gap: 4px;
      }
    `}
`;

export const Star = styled(star)`
  width: 40px;
  height: auto;

  ${({ $mini }) =>
    $mini &&
    css`
      width: 24px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    width: 16px;
  }
`;

export const Rate = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.3;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 14px;
  }

  ${({ tile }) =>
    tile &&
    css`
      font-size: 22px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 16px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        font-size: 13px;
      }
    `}
`;

export const TextBox = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

export const SmallText = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 10px;
  }

  ${({ tile }) =>
    tile &&
    css`
      font-size: 14px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        font-size: 13px;
      }
    `}

  ${({ $big }) =>
    $big &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        display: none;
      }
    `}

  ${({ $small }) =>
    $small &&
    css`
      display: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        display: block;
      }
    `}
`;
