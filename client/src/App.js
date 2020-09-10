import React from "react";
import axios from "axios";
import { Box, Grommet, Clock } from "grommet";

import "./App.css";

import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";

const analogClockTheme = {
  clock: {
    analog: {
      size: {
        medium: "100px",
      },
      hour: {
        width: "3px",
        shape: "round",
        color: "#5c0029",
        size: "34px",
      },
      minute: {
        size: "18px",
        width: "3px",
        color: "#53687e",
        shape: "round",
      },
      second: {
        width: "1px",
        color: "#31a1bdf3",
        size: "10px",
      },
    },
  },
};

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
        <Grommet theme={analogClockTheme}>
          <Box align="end" justify="end" pad="xxsmall">
            <Clock type="analog" size="medium" alignSelf="end" />
          </Box>
        </Grommet>
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
