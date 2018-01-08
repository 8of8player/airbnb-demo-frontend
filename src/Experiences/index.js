import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import {
  Content,
  P,
  Caption,
  CaptionBox,
  WrapperHorizont,
  Image,
  Link,
  Rating,
  Fame
} from "../styled";
import forest from "./ForestTherapy.png";
import whaleWatching from "./WhaleWatching.png";
import tableMountain from "./TableMountain.png";
import salsaNight from "./SalsaNight.png";
import FiveStars from "../Stars/FiveStars";
import ButtonNext from "../Slider/ButtonNext";
import SeeAll from "../SeeAll/";

const ButtonBox = styled.div`
  position: absolute;
  top: 45%;
  right: 0;
  display: none;

  @media (min-width: 992px) {
    display: block;
  }
`;

const PlaceName = P.extend`
  font-weight: lighter;
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
        <Caption> Experiences </Caption>
        <Link href="/experiencesall">
          <SeeAll />
        </Link>
      </CaptionBox>
      <Row>
        <WrapperHorizont>
          <Col xs={6} md={4} lg={3}>
            <Link href="/forest">
              <ImageExpr src={forest} />
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
            <Link href="/whalewatching">
              <ImageExpr src={whaleWatching} />
              <PlaceName>
                <b>$69</b> Whale watching
              </PlaceName>
              <Fame>
                <FiveStars />
                <Rating> 46 reviews </Rating>
              </Fame>
            </Link>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Link href="/tablemountain">
              <ImageExpr src={tableMountain} />
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
            <Link href="/salsanight">
              <ImageExpr src={salsaNight} />
              <PlaceName>
                <b>$50</b> SalsaNight
              </PlaceName>
              <Fame>
                <FiveStars />
                <Rating> 44 reviews </Rating>
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
