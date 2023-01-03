import styled, { keyframes } from 'styled-components';
import { ReactComponent as spinner } from "./icon-spinner.svg";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1368px;
`;

const SpinnerBox = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: ${({ hasTitle }) => hasTitle ? "96px" : "219px"};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: ${({ hasTitle }) => hasTitle ? "24px" : "66px"};
  };
`;

const rotation = keyframes` 
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(spinner)`
  width: 91px;
  height: auto;
  animation: ${rotation} 1.5s linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 24px;
  };
`;

export { Spinner, SpinnerBox, Wrapper };