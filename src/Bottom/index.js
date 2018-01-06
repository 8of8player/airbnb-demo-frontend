import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import { CircularBold, CircularBook, CircularLight } from "../styled";
import { Flex, Image, Link, Content } from "../styled";
import logo from "./logo.png";
import Facebook from "./facebook.png";
import Twitter from "./twitter.png";
import Instagram from "./instagram.png";

const BottomContent = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  margin: 0 5px 0 8px;
  border-top: 1px solid rgba(72, 72, 72, 0.3);
  @media (min-width: 768px) {
    padding-top: 0;
    margin-right: 8px;
  }

  @media (min-width: 992px) {
    margin-left: 13px;
    margin-right: 13px;
  }
`;

const Copyright = Flex.extend`
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 32px;
  }
`;

const RulesAndShare = Flex.extend`
  align-items: center;
  margin-top: 11px;

  @media (min-width: 768px) {
    margin-top: 30px;
    justify-content: flex-end;
    margin-right: -12px;
  }

  @media (min-width: 992px) {
    justify-content: flex-start;
    margin-right: 0;
  }
`;

const Rights = CircularBook.extend`
  font-size: 12px;
  line-height: 14px;
  margin-left: 8px;

  @media (min-width: 768px) {
    margin-left: 12px;
  }

  @media (min-width: 992px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const NoName = CircularBook.extend`
  font-size: 12px;
  line-height: 14px;
  margin-right: 12px;

  @media (min-width: 768px) {
    margin-right: 16px;
  }

  @media (min-width: 992px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const Images = Image.extend`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
`;

export default () => {
  return (
    <BottomContent>
      <Row>
        <Col xs={12} md={7} lg={8}>
          <Copyright>
            <Image src={logo} />
            <Rights> © Airbnb Inc. </Rights>
          </Copyright>
        </Col>
        <Col xs={12} md={5} lg={4}>
          <RulesAndShare>
            <NoName> Terms </NoName>
            <NoName> Privacy </NoName>
            <NoName> Site map </NoName>
            <Images src={Facebook} />
            <Images src={Twitter} />
            <Images src={Instagram} />
          </RulesAndShare>
        </Col>
      </Row>
    </BottomContent>
  );
};
