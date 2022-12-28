import { ReactComponent as Arrow } from "./back_arrow.svg";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  background-color: #E4E6F0;
  border-radius: 5px;
  border: none;
  margin: 0 5px;
  cursor: pointer;
`;
// export const StyledLink = styled(Link)`

// `;

export const Title = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;

`;

export const StyledArrow = styled(Arrow)`
color: #7E839A;
  ${({ rotate }) =>
    rotate &&
    css`
      transform: rotate(180deg);
      order: 2;
    `}
`;
