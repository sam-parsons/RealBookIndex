import React from "react";
import ClearBtn from "./ClearBtn";
import Table from "react-bootstrap/Table";
import styled from "styled-components";

const Styles = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;

  @media (max-width: 480px) {
    font-size: 14px;

    .table {
      width: 90vw;
    }
  }
`;

const ResultsTable = props => (
  <Styles className={props.resultsArr.length < 1 ? "hidden" : ""}>
    <Table striped bordered hover variant="dark" className="table">
      <thead>
        <tr>
          <th>Book</th>
          <th>Page</th>
        </tr>
      </thead>
      <tbody>
        {props.resultsArr.map(res => (
          <tr>
            <td>{res.book}</td>
            <td>{res.page}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    <ClearBtn handleClear={props.handleClear} />
  </Styles>
);

export default ResultsTable;
