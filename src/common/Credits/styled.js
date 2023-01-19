import { Link } from "react-router-dom";
import styled from "styled-components";
import profile from "../../common/images/profile.svg";

export const Tile = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.detailsTile.background};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 16px;
  gap: 8px;
  width: 100%;

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

export const Portrait = styled(({ isPath, ...props }) =>
  isPath ? <img {...props} alt="portrait" /> : <div {...props} />
)`
  width: 100%;
  border-radius: 5px;
  aspect-ratio: 2/3;
`;

export const Storage = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
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

export const PersonLink = styled(Link)`
display: flex;
height: 100%;
text-decoration: none;
transition: transform 1s;

&:hover {
  transform: scale(1.05);
}
`