import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  font-family: "Permanent Marker", sans-serif;
  font-size: 50px;
`;

const Results = props => (
  <Styles>
    <div className="main">
      {props.resultsArr.map(res => (
        <p>{res.book}</p>
      ))}
    </div>
  </Styles>
);
export default Results;
