import styled, { css } from "styled-components";
import { ReactComponent as star } from "./star.svg";

export const Background = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 770px;
  background-color: ${({ theme }) => theme.colors.backdrop.background};
  color: ${({ theme }) => theme.colors.backdrop.text};
`;

export const Backdrop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 56px;
  margin-left: 20px;
  width: 63%;
  max-width: 1368px;
  height: 100%;
  background-image: ${({ backdrop }) =>
    `url(https://image.tmdb.org/t/p/original/${backdrop})`};
  background-position: center;
  background-size: cover;
`;

export const Title = styled.h2`
  margin: 0 0 24px;
  font-weight: 600;
  font-size: 64px;
  line-height: 1.2;
`;

export const Rating = styled.div`
  display: flex;
  margin-bottom: 16px;
  gap: 8px;
  align-items: center;

  ${({ tile }) => tile && css`
  margin: 0;
  gap: 16px;
  `}
`;

export const Star = styled(star)`
  width: 40px;
  height: auto;

  ${({ tile }) =>
    tile &&
    css`
      width: 24px;
    `}
`;

export const Rate = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.3;
  position: relative;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const SmallText = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
`;

export const DetailsTile = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 40px;
  padding: 40px;
  margin-top: 56px;
  background-color: ${({ theme }) => theme.colors.detailsTile.background};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Image = styled.img`
  width: 100%;
  max-width: 312px;
  border-radius: 5px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0 8px;
  gap: 24px;
  color: ${({ theme }) => theme.colors.detailsTile.primaryText};
`;

export const TileTitle = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
`;

export const Year = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 1.2;
`;

export const Properties = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Property = styled.div`
  display: flex;
`;

export const PropertyText = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;

  ${({ entitled }) =>
    entitled &&
    css`
      color: ${({ theme }) => theme.colors.detailsTile.secondaryText};
      margin-right: 8px;
    `}
`;
