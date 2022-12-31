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

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    height: 540px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    height: 480px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 360px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    height: 148px;
  }
`;

export const Backdrop = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 16px 56px;
  width: 100%;
  max-width: 1368px;
  height: 100%;
  font-size: 16px;
  background-image: ${({ backdrop }) =>
    `url(https://image.tmdb.org/t/p/original/${backdrop})`};
  background-position: center;
  background-size: cover;
  box-shadow: inset 0px 60px 120px -15px #000, inset -100px 0px 120px -10px #000,
    inset 100px 0px 120px -10px #000, inset 0 -180px 180px -10px #000;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    padding-bottom: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    box-shadow: inset 0px 30px 60px -8px #000, inset -50px 0px 60px -5px #000,
      inset 50px 0px 60px -5px #000, inset 0 -90px 90px -5px #000;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    padding-bottom: 10px;
    box-shadow: inset 0px 20px 50px -6px #000, inset -35px 0px 40px 10px #000,
      inset 35px 0px 40px 10px #000, inset 0 -45px 90px -5px #000;
  }
`;

export const BackdropContent = styled.div`
  position: absolute;
`;

export const Title = styled.h2`
  margin: 0 0 24px;
  font-weight: 600;
  font-size: 64px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    font-size: 56px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 36px;
    margin-bottom: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 24px;
    margin-bottom: 8px;
  }
`;

export const Rating = styled.div`
  display: flex;
  margin-bottom: 16px;
  gap: 8px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    margin-bottom: 0;
  }

  ${({ tile }) =>
    tile &&
    css`
      margin: 0;
      gap: 16px;

      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        margin-top: auto;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        text-align: center;
        gap: 4px;
      }
    `}
`;

export const Star = styled(star)`
  width: 40px;
  height: auto;

  ${({ $mini }) =>
    $mini &&
    css`
      width: 24px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    width: 16px;
  }
`;

export const Rate = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.3;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 14px;
  }

  ${({ tile }) =>
    tile &&
    css`
      font-size: 22px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 16px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        font-size: 13px;
      }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 10px;
  }

  ${({ tile }) =>
    tile &&
    css`
      font-size: 14px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        font-size: 13px;
      }
    `}

  ${({ $big }) =>
    $big &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        display: none;
      }
    `}

  ${({ $small }) =>
    $small &&
    css`
      display: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        display: block;
      }
    `}
`;

export const DetailsWrapper = styled.div`
  display: grid;
  margin-top: 64px;
  grid-gap: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 24px;
    grid-gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    margin-top: 16px;
    grid-gap: 21px;
  }
`;

export const DetailsTile = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 40px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.detailsTile.background};
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-areas:
      "image content content"
      "description description description";
    grid-template-rows: auto 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 26px;
    gap: 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 16px;
    gap: 16px;
  }
`;

export const ImageBackground = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 312px;
  max-height: 464px;
  border-radius: 5px;
  background-image: url(${notfound});
  background-size: 35%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.detailsTile.backgroundImage};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-area: image;
    width: 248px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 164px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    width: 114px;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-area: content;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 8px;
  }
`;

export const TileTitle = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 16px;
  }
`;

export const Year = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 22px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 13px;
  }
`;

export const Properties = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Property = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PropertyText = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 12px;
  }

  ${({ $big }) =>
    $big &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        display: none;
      }
    `}

  ${({ $small }) =>
    $small &&
    css`
      display: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        display: block;
      }
    `}

  ${({ entitled }) =>
    entitled &&
    css`
      color: ${({ theme }) => theme.colors.detailsTile.secondaryText};
      margin-right: 8px;

      @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        display: none;
      }
    `}
`;

export const Description = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 14px;
  }

  ${({ big }) =>
    big &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        display: none;
      }
    `}
  ${({ small }) =>
    small &&
    css`
      display: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        display: block;
        grid-area: description;
      }
    `}
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

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 26px;
    margin-bottom: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

export const Tiles = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(208px, 1fr));
  grid-auto-rows: minmax(auto, 1fr);
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: repeat(auto-fit, minmax(136px, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    grid-template-columns: repeat(2, minmax(136px, 1fr));
  }
`;

export const Tile = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.detailsTile.background};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 16px;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    padding: 8px;
  }
`;

export const PortraitBackground = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 5px;
  background-image: url(${profile});
  background-size: 35%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.detailsTile.backgroundImage};
`;

export const Portrait = styled.img`
  width: 100%;
  border-radius: 5px;
  aspect-ratio: 2/3;
`;

export const Storage = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  word-wrap: wrap;
`;
export const FullName = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.primaryText};

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 14px;
  }
`;

export const Role = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.credits.role};

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 13px;
  }
`;
