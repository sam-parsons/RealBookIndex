import React from "react";
import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Styles = styled.div`
  .hidden {
    display: none;
  }
  .text {
    padding-left: 13px;
  }

  @media (max-width: 480px) {
    .form-control {
      font-size: 20px;
    }

    .btn {
      font-size: medium !important;
    }

    .mb-3 {
      width: 90vw;
    }
  }
`;

const Searchbar = props => (
  <Styles>
    <div className="main">
      <Form onSubmit={props.handleSubmit}>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Enter song title"
            aria-label="song title"
            aria-describedby="basic-addon2"
            onChange={props.handleSearch}
            value={props.searchValue}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" type="submit">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className={props.loading ? "" : "hidden"}
              />
              <span className="sr-only">Loading...</span>
              <span className="text">Search</span>
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </div>
  </Styles>
);

export default Searchbar;
