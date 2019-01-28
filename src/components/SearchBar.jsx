import React from "react";

export default class SearchBar extends React.Component {
  state = {
    term: ""
  };

  onInputChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  // onInputClick() {
  //   console.log("Input was clicked");
  // }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
