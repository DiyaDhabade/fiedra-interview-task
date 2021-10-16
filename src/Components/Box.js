import React from "react";
import styled from "styled-components";
import "./outerbox.css";

const BoxStyle = styled.nav`
  background-color: #f2f2f7;
  width: 600px;
  height: 1000px;
  padding-top: 10px;

  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;
const OuterCard = styled.nav`
  width: 580px;
  height: 174px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  background: #ffffff;
  border-radius: 16px;
  @media only screen and (max-width: 600px) {
    margin: 0;
  }
`;

const HeadingText = styled.nav`
  width: 204px;
  height: 26px;
  padding-top: 16px;
  padding-left: 13px;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 25px;
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;
  color: #000000;
`;

export default function Box() {
  return (
    <div className="container">
      <BoxStyle>
        <OuterCard>
          <div>
            <HeadingText>Stories</HeadingText>
          </div>
          <div class="scrollmenu">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </OuterCard>
      </BoxStyle>
    </div>
  );
}
