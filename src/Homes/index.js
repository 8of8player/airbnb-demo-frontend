import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import { CircularBold, CircularBook, CircularLight, Wrapper } from "../styled";
import {
  Flex,
  Content,
  CaptionBox,
  Image,
  Link,
  Fame,
  Rating
} from "../styled";
import FiveStars from "../FiveStars";
import HomeOne from "./1.png";
import HomeTwo from "./2.png";
import HomeThree from "./3.png";
import ButtonNext from "../ButtonNext";
import SeaAll from "../SeeAll";

const ImageHomes = Image.extend`
  width: 197px;
  height: 156px;

  @media (min-width: 768px) {
    width: 304px;
    height: 204px;
  }
`;

const Descr = CircularBold.extend`
  color: #383838;
  font-size: 13px;
  line-height: 15px;
  margin-top: 8px;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const Type = CircularLight.extend`
  color: #383838;
  font-size: 12px;
  line-height: 14px;
  margin-top: 4px;

  @media (min-width: 768px) {
    margin-top: 2px;
    font-size: 15px;
    line-height: 18px;
  }
`;

const ButtonBox = styled.div`
  position: absolute;
  top: 45%;
  right: 0;
  display: none;

  @media (min-width: 992px) {
    display: block;
  }
`;

export default () => {
  return (
    <Content>
      <CaptionBox>
        Homes
        <Link href="/homesall">
          <SeaAll />
        </Link>
      </CaptionBox>
      <Row>
        <Wrapper>
          <Col xs={8} md={5} lg={4}>
            <Link href="/homeone">
              <ImageHomes src={HomeOne} />
              <Descr> $82 La Salentina, see, nature & relax </Descr>
              <Type> Entire house · 9 beds </Type>
              <Fame>
                <FiveStars />
                <Rating> 97 · Superhost </Rating>
              </Fame>
            </Link>
          </Col>
          <Col xs={8} md={5} lg={4}>
            <Link href="/hometwo">
              <ImageHomes src={HomeTwo} />
              <Descr> $82 Your private 3 bedr. riad and exclusi… </Descr>
              <Type> Entire house · 5 beds </Type>
              <Fame>
                <FiveStars />
                <Rating> 161 · Superhost </Rating>
              </Fame>
            </Link>
          </Col>
          <Col xs={8} md={5} lg={4}>
            <Link href="/homethree">
              <ImageHomes src={HomeThree} />
              <Descr> $200 Dreamy Tropical Tree House </Descr>
              <Type> Entire house · 1 bed </Type>
              <Fame>
                <FiveStars />
                <Rating> 364 · Superhost </Rating>
              </Fame>
            </Link>
          </Col>
        </Wrapper>
      </Row>
      <ButtonBox>
        <ButtonNext />
      </ButtonBox>
    </Content>
  );
};
