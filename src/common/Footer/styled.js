import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2rem;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.footer.counter};
  margin: 0px 16px;
`;

export const Span = styled.span`
color: ${({ theme }) => theme.colors.footer.text} ;
font-weight: 600;
margin: 0px 6px;
`; 