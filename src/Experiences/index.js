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
  Rating,
  Fame
} from "../styled";
import Forest from "./ForestTherapy.png";
import WhaleWatching from "./WhaleWatching.png";
import TableMountain from "./TableMountain.png";
import SalsaNight from "./SalsaNight.png";
import FiveStars from "../FiveStars";
import ButtonNext from "../ButtonNext";
import SeaAll from "../SeeAll";

const ButtonBox = styled.div`
  position: absolute;
  top: 45%;
  right: 0;
  display: none;

  @media (min-width: 992px) {
    display: block;
  }
`;

const PlaceName = CircularLight.extend`
  font-size: 13px;
  line-height: 15px;
  margin-top: 8px;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const ImageExpr = Image.extend`
  @media (max-width: 767px) {
    width: 144px;
    height: 216px;
  }

  width: 240px;
  height: 346px;

  @media (min-width: 992px) {
    width: 229px;
  }
`;
export default () => {
  return (
    <Content>
      <CaptionBox>
        Experiences
        <SeaAll />
      </CaptionBox>
      <Row>
        <Wrapper>
          <Col xs={6} md={4} lg={3}>
            <Link href="/forest">
              <ImageExpr src={Forest} />
              <PlaceName>
                <b>$29</b> Forest therapy
              </PlaceName>
              <Fame>
                <FiveStars />
                <Rating> 44 reviews </Rating>
              </Fame>
            </Link>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Link href="/forest">
              <ImageExpr src={WhaleWatching} />
              <PlaceName>
                <b>$69</b> WhaleWatching
              </PlaceName>
              <Fame>
                <FiveStars />
                <Rating> 46 reviews </Rating>
              </Fame>
            </Link>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Link href="/forest">
              <ImageExpr src={TableMountain} />
              <PlaceName>
                <b>$69</b> Table Mountain Summit, Cable Car Down
              </PlaceName>
              <Fame>
                <FiveStars />
                <Rating> 44 reviews </Rating>
              </Fame>
            </Link>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Link href="/forest">
              <ImageExpr src={SalsaNight} />
              <PlaceName>
                <b>$50</b> SalsaNight
              </PlaceName>
              <Fame>
                <FiveStars />
                <Rating> 44 reviews </Rating>
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
