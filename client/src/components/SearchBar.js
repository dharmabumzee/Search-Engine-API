import React from "react";
import MenuFullSlide from "./MenuFullSlide";

class SearchBar extends React.Component {
  searchData;

  async fetchData(query) {
    const response = await fetch(`http://localhost:5001/api/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const body = await response.text();

    this.setState({
      reponseToPost: body,
    });
    this.props.onSubmit(this.props.term);
  }

  state = {
    term: "",
    searchedQueries: [],
    responseToPost: "",
  };

  // handles onClick in search history to repeat API request and populate the search input
  handleOnClick = async (e) => {
    e.preventDefault();
    this.setState({ term: e.target.innerText });
    let query = e.target.innerText;

    this.fetchData(query.toUpperCase());
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    this.props.onSubmit(this.props.term);

    this.setState({
      searchedQueries: [...this.state.searchedQueries, this.state.term],
    });

    const { term } = this.state;

    let query = term.toUpperCase();

    this.fetchData(query);
  };

  componentDidMount() {
    this.searchData = JSON.parse(localStorage.getItem("search"));

    if (localStorage.getItem("search")) {
      this.setState({
        searchedQueries: this.searchData.searchedQueries,
      });
    } else {
      this.setState({
        searchedQueries: [],
      });
    }
  }

  // replace with getSnapshotBeforeUpdate()
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("search", JSON.stringify(nextState));
  }

  render() {
    return (
      <div className="ui category fluid search">
        <form
          onSubmit={this.onFormSubmit}
          endpoint="query"
          method="post"
          id="my-form"
        >
          <div className="ui icon input">
            <input
              className="prompt"
              id="query"
              name="q"
              type="search"
              value={this.state.term}
              placeholder="Search the web..."
              onChange={(e) =>
                this.setState({
                  term: e.target.value,
                })
              }
              autoFocus
              required
              autoComplete="off"
              onClick={(e) => this.setState({ term: "" })}
              ref={this.inputRef}
            />

            <i className="search icon"></i>
          </div>
        </form>
        <MenuFullSlide
          children={this.state.searchedQueries}
          persist={localStorage}
          handleOnClick={this.handleOnClick}
        />
      </div>
    );
  }
}

export default SearchBar;
