import styled, { keyframes } from 'styled-components';
import { ReactComponent as spinner } from "./icon-spinner.svg";

const rotation = keyframes` 
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(spinner)`
    position: absolute;
    width: 91px;
    height: 91px;
    left: calc(50% - 91px/2 + 0.5px);
    top: 313px;
    animation: ${rotation} 1.5s linear infinite;
`;

export { Spinner };