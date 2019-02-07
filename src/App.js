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

  setCurrentUser=(uid)=> {
    console.log("welp")
    this.setState({ currentUser: uid })
  }

  componentDidMount() {
    this.setState({ currentUser: "someLongString" })
  }


  render() {
    return (
      // <Router>
        
          <Login setUser={this.setCurrentUser} />
      // </Router>
    );
  }
}
