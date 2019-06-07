import React from "react";
import Table from "react-bootstrap/Table";
import styled from "styled-components";

const Styles = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
`;

const ResultsTable = props => (
  <Styles className={props.resultsArr.length < 1 ? "hidden" : ""}>
    <Table striped bordered hover variant="dark">
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
  </Styles>
);

export default ResultsTable;
