import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  background: url(http://i.imgur.com/7fqRgbK.png);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-color: white;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
`;

export default () => {
  return <Button />;
};
