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
import paris from "./Paris.png";
import miami from "./Miami.png";
import tokyo from "./Tokyo.png";
import capeTown from "./CapeTown.png";
import seoul from "./Seoul.png";
import losAngeles from "./LosAngeles.png";
import ButtonNext from "../Slider/ButtonNext";

const City = CircularBold.extend`
  font-size: 12px;
  line-height: 14px;
  margin-top: 4px;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
    margin-top: 8px;
  }
`;

const ContentFeatured = Content.extend`
  @media (min-width: 768px) {
    margin-bottom: 64px;
  }
`;

const ImageFeatured = Image.extend`
  width: 91px;
  height: 138px;

  @media (min-width: 768px) {
    width: 176px;
    height: 264px;
  }

  @media (min-width: 992px) {
    width: 147px;
    height: 220px;
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
    <ContentFeatured>
      <CaptionBox>
        <Caption> Featured destinations </Caption>
      </CaptionBox>
      <Row>
        <Wrapper>
          <Col xs={4} md={3} lg={2}>
            <Link href="">
              <ImageFeatured src={paris} />
              <City> Paris </City>
            </Link>
          </Col>
          <Col xs={4} md={3} lg={2}>
            <Link href="">
              <ImageFeatured src={miami} />
              <City> Miami </City>
            </Link>
          </Col>
          <Col xs={4} md={3} lg={2}>
            <Link href="">
              <ImageFeatured src={tokyo} />
              <City> Tokyo </City>
            </Link>
          </Col>
          <Col xs={4} md={3} lg={2}>
            <Link href="">
              <ImageFeatured src={capeTown} />
              <City> Cape town </City>
            </Link>
          </Col>
          <Col xs={4} md={3} lg={2}>
            <Link href="">
              <ImageFeatured src={seoul} />
              <City> Seoul </City>
            </Link>
          </Col>
          <Col xs={4} md={3} lg={2}>
            <Link href="">
              <ImageFeatured src={losAngeles} />
              <City> Los Angeles </City>
            </Link>
          </Col>
        </Wrapper>
      </Row>
      <ButtonBox>
        <ButtonNext />
      </ButtonBox>
    </ContentFeatured>
  );
};
