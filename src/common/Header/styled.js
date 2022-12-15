import styled from "styled-components";

const PageTitle = styled.h1`
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    color: ${({ theme }) => theme.color.tile.primaryText};

    @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        font-size: 14px;
    };
`;

export { PageTitle };