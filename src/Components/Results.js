import React from "react";
import ResultsTable from "./ResultsTable";
import styled from "styled-components";

const Styles = styled.div`
  font-family: "Permanent Marker", sans-serif;
  font-size: 50px;

  .hidden {
    display: none;
  }
`;

const Results = props => (
  <Styles>
    <div className="main">
      <ResultsTable resultsArr={props.resultsArr} />
    </div>
  </Styles>
);
export default Results;
