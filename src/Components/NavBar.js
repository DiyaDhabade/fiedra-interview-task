import React from "react";
import styled from "styled-components";
import fiedra_web_dev_logo from "./fiedra_web_dev_logo.png";

const Nav = styled.nav`
  background: #6d45fc;
  width: 100%;
  height: 80px;
  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const ImgStyles = styled.nav`
  position: absolute;
  display: flex;
  justify-content: left;
  width: 48px;
  height: 48px;
  padding-left: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  @media only screen and (max-width: 600px) {
    padding: 0;
    margin: auto;
  }
`;

export default function NavBar() {
  return (
    <Nav>
      <ImgStyles>
        <img src={fiedra_web_dev_logo} alt="" />
      </ImgStyles>
    </Nav>
  );
}
