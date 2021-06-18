import firebase from "firebase/app";
import "firebase/database";

const config = {
  databaseURL: "https://realtimeviews-53eb2-default-rtdb.firebaseio.com/",
};

function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
}

initFirebase();

export { firebase };
