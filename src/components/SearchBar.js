import React, { Component } from "react";


class SearchBar extends Component {
  state = { searchTerm: "" };
  onInputChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  onSearchSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.searchTerm)
};

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSearchSubmit}>
          <div className="field">
            <input
              placeholder="Search"
              type="text"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
