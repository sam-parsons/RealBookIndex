import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const Styles = styled.div``;

const ClearBtn = props => (
  <Styles>
    <Button variant="secondary" onClick={props.handleClear}>
      Clear
    </Button>
  </Styles>
);

export default ClearBtn;
