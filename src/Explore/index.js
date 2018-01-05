import React from "react";
import styled from "styled-components";
import { Col } from "react-flexbox-grid";
import { CircularBold, CircularBook, CircularLight } from "../styled";
import { Content, Row, Caption, Image, Link } from "../styled";
import Homes from "./Homes.png";
import Experiences from "./Experiences.png";
import Restaurants from "./Restaurants.png";

const Card = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgba(72, 72, 72, 0.2);
`;

const Value = CircularBold.extend`
  font-size: 17px;
  line-height: 20px;
  margin-left: 24px;
`;

export default () => {
  return (
    <Content>
      <Row>
        <Col lg={12}>
          <Caption> Explore Airbnb</Caption>
        </Col>
        <Col md={5} lg={4}>
          <Link href="/homes">
            <Card>
              <Image src={Homes} />
              <Value> Homes </Value>
            </Card>
          </Link>
        </Col>
        <Col md={5} lg={4}>
          <Link href="/experiences">
            <Card>
              <Image src={Experiences} />
              <Value> Experiences </Value>
            </Card>
          </Link>
        </Col>
        <Col md={5} lg={4}>
          <Link href="/restaurants">
            <Card>
              <Image src={Restaurants} />
              <Value> Restaurants </Value>
            </Card>
          </Link>
        </Col>
      </Row>
    </Content>
  );
};
