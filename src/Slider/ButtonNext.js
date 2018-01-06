import styled from "styled-components";
import arrow from "./pageRightButton.png";

export default styled.button`
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  background: url(${arrow});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-color: white;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
`;
