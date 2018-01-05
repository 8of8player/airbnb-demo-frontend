import React from "react";
import styled from "styled-components";
import { CircularBold, CircularBook, CircularLight } from "./styled";
import { Link, Image, Flex } from "./styled";
import arrowRight from "./pageRightMini.png";

const Slider = CircularBook.extend`
  font-size: 14px;
  line-height: 24px;
  margin-right: 8px;
`;

const FlexCenter = Flex.extend`
  align-items: center;
  padding-top: 10px;
`;

export default () => {
  return (
    <FlexCenter>
      <Slider> See All </Slider>
      <Image src={arrowRight} />
    </FlexCenter>
  );
};
