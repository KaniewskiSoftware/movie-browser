import styled, { css } from "styled-components";
import { ReactComponent as star } from "./star.svg";
import notfound from "../../../../common/images/camera.svg";
import profile from "../../../../common/images/profile.svg";

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

  ${({ tile }) =>
    tile &&
    css`
      margin: 0;
      gap: 16px;
    `}
`;

export const Star = styled(star)`
  width: 40px;
  height: auto;
`;

export const MiniStar = styled(star)`
  width: 24px;
  height: auto;
`;

export const Rate = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.3;
  position: relative;

  ${({ tile }) =>
    tile &&
    css`
      font-size: 22px;
    `}
`;

export const TextBox = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

export const SmallText = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;

  ${({ tile }) =>
    tile &&
    css`
      font-size: 14px;
    `}

  ${({ last }) =>
    last &&
    css`
      margin-left: 4px;
    `}
`;

export const DetailsWrapper = styled.div`
  display: grid;
  margin-top: 64px;
  grid-gap: 64px;
`;

export const DetailsTile = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 40px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.detailsTile.background};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const ImageBackground = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 312px;
  height: 100%;
  max-height: 464px;
  border-radius: 5px;
  background-image: url(${notfound});
  background-size: 35%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.detailsTile.backgroundImage};
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 2/3;
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
  margin: 0;
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

export const Description = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SubHeader = styled.h2`
  margin: 0;
  margin-bottom: 32px;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
`;

export const Tiles = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 208px);
  grid-gap: 24px;
`;

export const Tile = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: ${({theme}) => theme.colors.detailsTile.background} ;
  padding: 16px;
  gap: 8px;
`;

export const PortraitBackground = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: 264px;
  border-radius: 5px;
  background-image: url(${profile});
  background-size: 35%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.detailsTile.backgroundImage};
`;

export const Portrait = styled.img`
  max-width: 177px;
  border-radius: 5px;
  height: 100%;
`;

export const Storage = styled.div`
display: flex;
flex-direction: column;
text-align: center;
word-wrap: wrap;
`
export const FullName = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const Role = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.credits.role};
`;
