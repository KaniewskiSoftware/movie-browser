import styled from "styled-components";
import { ReactComponent as star } from "./star.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 8px;
  color: ${({ theme }) => theme.color.tile.primaryText};
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 16px;
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
  background-color: ${({ theme }) => theme.color.tile.tagBackground};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    line-height: 1.1;
    font-size: 10px;
  }
`;

export const Rating = styled.div`
  display: flex;
  line-height: 1.5;
  margin-top: auto;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    line-height: 1.3;
    gap: 8px;
  }
`;

export const Star = styled(star)`
  width: 24px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    width: 16px;
  }
`;

export const Rate = styled.p`
  margin: auto 0 0;
  font-weight: 600;
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 13px;
  }
`;
