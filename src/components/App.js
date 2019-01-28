import React from "react";
import unpslash from "../api/unpslash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

export default class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    const res = await unpslash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({
      images: res.data.results
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
