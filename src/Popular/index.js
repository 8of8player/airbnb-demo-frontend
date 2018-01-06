import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import { CircularBold, CircularBook, CircularLight, Wrapper } from "../styled";
import {
  DivFlex,
  Content,
  Caption,
  CaptionBox,
  Image,
  Link,
  Rating
} from "../styled";
import chumleys from "./Chumleys.png";
import hanjan from "./Hanjan.png";
import primeMeats from "./PrimeMeats.png";
import seaprice from "./Seaprice.png";
import ButtonNext from "../Slider/ButtonNext";
import SeaAll from "../SeeAll/";

const Type = CircularBold.extend`
  font-size: 8px;
  line-height: 9px;
  margin-top: 7px;
  @media (min-width: 768px) {
    font-size: 10px;
    line-height: 12px;
    margin-top: 12px;
  }
`;

const Name = CircularBold.extend`
  font-size: 14px;
  line-height: 16px;
  margin-top: 2px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

const Price = CircularLight.extend`
  font-size: 12px;
  line-height: 14px;
  margin-top: 4px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

const ImagePopular = Image.extend`
  width: 144px;
  height: 108px;

  @media (min-width: 768px) {
    width: 240px;
    height: 164px;
  }

  @media (min-width: 992px) {
    width: 229px;
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
        <Caption> Popular reservations around the world </Caption>
        <SeaAll />
      </CaptionBox>
      <Row>
        <Wrapper>
          <Col xs={6} md={4} lg={3}>
            <Link href="">
              <ImagePopular src={chumleys} />
              <Type> SPEAKEASY </Type>
              <Name> Chumley's </Name>
              <Price> About $60 per person </Price>
            </Link>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Link href="">
              <ImagePopular src={hanjan} />
              <Type> KOREAN GASTROPUB </Type>
              <Name> Hanjan's </Name>
              <Price> About $50 per person </Price>
            </Link>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Link href="">
              <ImagePopular src={primeMeats} />
              <Type> GERMAN AMERICAN </Type>
              <Name> Prime Meats </Name>
              <Price> About $50 per person </Price>
            </Link>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Link href="">
              <ImagePopular src={seaprice} />
              <Type> FINE SEAFODD </Type>
              <Name> Seaprice's </Name>
              <Price> About $70 per person </Price>
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
