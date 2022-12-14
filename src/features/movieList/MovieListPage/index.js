import Container from "./Container";
import Tile from "../../../common/Tile";
import { Image } from "./Image";
import NotFound from "./NotFound";
import Content from "./Content";
import poster from "./Image/poster.png";
import poster1 from "./Image/picturebig.jpg";
import poster2 from "./Image/picturesmall.jpg";
import { tags } from "./Content/tags"; // Tymczasowa tablica z gatunkami filmowymi, później będą pobierane z API.

const MovieListPage = () => {
  return (
    <Container>
      <Tile>
        {poster ? (
          <Image src={poster} alt="" />
        ) : (
          <Image notFound src="" alt="" />
        )}
        <Content title="Mulan" year="2020" tags={tags} rate="7,8" votes="32" />
      </Tile>
      <Tile>
        <NotFound/>
        <Content
          title="Mulan"
          year="2020"
          // tags={tags}
          rate="7,8"
          votes="32"
        />
      </Tile>
      <Tile>
        <Image src={poster1} alt="" />
        <Content
          title="Mulan"
          // year="2020"
          tags={tags}
          rate="7,8"
          votes="32"
        />
      </Tile>
      <Tile>
        <Image src={poster2} alt="" />
        <Content
          title="Mulan long title long titleMulan long title long"
          year="2020"
          tags={tags}
          rate="7,8"
          votes="32"
        />
      </Tile>
      <Tile>
        <Image src={poster} alt="" />
        <Content title="Mulan" year="2020" tags={tags} rate="7,8" votes="32" />
      </Tile>
      <Tile>
        <Image src={poster} alt="" />
        <Content
          title="Mulan"
          year="2020"
          // tags={tags}
          rate="7,8"
          votes="32"
        />
      </Tile>
      <Tile>
        <Image src={poster} alt="" />
        <Content
          title="Mulan"
          // year="2020"
          tags={tags}
          rate="7,8"
          votes="32"
        />
      </Tile>
      <Tile>
        <Image src={poster} alt="" />
        <Content
          title="Mulan long title long titleMulan long title long"
          year="2020"
          tags={tags}
          rate="7,8"
          votes="32"
        />
      </Tile>
    </Container>
  );
};

export default MovieListPage;
