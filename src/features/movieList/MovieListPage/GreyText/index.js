import styled from "styled-components";

export const GreyText = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.tile.secondaryText};
`;
