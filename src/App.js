import React from "react";
import Title from "./Components/Title";
import Searchbar from "./Components/Searchbar";
import Results from "./Components/Results";
import "./App.css";

class App extends React.Component {
  state = {
    searchValue: "",
    resultsText: "",
    resultsArr: []
  };

  handleSearch = e => {
    this.setState({ searchValue: e.target.value });
    e.preventDefault();
  };

  handleSubmit = e => {
    // console.log(this.state.searchValue);

    // fetch
    fetch("https://realbookindex-api.herokuapp.com/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: this.state.searchValue
      })
    })
      .then(res => res.json())
      // .then(res => console.log(res.data));
      .then(res =>
        this.setState({ resultsArr: res.data }, () =>
          console.log(this.state.resultsArr)
        )
      );

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
          <Results resultsArr={this.state.resultsArr} />
        </header>
      </div>
    );
  }
}

export default App;
