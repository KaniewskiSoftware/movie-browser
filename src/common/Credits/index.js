import {
  FullName,
  Portrait,
  PortraitBackground,
  Role,
  Storage,
  Tile,
} from "./styled";

const Credits = ({ id, path, name, role }) => (
  <Tile key={id}>
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
