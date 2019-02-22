import hiddenKeys from "./values"
import React, { Component } from "react";
import APIman from "./APImanager"

export default class SuggestionBox extends Component {

  state = {
    userLoc: {
      lat: 0,
      long: 0
    },
    suggestions: [],
    blacklist: []
  };

  locateUser = () => {
    return new Promise( (resolve, reject)=> {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
        let userLoc = {}
        userLoc.lat = position.coords.latitude;
        userLoc.lng = position.coords.longitude;
        this.setState({ userLoc })
        resolve(userLoc)
      });
    } else {
      console.log("Your browser does not seem to support geolocation!");
      reject()
    }
  })
  };

  componentDidMount() {
    this.locateUser()
    .then(userLoc => {
      console.log(userLoc)
      APIman.fetchAPISuggestions(userLoc)
        .then(response => {
          console.log(response.results)
          this.setState({suggestions: response.results})
        })
      APIman.getBlacklist("hPpD42vypvV045Y22zHriSZ7mSk1")
      // .then((listo) => {
      //   console.log(listo)
      // })
    })
 }


  render() {
    return (
      <p>This is a suggestion box</p>
    );
  }
}
