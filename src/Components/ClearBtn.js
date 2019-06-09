import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const Styles = styled.div`
  padding-bottom: 60px;
`;

const ClearBtn = props => (
  <Styles className="clear">
    <Button variant="secondary" onClick={props.handleClear}>
      Clear
    </Button>
  </Styles>
);

export default ClearBtn;
