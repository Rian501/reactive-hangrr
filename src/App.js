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

  }

  isAuthenticated = () => {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ currentUser: user.uid })
      }
    });
  };




  setCurrentUser = (uid) => {
    console.log("welp")
    this.setState({ currentUser: uid })
  }


  
  componentDidMount() {
    this.isAuthenticated();
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
