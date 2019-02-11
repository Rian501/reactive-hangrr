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

getDay = () => {
  //0 is Sunday in this model, but I want 0 to be Mon and 6 to be Sun
  let today = null;
  var d = new Date();
  var n = d.getDay();
  if (n !== 0) {
    today = n - 1;
  } else {
    today = 6;
  }
  return today;
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
