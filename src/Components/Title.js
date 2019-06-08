import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  font-family: "Permanent Marker", sans-serif;
  font-size: 60px;
  padding-bottom: 40px;

  @media (max-width: 480px) {
    font-size: 45px;
  }
`;

const Title = () => (
  <Styles>
    <div>RealBookIndex</div>
  </Styles>
);

export default Title;
