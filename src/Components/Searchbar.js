import React from "react";
import styled from "styled-components";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

const Styles = styled.div``;

const Searchbar = props => (
  <Styles>
    <div className="main">
      <Form onSubmit={props.handleSubmit}>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={props.handleSearch}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" type="submit">
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </div>
  </Styles>
);

export default Searchbar;
