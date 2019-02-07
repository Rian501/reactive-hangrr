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
  // constructor(props) {
  //   super(props);
  //   this.
    state = {
      currentUser: "guest"
    };
  //   this.loginUser = this.loginUser.bind(this);
  // }


  isAuthenticated = () => {
    return firebase.auth().onAuthStateChanged(user => {
      console.log(user)
      //if (user) {
        // this.setState({ currentUser: user.uid })
        this.props.setUser(user.uid)
      //}
    });
  };

  componentDidMount() {
    this.isAuthenticated();
    // this.loginUser();
  }

  loginUser = () => {
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then(data => {
        // this.setState({ currentUser: data.user.uid })
        this.props.setUser(data.user.uid)
      })
      // .catch(err => {
      //   console.log("error loggin in", err.message);
      // });
  };


  render() {
    return (
      <button onClick={this.loginUser}>LOG IN</button>
    );
  }
}
