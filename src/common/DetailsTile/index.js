import { Fragment } from "react";
import { Tag, Tags } from "../Tags";
import {
  Rate,
  RateBox,
  SmallText,
  Star,
  TextBox,
} from "../../features/movieDetails/MovieDetailsPage/Movie/Rating/index";
import {
  Container,
  Content,
  Description,
  Image,
  ImageBackground,
  Properties,
  Property,
  PropertyText,
  Title,
  Year,
} from "./styled";
import { useLocation } from "react-router-dom";

const DetailsTile = ({
  poster,
  title,
  release,
  production,
  dateBirth,
  placeBirth,
  genres,
  vote,
  votes,
  description,
}) => {
  const location = useLocation();
  return (
    <Container>
      <ImageBackground
        person={location.pathname.includes("people") ? true : false}
      >
        {poster ? (
          <Image
            isPoster
            src={`https://image.tmdb.org/t/p/w500/${poster}`}
          />
        ) : (
          <Image />
        )}
      </ImageBackground>
      <Content>
        <Title>{title}</Title>
        {release && <Year>{release.slice(0, 4)}</Year>}
        <Properties>
          {production && (
            <Property>
              <PropertyText entitled>Production:</PropertyText>
              {production.map((country, index, countries) => (
                <Fragment key={index}>
                  <PropertyText $big key={country.name}>
                    {country.name}
                    {countries.length > 0 ? (
                      index < countries.length - 1 ? (
                        <span>,&nbsp;</span>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </PropertyText>
                  <PropertyText $small key={country.iso_3166_1}>
                    {country.iso_3166_1}
                    {countries.length > 0 ? (
                      index < countries.length - 1 ? (
                        <span>,&nbsp;</span>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </PropertyText>
                </Fragment>
              ))}
            </Property>
          )}
          {release && (
            <Property>
              <PropertyText entitled>Release date:</PropertyText>
              <PropertyText>{release}</PropertyText>
            </Property>
          )}
          {dateBirth && (
            <Property>
              <PropertyText entitled>Date of birth:</PropertyText>
              <PropertyText>{dateBirth}</PropertyText>
            </Property>
          )}
          {placeBirth && (
            <Property>
              <PropertyText entitled>Place of birth:</PropertyText>
              <PropertyText>{placeBirth}</PropertyText>
            </Property>
          )}
        </Properties>
        {genres && (
          <Tags details>
            {genres.map((genre) => (
              <Tag key={genre.id}>{genre.name}</Tag>
            ))}
          </Tags>
        )}
        {vote > 0 && votes && (
          <RateBox tile>
            <Star $mini />
            <TextBox>
              <Rate tile>{vote.toFixed(1)}</Rate>
              <SmallText tile $big>
                / 10
              </SmallText>
              <SmallText tile>{votes} votes</SmallText>
            </TextBox>
          </RateBox>
        )}
        <Description big>{description}</Description>
      </Content>
      <Description small>{description}</Description>
    </Container>
  );
};

export default DetailsTile;
