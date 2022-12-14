import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 40%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    max-width: 114px;
  }
`;
