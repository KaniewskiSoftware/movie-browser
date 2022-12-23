import styled from "styled-components";
import { ReactComponent as star } from "./star.svg";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  margin: 0 auto;
  max-width: 1368px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    margin: 0 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 16px;
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 434px;
  aspect-ratio: 2/3;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}) {
    max-height: 380px;
    width: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    max-height: 340px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-height: 240px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 40%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    max-width: 114px;
    max-height: 169px;
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 16px;
  }
`;

export const GreyText = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.tile.secondaryText};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 13px;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.div`
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 5px;
  line-height: 1.4;
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.tile.tagBackground};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 12px;
    padding: 6px 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    padding: 4px 8px;
    line-height: 1.1;
    font-size: 10px;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  line-height: 1.5;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    gap: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    line-height: 1.3;
    gap: 8px;
  }
`;

export const Star = styled(star)`
  width: 24px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    width: 16px;
  }
`;

export const Rate = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 13px;
  }
`;
