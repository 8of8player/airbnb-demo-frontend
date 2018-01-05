import React from "react";
import styled from "styled-components";
import { Col } from "react-flexbox-grid";
import { CircularBold, CircularBook, CircularLight } from "../styled";
import { Flex, Content, Row, Caption, Image, Link, Reviews } from "../styled";
import FiveStars from "../FiveStars";
import HomeOne from "./1.png";
import HomeTwo from "./2.png";
import HomeThree from "./3.png";
import ButtonNext from "../ButtonNext";
import SeaAll from "../SeeAll";

const Name = CircularBold.extend`
  font-size: 15px;
  line-height: 18px;
  margin-top: 8px;
`;

const Type = CircularLight.extend`
  font-size: 15px;
  line-height: 18px;
  margin-top: 2px;
  margin-bottom: 6px;
`;

const Slider = styled.div`
  position: absolute;
  top: 140px;
  left: 1028px;
`;

export default () => {
  return (
    <Content>
      <Row>
        <Col lg={11}>
          <Caption> Homes </Caption>
        </Col>
        <Col lg={1}>
          <Link href="homes-nextpage">
            <SeaAll />
          </Link>
        </Col>
        <Col lg={4}>
          <Link href="">
            <Image src={HomeOne} />
            <Name> $82 La Salentina, see, nature & relax </Name>
            <Type> Entire house · 9 beds </Type>
            <Flex>
              <FiveStars />
              <Reviews> 97 · Superhost </Reviews>
            </Flex>
          </Link>
        </Col>
        <Col lg={4}>
          <Link href="">
            <Image src={HomeTwo} />
            <Name> $82 Your private 3 bedr. riad and exclusi… </Name>
            <Type> Entire house · 5 beds </Type>
            <Flex>
              <FiveStars />
              <Reviews> 161 · Superhost </Reviews>
            </Flex>
          </Link>
        </Col>
        <Col lg={4}>
          <Link href="">
            <Image src={HomeThree} />
            <Name> $200 Dreamy Tropical Tree House </Name>
            <Type> Entire house · 1 bed </Type>
            <Flex>
              <FiveStars />
              <Reviews> 364 · Superhost </Reviews>
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
