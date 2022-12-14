import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,::after,::before {
        box-sizing: inherit;
    }

    body {
        min-height: 100vh;
        margin: 0;
        padding: 0 16px;
        background-color: ${({ theme }) => theme.color.common.background};
        font-family: 'Poppins', sans-serif;
    }
`;
