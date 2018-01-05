import React from "react";
import star from "./star.png";
import { Image } from "./styled";
import styled from "styled-components";

const StarHolder = styled.div`
  padding-left: 2px;
  padding-right: 2px;
`;

export default () => {
  return (
    <StarHolder>
      <Image src={star} />
    </StarHolder>
  );
};
