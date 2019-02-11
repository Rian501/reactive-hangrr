import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from "./Login";

export default class ApplicationViews extends Component {
  state = {
    
  };

  // Check if there is a logged-in user

  

  componentDidMount() {
    // set the state with the props?
    };

    
  //ref this: https://github.com/nss-day-cohort-29/Kennel-React-29/blob/master/src/components/ApplicationViews.js
  render() {
    return (
      <React.Fragment>
        {/* All the routes go here */}
        <Login setUser={this.props.setCurrentUser} />

      </React.Fragment>
    );
  }
}