import React from "react";
import styled from "styled-components";
import { Col } from "react-flexbox-grid";
import { CircularBold, CircularBook, CircularLight } from "../styled";
import { Flex, Content, Row, Caption, Image, Link, Reviews } from "../styled";
import Chumleys from "./Chumleys.png";
import Hanjan from "./Hanjan.png";
import PrimeMeats from "./PrimeMeats.png";
import Seaprice from "./Seaprice.png";
import ButtonNext from "../ButtonNext";
import SeaAll from "../SeeAll";

const Type = CircularBold.extend`
  font-size: 10px;
  line-height: 12px;
  margin-top: 12px;
`;

const Name = CircularBold.extend`
  font-size: 18px;
  line-height: 21px;
  margin-top: 2px;
`;

const Price = CircularLight.extend`
  font-size: 18px;
  line-height: 21px;
  margin-top: 4px;
`;

const Slider = styled.div`
  position: absolute;
  top: 120px;
  left: 1028px;
`;

export default () => {
  return (
    <Content>
      <Row>
        <Col lg={11}>
          <Caption> Popular reservations around the world </Caption>
        </Col>
        <Col lg={1}>
          <Link href="/popular-nextpage">
            <SeaAll />
          </Link>
        </Col>
        <Col lg={3}>
          <Link href="/chumleys">
            <Image src={Chumleys} />
            <Type> SPEAKEASY </Type>
            <Name> Chumley's </Name>
            <Price> About $60 per person </Price>
          </Link>
        </Col>
        <Col lg={3}>
          <Link href="/hanjan">
            <Image src={Hanjan} />
            <Type> KOREAN GASTROPUB </Type>
            <Name> Hanjan </Name>
            <Price> About $50 per person </Price>
          </Link>
        </Col>
        <Col lg={3}>
          <Link href="/prime-meats">
            <Image src={PrimeMeats} />
            <Type> GERMAN AMERICAN </Type>
            <Name> Prime Meats </Name>
            <Price> About $55 per person </Price>
          </Link>
        </Col>
        <Col lg={3}>
          <Link href="/seaprice">
            <Image src={Seaprice} />
            <Type> FINE SEAFOOD </Type>
            <Name> Seaprice </Name>
            <Price> About $70 per person </Price>
          </Link>
        </Col>
        <Slider>
          <ButtonNext />
        </Slider>
      </Row>
    </Content>
  );
};
