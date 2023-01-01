import { Fragment } from "react";
import { Tag, Tags } from "../../../../../common/Tags";
import { Rate, RateBox, SmallText, Star, TextBox } from "../Rating/index";
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

const DetailsTile = ({
  poster,
  title,
  release,
  production,
  genres,
  vote,
  votes,
  description,
}) => (
  <Container>
    <ImageBackground>
      {poster ? (
        <Image src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="" />
      ) : (
        <Image />
      )}
    </ImageBackground>
    <Content>
      <Title>{title}</Title>
      <Year>{release.slice(0, 4)}</Year>
      <Properties>
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
        <Property>
          <PropertyText entitled>Release date:</PropertyText>
          <PropertyText>{release}</PropertyText>
        </Property>
      </Properties>
      {genres && (
        <Tags details>
          {genres.map((genre) => (
            <Tag key={genre.id}>{genre.name}</Tag>
          ))}
        </Tags>
      )}
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
      <Description big>{description}</Description>
    </Content>
    <Description small>{description}</Description>
  </Container>
);

export default DetailsTile;
