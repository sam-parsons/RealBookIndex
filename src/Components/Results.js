import React from "react";
import ResultsSong from "./ResultsSong";
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
      <ResultsSong resultsSong={props.resultsSong} />
      <ResultsTable
        resultsArr={props.resultsArr}
        handleClear={props.handleClear}
      />
    </div>
  </Styles>
);
export default Results;
