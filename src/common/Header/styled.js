import styled from "styled-components";

const PageTitle = styled.header`
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    margin-top: 56px;
    color: ${({ theme }) => theme.color.tile.primaryText};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 14px;
        font-weight: 500;
        margin-top: 24px;
    };
`;

export { PageTitle };