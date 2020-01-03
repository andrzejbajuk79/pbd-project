import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const Header = styled.h1`
  text-align: center;
  padding: 1em 0;
  color: #000b4f;

  span {
    text-transform: uppercase;
  }
`;

export const LoadingText = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 200px auto;
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background-color: #6d6d6d;
  color: #eee;

  display: flex;
  justify-content: space-around;
  h4,
  h5 {
    padding: 0.3em 0;
  }
`;
