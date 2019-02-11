import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Navbar";
import ApplicationViews from "./ApplicationViews";
import firebase from "firebase"
import hiddenKeys from "./values"

const config = {
  apiKey: hiddenKeys.FirebaseKey,
  authDomain: hiddenKeys.FirebaseAuthDomain
}

firebase.initializeApp(config);
const provider = new firebase.auth.GoogleAuthProvider();

export default class App extends Component {
  state = {
    currentUser: "guest",
    userLoc: {
      lat: 0,
      long: 0
    }
  }

  isAuthenticated = () => {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ currentUser: user.uid })
        this.props.setUser(user.uid)
      }
    });
  };




  setCurrentUser = (uid) => {
    console.log("welp")
    this.setState({ currentUser: uid })
  }


  locateUser = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let userLoc = {}
        userLoc.lat = position.coords.latitude;
        userLoc.lng = position.coords.longitude;
        this.setState({ userLoc });
      });
    } else {
      console.log("Your browser does not seem to support geolocation!");
    }
  };

  componentDidMount() {
    this.isAuthenticated();
    this.locateUser();
  }


  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <ApplicationViews
            setCurrentUser={this.setCurrentUser}
            currentUser={this.state.currentUser}
            userLoc={this.state.userLoc} />
        </React.Fragment>
      </Router>
    );
  }
}
