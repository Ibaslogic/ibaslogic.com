import firebase from "firebase/app";
import "firebase/database";

const config = {
  databaseURL: "https://ibaslogic-website-default-rtdb.firebaseio.com/",
};

function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
}

initFirebase();

export { firebase };
