import hiddenKeys from "./values"
import firebase from "firebase"
import React, { Component } from "react";

const config = {
 apiKey: hiddenKeys.FirebaseKey,
 authDomain: hiddenKeys.FirebaseAuthDomain
}

firebase.initializeApp(config);
const provider = new firebase.auth.GoogleAuthProvider();

export default class Login extends Component {
  // Set initial state
  state = {
    email: "",
    password: "",
    currentUser: "guest"
  };

  isAuthenticated = () => {
      return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({currentUser: user})
      } 
    });
  };

loginUser = () => {
  return firebase
      .auth()
      .signInWithPopup(provider)
      .then(data => {
        let currentUser = data.user.uid;
        console.log("currentUser", currentUser);
        this.setState({ currentUser: currentUser })
            })
      .catch(err => {
        console.log("error loggin in", err.message);
      });
  };


  render() {
    return (
   <button onClick={this.loginUser}>LOG IN</button>
    );
  }
}
