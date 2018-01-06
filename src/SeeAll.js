import React from "react";
import styled from "styled-components";
import { CircularBold, CircularBook, CircularLight } from "./styled";
import { Image, Flex } from "./styled";
import arrowRight from "./pageRightLink.png";

const Descr = CircularBook.extend`
  font-size: 12px;
  line-height: 24px;
  margin-right: 8px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const FlexMid = Flex.extend`
  align-items: center;
  margin-right: 7px;

  @media (min-width: 768px) {
    margin-right: 0;
  }

  @media (min-width: 992px) {
    margin-right: 7px;
  }
`;

export default () => {
  return (
    <FlexMid>
      <Descr> See All </Descr>
      <Image src={arrowRight} />
    </FlexMid>
  );
};
