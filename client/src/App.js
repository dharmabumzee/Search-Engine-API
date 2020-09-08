import React from "react";
import axios from "axios";
import "./App.css";

import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";

class App extends React.Component {
  state = {
    results: [],
  };

  onSearchSubmit = async () => {
    await axios
      .get(`http://localhost:5001/api`)
      .then((res) => this.setState({ results: res.data }))
      .catch((error) => console.log(error));
  };

  render() {
    const { results } = this.state;
    return (
      <div className="main">
        <div className="ui container App column">
          <h1 className="ui header">
            <a href="/" className="home">
              TinyLlama
            </a>
          </h1>
          <h6 className="ui header subtitle">
            Search the web without being tracked
          </h6>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ResultsList results={results} />
        </div>
      </div>
    );
  }
}

export default App;
