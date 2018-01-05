import React from "react";
import styled from "styled-components";
import { Col } from "react-flexbox-grid";
import { CircularBold, CircularBook, CircularLight } from "../styled";
import { Flex, Content, Row, Caption, Image, Link, Reviews } from "../styled";

const Block = Content.extend`
  padding-top: 48px;
  border-top: 1px solid rgba(72, 72, 72, 0.3);
`;

const Select = styled.select`
  width: 100%;
  margin-bottom: 16px;
  font-family: CircularLight;
  font-size: 18px;
  line-height: 21px;
  padding-top: 12px;
  padding-bottom: 13px;
  padding-left: 16px;
  appearance: none;
  background: url("https://i.imgur.com/BPKsuU3.png");
  background-position: 197px 50%;
  background-repeat: no-repeat;
  background-color: white;
`;

const Section = CircularBold.extend`
  font-size: 15px;
  line-height: 18px;
  margin-bottom: 16px;
`;

const Option = styled.option``;

const Point = CircularBook.extend`
  font-size: 15px;
  line-height: 18px;
  margin-bottom: 8px;
`;

export default () => {
  return (
    <Block>
      <Row>
        <Col lg={3}>
          <Select name="country">
            <Option value="English"> English </Option>
            <Option value="notEnglish"> not English </Option>
          </Select>
          <Select name="country">
            <Option value="USD">United States dollar</Option>
            <Option value="notUSD"> not United States dollar </Option>
          </Select>
        </Col>
        <Col lg={1} />
        <Col lg={3}>
          <Section> Airbnb </Section>
          <Point>
            <Link href="/airbnb">Careers</Link>
          </Point>
          <Point>
            <Link href="/airbnb">Press</Link>
          </Point>
          <Point>
            <Link href="/airbnb">Policies</Link>
          </Point>
          <Point>
            <Link href="/airbnb">Help</Link>
          </Point>
          <Link href="/airbnb">
            <Point> Diversity & Belonging </Point>
          </Link>
        </Col>
        <Col lg={3}>
          <Section> Discover </Section>
          <Point>
            <Link href="/discover">Trust & Safety</Link>
          </Point>
          <Point>
            <Link href="/discover">Travel Credits</Link>
          </Point>
          <Point>
            <Link href="/discover">Gifts Cards</Link>
          </Point>
          <Point>
            <Link href="/discover">Airbnb Citizen</Link>
          </Point>
          <Point>
            <Link href="/discover">Business Travel</Link>
          </Point>
          <Point>
            <Link href="/discover">Airbnbmag</Link>
          </Point>
        </Col>
        <Col lg={2}>
          <Section> Hosting </Section>
          <Point>
            <Link href="/hosting">Why Host</Link>
          </Point>
          <Point>
            <Link href="/hosting">Hospitality</Link>
          </Point>
          <Point>
            <Link href="/hosting">Responsible Hosting</Link>
          </Point>
          <Point>
            <Link href="/hosting">Community Center</Link>
          </Point>
        </Col>
      </Row>
    </Block>
  );
};
