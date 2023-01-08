import styled from "styled-components";

const StyledTitle = styled.div`
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    margin-top: ${({ credits }) => credits ? "64px" : "56px"};
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.primaryText};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 14px;
        font-weight: 500;
        margin-top: 24px;
        margin-bottom: 12px;
        padding-left: 16px;
    };
`;

export { StyledTitle };