import React from "react";
import styled from "styled-components";
import logo from "./logo.png";
import search from "./search.png";
import { Col } from "react-flexbox-grid";
import { CircularBold, CircularBook, CircularLight } from "../styled";
import { Content, Image, Row, Link, Flex } from "../styled";

const Main = Content.extend`
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

const RowCenter = Row.extend`
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 53px;
  font-family: CircularBook;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;

  ${"" /* background: url(http://i.imgur.com/kl995oV.png); */}
  background: url(${search});
  background-position: 16px 50%;
  background-repeat: no-repeat;
  background-color: white;
`;

const Value = CircularBook.extend`
  font-size: 14px;
  line-height: 24px;
  margin-right: 8px;
  width: 56px;
  text-align: center;
`;

const ValueDouble = Value.extend`
  width: 108px;
`;

const Btns = Flex.extend`
  position: relative;
  left: 189px;
`;

export default () => {
  return (
    <Main>
      <RowCenter>
        <Col lg={1}>
          <Link href="">
            <Image src={logo} />
          </Link>
        </Col>
        <Col lg={5}>
          <Input placeholder="Try Miami" />
        </Col>
        <Btns>
          <ValueDouble>
            <Link href="/host"> Become a host </Link>
          </ValueDouble>
          <Value>
            <Link href="/help"> Help </Link>
          </Value>
          <Value>
            <Link href="/signup"> Sign Up </Link>
          </Value>
          <Value>
            <Link href="/login"> Log In </Link>
          </Value>
        </Btns>
      </RowCenter>
    </Main>
  );
};
