import {
  FullName,
  PersonLink,
  Portrait,
  PortraitBackground,
  Role,
  Storage,
  Tile,
} from "./styled";

const Credits = ({ path, name, role, id }) => (
  <PersonLink
    key={name}
    to={`/people/${id}`}
  >
    <Tile>
      <PortraitBackground>
        {path ? (
          <Portrait
            isPath
            src={`https://image.tmdb.org/t/p/w500/${path}`}
          />
        ) : (
          <Portrait />
        )}
      </PortraitBackground>
      <Storage>
        <FullName>{name}</FullName>
        <Role>{role}</Role>
      </Storage>
    </Tile>
  </PersonLink>
);

export default Credits;
