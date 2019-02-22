import keyObj from "./values";

const APIman = Object.create({}, {
  FirebaseURL: {
    value: 'https://whereshouldweeat-369b9.firebaseio.com/'
  },
  proxyURL: {
    value: 'https://emlemproxy.herokuapp.com/api/'
  },
  fetchAPISuggestions: {
    //adjust radius, also type? keyword?
    value: function (userLoc) {
      console.log(userLoc)
      return fetch(
        `https://emlemproxy.herokuapp.com/api/places/nearbysearch/json?location=${userLoc.lat},${userLoc.lng}&radius=7800&opennow=true&type=restaurant&keyword=food&key=${keyObj.PlacesAPI}`
      ).then(r => r.json())
    }
  },
  getBlacklist: {
    value: function (uid) {
      console.log("UIDDDDD", uid)
      return fetch(`https://whereshouldweeat-369b9.firebaseio.com/blacklist.json?orderBy="uid"&equalTo="${uid}"`)
        .then(r => r.json())
        .then(res => console.log(res))
    }
  }
})


export default APIman;