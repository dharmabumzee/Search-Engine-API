import React from "react";
import MenuFullSlide from "./MenuFullSlide";

class SearchBar extends React.Component {
  searchData;

  state = {
    term: "",
    searchedQueries: [],
    responseToPost: "",
  };

  // function for api call on user input
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

  // handles onClick in search history to repeat API request and populate the search input
  handleOnClick = async (e) => {
    e.preventDefault();
    this.setState({ term: e.target.innerText });
    let query = e.target.innerText;

    this.fetchData(query.toUpperCase());
  };

  // handles form submit
  onFormSubmit = async (event) => {
    event.preventDefault();
    this.props.onSubmit(this.props.term);

    this.setState({
      searchedQueries: [...this.state.searchedQueries, this.state.term],
    });

    let { term } = this.state;
    this.fetchData(term.toUpperCase());
  };

  componentDidMount() {
    this.searchData = JSON.parse(localStorage.getItem("search"));

    localStorage.getItem("search")
      ? this.setState({ searchedQueries: this.searchData.searchedQueries })
      : this.setState({ searchedQueries: [] });
  }

  // replace with getSnapshotBeforeUpdate()
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("search", JSON.stringify(nextState));
  }

  render() {
    return (
      <div className="ui category fluid search">
        <form onSubmit={this.onFormSubmit} endpoint="query" method="post">
          <div className="ui icon input">
            <input
              className="prompt"
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
