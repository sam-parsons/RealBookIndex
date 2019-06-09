import React from "react";
import Title from "./Components/Title";
import Searchbar from "./Components/Searchbar";
import Results from "./Components/Results";
import "./App.css";

class App extends React.Component {
  state = {
    searchValue: "",
    searchPlaceholder: "Enter song title",
    resultsArr: [],
    resultsSong: "",
    // normalArr: [],
    loading: false,
    songList: []
  };

  componentDidMount = () => {
    fetch("https://realbookindex-api.herokuapp.com/", {
      method: "GET",
      mode: "cors"
    })
      .then(res => res.json())
      .then(res =>
        this.setState({ songList: res.data }, () => {
          // const normalArr = res.data;
          // const len = res.data.length;
          // for (let i = 0; i < len; i++) {
          //   normalArr[i] = normalArr[i].toLowerCase();
          // }
          // this.setState({ normalArr }, () => console.log(normalArr));
        })
      );
  };

  handleSearch = e => {
    this.setState({ searchValue: e.target.value });
    e.preventDefault();
  };

  handleSubmit = e => {
    this.toggleLoading();
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
      .then(res =>
        this.setState(
          {
            resultsArr: res.data.length > 0 ? res.data : [],
            resultsSong: res.data.length > 0 ? res.data[0].title : "Not Found",
            searchValue: ""
          },
          () => {
            this.toggleLoading();
          }
        )
      );

    e.preventDefault();
  };

  handleClear = () => {
    this.setState({ resultsArr: [], resultsSong: "", searchValue: "" });
  };

  toggleLoading = () => this.setState({ loading: !this.state.loading });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
          <Searchbar
            handleSubmit={this.handleSubmit}
            handleSearch={this.handleSearch}
            searchValue={this.state.searchValue}
            loading={this.state.loading}
            songList={this.state.songList}
          />
          <Results
            resultsArr={this.state.resultsArr}
            resultsSong={this.state.resultsSong}
            handleClear={this.handleClear}
          />
        </header>
      </div>
    );
  }
}

export default App;
