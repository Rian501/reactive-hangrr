import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Navbar";
import ApplicationViews from "./ApplicationViews";


export default class App extends Component {
  state = {
    currentUser: "guest",
    userLoc: {
      lat: 0,
      lang: 0
    }
  }

  setCurrentUser = (uid) => {
    console.log("welp")
    this.setState({ currentUser: uid })
  }


  locateUser = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( (position) => {
        let userLoc={}
        userLoc.lat = position.coords.latitude;
        userLoc.lng = position.coords.longitude;
        this.setState({ userLoc });
      });
    } else {
      console.log("Your browser does not seem to support geolocation!");
    }
  };

componentDidMount() {
  this.setState({ currentUser: "someLongString" })
  this.locateUser();
}


render() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <ApplicationViews setCurrentUser={this.setCurrentUser} />
      </React.Fragment>
    </Router>
  );
}
}
