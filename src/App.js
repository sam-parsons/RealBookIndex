import React from "react";
import Title from "./Components/Title";
import Searchbar from "./Components/Searchbar";
import "./App.css";

class App extends React.Component {
  state = {
    searchValue: ""
  };

  handleSearch = e => {
    this.setState({ searchValue: e.target.value });
    e.preventDefault();
  };

  handleSubmit = e => {
    console.log(this.state.searchValue);
    e.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
          <Searchbar
            handleSubmit={this.handleSubmit}
            handleSearch={this.handleSearch}
          />
        </header>
      </div>
    );
  }
}

export default App;
