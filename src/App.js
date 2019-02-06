import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Navbar";
import hiddenKeys from "./values"
import ApplicationViews from "./ApplicationViews";

const config = {
  apiKey: hiddenKeys.FirebaseKey,
  authDomain: hiddenKeys.FirebaseAuthDomain
}

firebase.initializeApp(config);
var provider = new firebase.auth.GoogleAuthProvider();
export default class App extends Component {
  state = {
    currentUser: "guest"
  }

  setCurrentUser(uid) {
    this.setState({ currentUser: uid })
  }

  componentDidMount() {

  }


  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
        </React.Fragment>
      </Router>
    );
  }
}
