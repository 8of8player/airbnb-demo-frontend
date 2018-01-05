import styled from "styled-components";

export const CircularBold = styled.p`
  font-family: CircularBold;
  margin: 0;
`;

export const CircularBook = styled.p`
  font-family: CircularBook;
  margin: 0;
`;

export const Reviews = CircularBook.extend`
  font-size: 12px;
  line-height: 14px;
  margin-left: 8px;
`;

export const CircularLight = styled.p`
  font-family: CircularLight;
  margin: 0;
`;

export const Caption = CircularBold.extend`
  font-size: 32px;
  line-height: 34px;
  margin-bottom: 24px;
`;

export const Image = styled.img`
  display: block;
`;

export const Link = styled.a`
  color: black;
  text-decoration: none;
`;

export const Content = styled.div`
  padding-left: 81px;
  padding-right: 76px;
  margin-bottom: 48px;
  position: relative;
`;

export const Row = styled.div`
  display: flex;
  margin-left: -8px;
  margin-right: -8px;
  flex-wrap: wrap;
`;

export const Flex = styled.div`
  display: flex;
`;
