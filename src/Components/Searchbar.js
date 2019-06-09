import React from "react";
import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";
import InputGroup from "react-bootstrap/InputGroup";
// import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Typeahead } from "react-bootstrap-typeahead";

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

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.typeahead = React.createRef();
  }

  render() {
    return (
      <Styles>
        <div className="main">
          <Form
            onSubmit={e => {
              this.props.handleSubmit(e);
              this.typeahead.getInstance().clear();
            }}
          >
            <InputGroup className="mb-3" size="lg">
              <Typeahead
                id="typeahead"
                labelKey="song"
                options={this.props.songList}
                onInputChange={this.props.handleSearch}
                onChange={this.props.handleSelect}
                minLength={2}
                bsSize="large"
                placeholder="Enter song title..."
                ref={typeahead => (this.typeahead = typeahead)}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" type="submit">
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className={this.props.loading ? "" : "hidden"}
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
  }
}

// const Searchbar = props => (
//   <Styles>
//     <div className="main">
//       <Form onSubmit={props.handleSubmit}>
//         <InputGroup className="mb-3" size="lg">
//           <Typeahead
//             id="typeahead"
//             labelKey="song"
//             options={props.songList}
//             onInputChange={props.handleSearch}
//             onChange={props.handleSelect}
//             minLength={2}
//             bsSize="large"
//             placeholder="Enter song title..."
//             ref={typeahead => console.log(typeahead)}
//           />
//           <InputGroup.Append>
//             <Button variant="outline-secondary" type="submit">
//               <Spinner
//                 as="span"
//                 animation="border"
//                 size="sm"
//                 role="status"
//                 aria-hidden="true"
//                 className={props.loading ? "" : "hidden"}
//               />
//               <span className="sr-only">Loading...</span>
//               <span className="text">Search</span>
//             </Button>
//           </InputGroup.Append>
//         </InputGroup>
//       </Form>
//     </div>
//   </Styles>
// );

export default Searchbar;
