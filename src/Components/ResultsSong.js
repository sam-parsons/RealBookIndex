import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .song {
    font-size: 24px;
    padding-bottom: 15px;
  }
`;

const ResultsSong = props => (
  <Styles>
    <div className="song">{props.resultsSong}</div>
  </Styles>
);

export default ResultsSong;
