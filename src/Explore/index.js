import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import { CircularBold, CircularBook, CircularLight } from "../styled";
import { Content, Caption, CaptionBox, Image, Link, Wrapper } from "../styled";
import Homes from "./Homes.png";
import Experiences from "./Experiences.png";
import Restaurants from "./Restaurants.png";

const Card = styled.div`
  border: 0.4px solid rgba(72, 72, 72, 0.2);

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    border: 1px solid rgba(72, 72, 72, 0.2);
  }
`;

const Descr = CircularBold.extend`
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
  }
`;

const ImageExplore = Image.extend`
  width: 144px;
  height: 78px;

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
        <Wrapper>
          <Col xs={6} md={5} lg={4}>
            <Link href="/homes">
              <Card>
                <ImageExplore src={Homes} />
                <Descr> Homes </Descr>
              </Card>
            </Link>
          </Col>
          <Col xs={6} md={5} lg={4}>
            <Link href="/experiences">
              <Card>
                <ImageExplore src={Experiences} />
                <Descr> Experiences </Descr>
              </Card>
            </Link>
          </Col>
          <Col xs={6} md={5} lg={4}>
            <Link href="/restaurants">
              <Card>
                <ImageExplore src={Restaurants} />
                <Descr> Restaurants </Descr>
              </Card>
            </Link>
          </Col>
        </Wrapper>
      </Row>
    </Content>
  );
};
