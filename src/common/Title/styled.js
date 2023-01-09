import styled, { css } from "styled-components";

const StyledTitle = styled.div`
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

  ${({ person }) =>
    person &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        font-size: 20px;
        margin: 0;
      }
    `}
`;

export { StyledTitle };
