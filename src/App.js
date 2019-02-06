import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Navbar";
import Login from "./Login";
import ApplicationViews from "./ApplicationViews";


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
          <Login setUser={this.setCurrentUser} />
        </React.Fragment>
      </Router>
    );
  }
}
