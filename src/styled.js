import styled from "styled-components";

export const P = styled.p`
  margin: 0;
`;

export const Rating = P.extend`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  margin-left: 8px;
`;

export const Image = styled.img`
  display: block;
`;

export const Link = styled.a`
  color: black;
  text-decoration: none;
`;

export const Content = styled.div`
  padding-left: 8px;
  padding-right: 5px;
  margin-bottom: 40px;
  position: relative;

  @media (min-width: 768px) {
    padding-right: 8px;
    margin-bottom: 48px;
  }

  @media (min-width: 992px) {
    padding-right: 13px;
    padding-left: 13px;
  }
`;

export const DivFlex = styled.div`
  display: flex;
`;

export const WrapperHorizont = DivFlex.extend`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const Fame = DivFlex.extend`
  align-items: center;
  margin-top: 5px;
  color: #383838;

  @media (min-width: 768px) {
    margin-top: 6px;
  }
`;

export const Caption = styled.h1`
  margin: 0;
  font-family: Circular;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #383838;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 34px;
  }
`;

export const CaptionBox = DivFlex.extend`
  justify-content: space-between;
  margin-bottom: 16px;
  align-items: flex-end;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 34px;
  }
`;
