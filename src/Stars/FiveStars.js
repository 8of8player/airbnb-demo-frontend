import React from "react";
import Star from "./Star";
import styled from "styled-components";

const DivFlex = styled.div`
  display: flex;
  margin-left: -2px;
  margin-right: -2px;
`;

export default () => {
  return (
    <DivFlex>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </DivFlex>
  );
};
