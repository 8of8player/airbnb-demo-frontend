import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import { CircularBold, CircularBook, CircularLight } from "../styled";
import { DivFlex, Content, Link } from "../styled";
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

const ColumnTitle = CircularBold.extend`
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

const ColumnSection = CircularBook.extend`
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 11px;

  @media (min-width: 992px) {
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 8px;
  }
`;

const Column = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

// const SelectsHorizontal = DivFlex.extend`
//   width: 100%;

//   @media (min-width: 768px) {
//     display: none;
//   }
// `;

const SelectsHorizontal = DivFlex.extend`
  width: 100%;

  @media (min-width: 768px) {
    flex-basis: 24.99%;
    flex-wrap: wrap;
    height: fit-content;
  }
`;

// const SelectsVertical = styled.div`
//   display: none;

//   @media (min-width: 768px) {
//     display: block;
//   }
// `;

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
        {/* <Col md={3}>
          <SelectsVertical>
            <Select name="country">
              <Option value="English"> English </Option>
              <Option value="notEnglish"> not English </Option>
            </Select>
            <Select name="country">
              <Option value="USD">United States dollar</Option>
              <Option value="notUSD"> not United States dollar </Option>
            </Select>
          </SelectsVertical>
        </Col> */}
        <Col md={1} />
        <Col md={3}>
          <Column>
            <ColumnTitle> Airbnb </ColumnTitle>
            <ColumnSection>
              <Link href="/airbnb">Careers</Link>
            </ColumnSection>
            <ColumnSection>
              <Link href="/airbnb">Press</Link>
            </ColumnSection>
            <ColumnSection>
              <Link href="/airbnb">Policies</Link>
            </ColumnSection>
            <ColumnSection>
              <Link href="/airbnb">Help</Link>
            </ColumnSection>
            <Link href="/airbnb">
              <ColumnSection> Diversity & Belonging </ColumnSection>
            </Link>
          </Column>
        </Col>
        <Col md={3}>
          <Column>
            <ColumnTitle> Discover </ColumnTitle>
            <ColumnSection>
              <Link href="/discover">Trust & Safety</Link>
            </ColumnSection>
            <ColumnSection>
              <Link href="/discover">Travel Credits</Link>
            </ColumnSection>
            <ColumnSection>
              <Link href="/discover">Gifts Cards</Link>
            </ColumnSection>
            <ColumnSection>
              <Link href="/discover">Airbnb Citizen</Link>
            </ColumnSection>
            <ColumnSection>
              <Link href="/discover">Business Travel</Link>
            </ColumnSection>
            <ColumnSection>
              <Link href="/discover">Airbnbmag</Link>
            </ColumnSection>
          </Column>
        </Col>
        <Col md={2}>
          <Column>
            <ColumnTitle> Hosting </ColumnTitle>
            <ColumnSection>
              <Link href="/hosting">Why Host</Link>
            </ColumnSection>
            <ColumnSection>
              <Link href="/hosting">Hospitality</Link>
            </ColumnSection>
            <ColumnSection>
              <Link href="/hosting">Responsible Hosting</Link>
            </ColumnSection>
            <ColumnSection>
              <Link href="/hosting">Community Center</Link>
            </ColumnSection>
          </Column>
        </Col>
      </Row>
    </FooterContent>
  );
};
