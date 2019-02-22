import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from "./Login";
import SuggestionBox from "./SuggestionBox";

export default class ApplicationViews extends Component {
  state = {
    today: 1
  }

  getDay = () => {
    //0 is Sunday in this model, but I want 0 to be Mon and 6 to be Sun to match API
    let today = null;
    var d = new Date();
    var n = d.getDay();
    if (n !== 0) {
      today = n - 1;
    } else {
      today = 6;
    }
    this.setState({ today: today })
  };

  // Check if there is a logged-in user



  componentDidMount() {
    this.getDay();
  };


  //ref this: https://github.com/nss-day-cohort-29/Kennel-React-29/blob/master/src/components/ApplicationViews.js
  render() {
    return (
      <React.Fragment>
        {/* All the routes go here */}
        <Route path="/login"
          render={props => {
            return <Login {...props} setUser={this.props.setCurrentUser} />
          }} />

        <Route
          exact
          path="/"
          render={props => {
            return <SuggestionBox 
              today={this.state.today} 
              currentUser={this.props.currentUser}
              />;
          }}
        />
      </React.Fragment>
    );
  }
}