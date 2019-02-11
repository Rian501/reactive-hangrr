import keyObj from "./values";

const APIman = Object.create({}, {
  FirebaseURL: {
    value: 'https://whereshouldweeat-369b9.firebaseio.com/'
  },
  proxyURL: {
    value: 'https://emlemproxy.herokuapp.com/api/'
  },
  fetchAPISuggestions: {
    value: function (userLoc) {
      console.log(userLoc)
      return fetch(
        `https://emlemproxy.herokuapp.com/api/places/nearbysearch/json?location=${userLoc.lat},${userLoc.lng}&radius=7800&opennow=true&type=restaurant&keyword=food&key=${keyObj.PlacesAPI}`
      ).then(r => r.json())
    }
  }
}
)

export default APIman;