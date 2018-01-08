import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import {
  Content,
  P,
  Caption,
  CaptionBox,
  Image,
  Link,
  WrapperHorizont
} from "../styled";
import homes from "./Homes.png";
import experiences from "./Experiences.png";
import restaurants from "./Restaurants.png";

const Card = styled.div`
  border: 0.4px solid rgba(72, 72, 72, 0.2);

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    border: 1px solid rgba(72, 72, 72, 0.2);
  }
`;

const Type = P.extend`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #383838;
  margin-left: 14px;
  padding-top: 13px;
  padding-bottom: 13px;

  @media (min-width: 768px) {
    padding: 0;
    margin-left: 24px;
    font-size: 17px;
    line-height: 20px;
  }
`;

const ImageExplore = Image.extend`
  width: 144px;
  height: auto;

  @media (min-width: 768px) {
    width: 96px;
    height: 72px;
  }
`;

export default () => {
  return (
    <Content>
      <CaptionBox>
        <Caption> Explore Airbnb </Caption>
      </CaptionBox>
      <Row>
        <WrapperHorizont>
          <Col xs={6} md={5} lg={4}>
            <Link href="/homes">
              <Card>
                <ImageExplore src={homes} />
                <Type> Homes </Type>
              </Card>
            </Link>
          </Col>
          <Col xs={6} md={5} lg={4}>
            <Link href="/experiences">
              <Card>
                <ImageExplore src={experiences} />
                <Type> Experiences </Type>
              </Card>
            </Link>
          </Col>
          <Col xs={6} md={5} lg={4}>
            <Link href="/restaurants">
              <Card>
                <ImageExplore src={restaurants} />
                <Type> Restaurants </Type>
              </Card>
            </Link>
          </Col>
        </WrapperHorizont>
      </Row>
    </Content>
  );
};
