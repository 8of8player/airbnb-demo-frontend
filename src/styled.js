import styled from "styled-components";

export const CircularBold = styled.p`
  font-family: Circular;
  font-weight: bold;
  margin: 0;
`;

export const CircularBook = styled.p`
  font-family: Circular;
  font-weight: 600;
  margin: 0;
`;

export const Rating = CircularBook.extend`
  font-size: 12px;
  line-height: 14px;
  margin-left: 8px;
`;

export const CircularLight = styled.p`
  font-family: Circular;
  font-weight: lighter;
  margin: 0;
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
  }

  @media (min-width: 992px) {
    padding-right: 13px;
    padding-left: 13px;
  }
`;

export const Flex = styled.div`
  display: flex;
`;

export const Wrapper = Flex.extend`
  width: 100%;
  overflow-x: overflow;
  overflow-y: hidden;
`;

export const Fame = Flex.extend`
  align-items: center;
  margin-top: 5px;

  @media (min-width: 768px) {
    margin-top: 6px;
  }
`;

export const CaptionBox = Flex.extend`
  justify-content: space-between;
  margin-bottom: 16px;
  align-items: flex-end;
  font-family: Circular;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 34px;
    margin-bottom: 24px;
  }
`;
