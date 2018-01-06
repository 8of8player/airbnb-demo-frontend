import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import { CircularBold, CircularBook, CircularLight } from "../styled";
import { Flex, Content, CaptionBox, Image, Link, Rating } from "../styled";
import Paris from "./Paris.png";
import Miami from "./Miami.png";
import Tokyo from "./Tokyo.png";
import CapeTown from "./CapeTown.png";
import Seoul from "./Seoul.png";
import LosAngeles from "./LosAngeles.png";
import ButtonNext from "../ButtonNext";

const Name = CircularBold.extend`
  fon-size: 15px;
  line-height: 18px;
  margin-top: 8px;
`;

const Block = Content.extend`
  margin-bottom: 64px;
`;

const Slider = styled.div`
  position: absolute;
  top: 148px;
  left: 1028px;
`;

export default () => {
  return (
    <Block>
      <Row>
        <Col lg={12}>
          <CaptionBox> Featured destinations </CaptionBox>
        </Col>
        <Col lg={2}>
          <Link href="/paris">
            <Image src={Paris} />
            <Name> Paris </Name>
          </Link>
        </Col>
        <Col lg={2}>
          <Link href="/miami">
            <Image src={Miami} />
            <Name> Miami </Name>
          </Link>
        </Col>
        <Col lg={2}>
          <Link href="/tokyo">
            <Image src={Tokyo} />
            <Name> Tokyo </Name>
          </Link>
        </Col>
        <Col lg={2}>
          <Link href="/cape-town">
            <Image src={CapeTown} />
            <Name> Cape town </Name>
          </Link>
        </Col>
        <Col lg={2}>
          <Link href="/seoul">
            <Image src={Seoul} />
            <Name> Seoul </Name>
          </Link>
        </Col>
        <Col lg={2}>
          <Link href="/los-angeles">
            <Image src={LosAngeles} />
            <Name> Los Angeles </Name>
          </Link>
        </Col>
        <Slider>
          <ButtonNext />
        </Slider>
      </Row>
    </Block>
  );
};
