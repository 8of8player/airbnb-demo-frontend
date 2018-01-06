import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
// import { CircularBold, CircularBook, CircularLight} from "../styled";
import {
  P,
  Content,
  Caption,
  CaptionBox,
  WrapperHorizont,
  Image,
  Link,
  Fame,
  Rating
} from "../styled";
import FiveStars from "../Stars/FiveStars";
import homeOne from "./1.png";
import homeTwo from "./2.png";
import homeThree from "./3.png";
import ButtonNext from "../Slider/ButtonNext";
import SeeAll from "../SeeAll/";

const ImageHomes = Image.extend`
  width: 197px;
  height: 156px;

  @media (min-width: 768px) {
    width: 304px;
    height: 204px;
  }
`;

const Descr = P.extend`
  font-weight: bold;
  color: #383838;
  font-size: 13px;
  line-height: 15px;
  margin-top: 8px;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const Type = P.extend`
  font-weight: ligher;
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
  top: 40%;
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
        <Caption> Homes </Caption>
        <Link href="/homesall">
          <SeeAll />
        </Link>
      </CaptionBox>
      <Row>
        <WrapperHorizont>
          <Col xs={8} md={5} lg={4}>
            <Link href="/homeone">
              <ImageHomes src={homeOne} />
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
              <ImageHomes src={homeTwo} />
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
              <ImageHomes src={homeThree} />
              <Descr> $200 Dreamy Tropical Tree House </Descr>
              <Type> Entire treehouse · 1 bed </Type>
              <Fame>
                <FiveStars />
                <Rating> 364 · Superhost </Rating>
              </Fame>
            </Link>
          </Col>
        </WrapperHorizont>
      </Row>
      <ButtonBox>
        <ButtonNext />
      </ButtonBox>
    </Content>
  );
};
