import styled, { css } from "styled-components";

const StyledTitle = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin-top: ${({ credits }) => (credits ? "64px" : "56px")};
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.primaryText};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 28px;
    margin-top: 48px;
    padding-left: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 18px;
    margin-top: 24px;
    margin-bottom: 12px;
  }

  ${({ credits }) =>
    credits &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        font-size: 20px;
        margin-top: 24px;
        margin-bottom: 16px;
      }
    `}
`;

export { StyledTitle };
