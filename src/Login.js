import hiddenKeys from "./values"
import firebase from "firebase"
import React, { Component } from "react";

// const config = {
//   apiKey: hiddenKeys.FirebaseKey,
//   authDomain: hiddenKeys.FirebaseAuthDomain
// }

// firebase.initializeApp(config);
const provider = new firebase.auth.GoogleAuthProvider();

export default class Login extends Component {

    state = {
      currentUser: "guest"
    };



  isAuthenticated = () => {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ currentUser: user.uid })
        this.props.setUser(user.uid)
      }
    });
  };

  componentDidMount() {
    this.isAuthenticated();
  }

  loginUser = () => {
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then(data => {
        this.setState({ currentUser: data.user.uid })
        this.props.setUser(data.user.uid)
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
