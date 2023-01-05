import { ReactComponent as Arrow } from "./back_arrow.svg";
import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.footer.background};
  border-radius: 5px;
  border: none;
  margin: 0 5px;
  cursor: pointer;

  &:disabled {
    background: ${({ theme }) => theme.colors.footer.disabled};
    color: ${({ theme }) => theme.colors.footer.text};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px 12px;
  }
`;

export const Title = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const StyledArrow = styled(Arrow)`
  color: ${({ theme }) => theme.colors.footer.arrow};

  ${StyledButton}:disabled & {
    color: ${({ theme }) => theme.colors.footer.disabledArrow};
  }
  ${({ $rotate }) =>
    $rotate &&
    css`
      transform: rotate(180deg);
      order: 2;
    `}

  ${({ mobile }) =>
    mobile &&
    css`
      display: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: flex;
      }
    `};

  ${({ hide }) =>
    hide &&
    css`
      display: none;
    `};
`;
