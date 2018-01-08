import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import { Flexbox, Content, Link } from "../styled";
import pageDown from "./pageDown.png";

const FooterContent = Content.extend`
  padding-top: 16px;
  padding-bottom: 24px;
  margin-bottom: 0;
  border-top: 1px solid rgba(72, 72, 72, 0.3);

  @media (min-width: 768px) {
    padding-top: 48px;
    padding-bottom: 38px;
  }

  @media (min-width: 992px) {
    padding-bottom: 48px;
  }
`;

const Select = styled.select`
  width: 100%;
  font-family: Circular;
  font-weight: lighter;
  font-size: 12px;
  line-height: 14px;
  color: #383838;
  padding: 12px 0 12px 8px;
  appearance: none;
  background: url(${pageDown});
  background-size: 12px 7px;
  background-position: 94% 50%;
  background-repeat: no-repeat;
  background-color: white;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 15px;
    line-height: 18px;
    padding: 14px 0 15px 8px;
  }

  @media (min-width: 992px) {
    font-size: 18px;
    line-height: 21px;
    padding: 12px 0 13px 16px;
  }
`;

const ColumnTitle = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 19px;

  @media (min-width: 992px) {
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 16px;
  }
`;

const Option = styled.option``;

const Links = Link.extend`
  margin: 0;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 11px;
  display: block;

  @media (min-width: 992px) {
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 8px;
  }
`;

const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const SelectsHorizontal = Flexbox.extend`
  width: 100%;

  @media (min-width: 768px) {
    flex-basis: 24.99%;
    flex-wrap: wrap;
    height: fit-content;
  }
`;

export default () => {
  return (
    <FooterContent>
      <Row>
        <SelectsHorizontal>
          <Col xs={6} md={12}>
            <Select name="country">
              <Option value="English"> English </Option>
            </Select>
          </Col>
          <Col xs={6} md={12}>
            <Select name="country">
              <Option value="USD">United States dollar</Option>
            </Select>
          </Col>
        </SelectsHorizontal>
        <Col md={1} />
        <Col md={3}>
          <Nav>
            <ColumnTitle> Airbnb </ColumnTitle>
            <Links href="/airbnb">About us</Links>
            <Links href="/airbnb">Careers</Links>
            <Links href="/airbnb">Press</Links>
            <Links href="/airbnb">Policies</Links>
            <Links href="/airbnb">Help</Links>
            <Links href="/airbnb">Diversity & Belonging</Links>
          </Nav>
        </Col>
        <Col md={3}>
          <Nav>
            <ColumnTitle> Discover </ColumnTitle>
            <Links href="/discover">Trust & Safety</Links>
            <Links href="/discover">Travel Credits</Links>
            <Links href="/discover">Gifts Cards</Links>
            <Links href="/discover">Airbnb Citizen</Links>
            <Links href="/discover">Business Travel</Links>
            <Links href="/discover">Guidebooks </Links>
            <Links href="/discover">Airbnbmag</Links>
          </Nav>
        </Col>
        <Col md={2}>
          <Nav>
            <ColumnTitle> Hosting </ColumnTitle>
            <Links href="/hosting">Why Host</Links>
            <Links href="/hosting">Hospitality</Links>
            <Links href="/hosting">Responsible Hosting</Links>
            <Links href="/hosting">Community Center</Links>
          </Nav>
        </Col>
      </Row>
    </FooterContent>
  );
};
