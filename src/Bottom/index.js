import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import { DivFlex, Image, Link, P } from "../styled";
import logo from "./logo.png";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";

const BottomContent = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  margin: 0 5px 0 8px;
  border-top: 1px solid rgba(72, 72, 72, 0.3);
  @media (min-width: 768px) {
    padding-top: 0;
    padding-bottom: 42px;
    margin-right: 8px;
  }

  @media (min-width: 992px) {
    margin-left: 13px;
    margin-right: 13px;
  }
`;

const Copyright = DivFlex.extend`
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 32px;
  }
`;

const RulesAndShare = DivFlex.extend`
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

const Rights = P.extend`
  font-weight: 600;
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

const Rule = P.extend`
  font-weight: 600;
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

const ImageBottom = Image.extend`
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
            <Rule>
              <Link href="/terms">Terms</Link>
            </Rule>
            <Rule>
              <Link href="/privacy">Privacy</Link>
            </Rule>
            <Rule>
              <Link href="/sitemap">Site map</Link>
            </Rule>
            <Link href="/facebook">
              <ImageBottom src={facebook} />
            </Link>
            <Link href="/twitter">
              <ImageBottom src={twitter} />
            </Link>
            <Link href="/instagram">
              <ImageBottom src={instagram} />
            </Link>
          </RulesAndShare>
        </Col>
      </Row>
    </BottomContent>
  );
};
