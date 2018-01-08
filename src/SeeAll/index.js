import React from "react";
// import { CircularBold, CircularBook, CircularLight } from "../styled";
import { Image, Flexbox, P } from "../styled";
import arrowRight from "./pageRightLink.png";

// const Descr = CircularBook.extend`
const Descr = P.extend`
  white-space: nowrap;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  margin-right: 8px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const FlexboxMid = Flexbox.extend`
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
    <FlexboxMid>
      <Descr> See All </Descr>
      <Image src={arrowRight} />
    </FlexboxMid>
  );
};
