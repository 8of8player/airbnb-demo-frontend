import React from "react";
import styled from "styled-components";
import { Col } from "react-flexbox-grid";
import { CircularBold, CircularBook, CircularLight } from "../styled";
import { Flex, Content, Row, Caption, Image, Link, Reviews } from "../styled";
import Forest from "./ForestTherapy.png";
import WhaleWatching from "./WhaleWatching.png";
import TableMountain from "./TableMountain.png";
import SalsaNight from "./SalsaNight.png";
import FiveStars from "../FiveStars";
import ButtonNext from "../ButtonNext";
import SeaAll from "../SeeAll";

const Name = CircularLight.extend`
  font-size: 15px;
  line-height: 18px;
  margin-top: 8px;
  margin-bottom: 6px;
`;

const InlineBold = styled.span`
  font-family: CircularBold;
`;

const Slider = styled.div`
  position: absolute;
  top: 211px;
  left: 1028px;
`;

export default () => {
  return (
    <Content>
      <Row>
        <Col lg={11}>
          <Caption> Experiences </Caption>
        </Col>
        <Col lg={1}>
          <Link href="experiences-extpage">
            <SeaAll />
          </Link>
        </Col>
        <Col lg={3}>
          <Link href="/forest-therapy">
            <Image src={Forest} />
            <Name>
              <InlineBold> $29 </InlineBold> Forest therapy
            </Name>
            <Flex>
              <FiveStars />
              <Reviews> 44 reviews </Reviews>
            </Flex>
          </Link>
        </Col>
        <Col lg={3}>
          <Link href="/whale-watching">
            <Image src={WhaleWatching} />
            <Name>
              <InlineBold> $59 </InlineBold> Whale watching
            </Name>
            <Flex>
              <FiveStars />
              <Reviews> 44 reviews </Reviews>
            </Flex>
          </Link>
        </Col>
        <Col lg={3}>
          <Link href="/table-mountain">
            <Image src={TableMountain} />
            <Name>
              <InlineBold> $69 </InlineBold> Table Mountain Summit, Cable Car
              Down
            </Name>
            <Flex>
              <FiveStars />
              <Reviews> 46 reviews </Reviews>
            </Flex>
          </Link>
        </Col>
        <Col lg={3}>
          <Link href="/salsa-night">
            <Image src={SalsaNight} />
            <Name>
              <InlineBold> $69 </InlineBold> Salsa night
            </Name>
            <Flex>
              <FiveStars />
              <Reviews> 44 reviews </Reviews>
            </Flex>
          </Link>
        </Col>
        <Slider>
          <ButtonNext />
        </Slider>
      </Row>
    </Content>
  );
};
