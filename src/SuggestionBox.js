import hiddenKeys from "./values"
import React, { Component } from "react";
import APIman from "./APImanager"

export default class SuggestionBox extends Component {

  state = {
    suggestions: []
  };

  
  componentDidMount() {
    APIman.fetchAPISuggestions(this.props.userLoc)
    .then(response => {
      console.log(response)
    })
  }

  render() {
    return (
      <p>This is a suggestion box</p>
    );
  }
}
