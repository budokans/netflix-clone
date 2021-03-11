import styled from "styled-components/macro";

export const Container = styled.section`
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;

  @media (max-width: 600px) {
    padding: 60px 0;
  }
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 10px;

  &:first-of-type {
    margin-top: 3em;
  }

  @media (max-width: 600px) {
    &:first-of-type {
      margin-top: 1em;
    }
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 26px;
  }
`;

export const Header = styled.div`
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  background: #303030;
  padding: 1.2em;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Body = styled.p`
  max-width: 1200px;
  font-size: 26px;
  font-weight: normal;
  line-height: 1.35;
  background: #303030;
  padding: 1.2em;
  user-select: none;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 1.3;
  }
`;
