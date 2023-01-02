import {
  FullName,
  Portrait,
  PortraitBackground,
  Role,
  Storage,
  Tile,
} from "./styled";

const Credits = ({ path, name, role }) => (
  <Tile>
    <PortraitBackground>
      {path ? (
        <Portrait src={`https://image.tmdb.org/t/p/w500/${path}`} />
      ) : (
        <Portrait />
      )}
    </PortraitBackground>
    <Storage>
      <FullName>{name}</FullName>
      <Role>{role}</Role>
    </Storage>
  </Tile>
);

export default Credits;
