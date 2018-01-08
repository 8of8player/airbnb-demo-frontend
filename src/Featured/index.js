import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import {
  Content,
  Caption,
  CaptionBox,
  Image,
  Link,
  WrapperHorizont
} from "../styled";
import paris from "./Paris.png";
import miami from "./Miami.png";
import tokyo from "./Tokyo.png";
import capeTown from "./CapeTown.png";
import seoul from "./Seoul.png";
import losAngeles from "./LosAngeles.png";
import ButtonNext from "../Slider/ButtonNext";

const City = styled.p`
  margin: 0;
  font-weight: bold;
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
  top: 50%;
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
        <WrapperHorizont>
          <Col xs={4} md={3} lg={2}>
            <Link href="/paris">
              <ImageFeatured src={paris} />
              <City> Paris </City>
            </Link>
          </Col>
          <Col xs={4} md={3} lg={2}>
            <Link href="/miami">
              <ImageFeatured src={miami} />
              <City> Miami </City>
            </Link>
          </Col>
          <Col xs={4} md={3} lg={2}>
            <Link href="/tokyo">
              <ImageFeatured src={tokyo} />
              <City> Tokyo </City>
            </Link>
          </Col>
          <Col xs={4} md={3} lg={2}>
            <Link href="/capetown">
              <ImageFeatured src={capeTown} />
              <City> Cape town </City>
            </Link>
          </Col>
          <Col xs={4} md={3} lg={2}>
            <Link href="/seoul">
              <ImageFeatured src={seoul} />
              <City> Seoul </City>
            </Link>
          </Col>
          <Col xs={4} md={3} lg={2}>
            <Link href="/losangeles">
              <ImageFeatured src={losAngeles} />
              <City> Los Angeles </City>
            </Link>
          </Col>
        </WrapperHorizont>
      </Row>
      <ButtonBox>
        <ButtonNext />
      </ButtonBox>
    </ContentFeatured>
  );
};
