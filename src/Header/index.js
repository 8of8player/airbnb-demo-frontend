import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import { Content, P, Image, Link, Flexbox } from "../styled";
import logo from "./logo.png";
import search from "./search.png";
import pageDown from "./pageDown.png";

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 0 12px 35px;
  font-size: 14px;
  line-height: 24px;
  font-family: Circular;
  font-weight: 600;
  background: url(${search});
  background-position: 12px 50%;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;

  @media (min-width: 768px) {
    background-size: 21px 22px;
    font-size: 16px;
    padding-left: 49px;
  }

  @media (min-width: 992px) {
    padding-left: 53px;
  }
`;

const ContentBordered = Content.extend`
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

const FlexboxMid = Flexbox.extend`
  align-items: center;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const MenuLogo = styled.div`
  position: absolute;
  left: 42.78px;

  @media (min-width: 768px) {
    left: 44.78px;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

const MenuMain = Flexbox.extend`
  justify-content: space-between;
  display: none;

  @media (min-width: 992px) {
    display: flex;
  }
`;

const Option = P.extend`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #383838;
`;

export default () => {
  return (
    <ContentBordered>
      <Row>
        <FlexboxMid>
          <Col xs={2} md={1}>
            <Link href="/home">
              <Image src={logo} />
            </Link>
          </Col>
          <MenuLogo>
            <Link href="/openmenu">
              <Image src={pageDown} />
            </Link>
          </MenuLogo>
          <Col xs={10} md={7} lg={5}>
            <Input placeholder="Try Miami" />
          </Col>
          <Col lg={2} />
          <Col lg={4}>
            <MenuMain>
              <Option>
                <Link href="/becomeahost"> Become a host </Link>
              </Option>
              <Option>
                <Link href="/help"> Help </Link>
              </Option>
              <Option>
                <Link href="/signup"> Sign Up </Link>
              </Option>
              <Option>
                <Link href="/login"> Log In </Link>
              </Option>
            </MenuMain>
          </Col>
        </FlexboxMid>
      </Row>
    </ContentBordered>
  );
};
