import React from "react";
import styled from "styled-components";
import { Col } from "react-flexbox-grid";
import { CircularBold, CircularBook, CircularLight } from "../styled";
import { Flex, Image, Link } from "../styled";
import logo from "./logo.png";
import Facebook from "./facebook.png";
import Twitter from "./twitter.png";
import Instagram from "./instagram.png";

const Bottom = styled.div`
  margin-left: 81px;
  margin-right: 76px;
  border-top: 1px solid rgba(72, 72, 72, 0.3);
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Terms = Flex.extend`
  align-items: center;
`;
const Copyright = Flex.extend`
  align-items: center;
`;

const ShareBox = Flex.extend`
  margin-left: 12px;
  width: 96px;
  justify-content: space-between;
`;

const Logo = Image.extend`
  margin-right: 12px;
`;

const Rights = CircularBook.extend`
  font-size: 15px;
  line-height: 18px;
`;

const Text = Rights.extend`
  margin-left: 16px;
`;

export default () => {
  return (
    <Bottom>
      <Copyright>
        <Logo src={logo} />
        <Rights> © Airbnb Inc. </Rights>
      </Copyright>
      <Terms>
        <Text>
          <Link href="/terms"> Terms </Link>
        </Text>
        <Text>
          <Link href="/privacy"> Privacy </Link>
        </Text>
        <Text>
          <Link href="/sitemap"> Site map </Link>
        </Text>
        <ShareBox>
          <Link href="/facebook">
            <Image src={Facebook} />
          </Link>
          <Link href="/twitter">
            <Image src={Twitter} />
          </Link>
          <Link href="/instagram">
            <Image src={Instagram} />
          </Link>
        </ShareBox>
      </Terms>
    </Bottom>
  );
};
