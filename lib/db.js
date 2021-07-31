// const foo = async () => {
//   // do something
// }

// const loadDb = async () => {
//   const firebase = await import("firebase/app");

//   await import("firebase/database");

//   try {
//     firebase.initializeApp({
//       databaseURL: "https://ibaslogic-website-default-rtdb.firebaseio.com/",
//     });
//   } catch (error) {
//     /*
//      * We skip the "already exists" message which is
//      * not an actual error when we're hot-reloading
//      */
//     if (!/already exists/u.test(error.message)) {
//       // eslint-disable-next-line no-console
//       console.error("Firebase initialization error", error.stack);
//     }
//   }

//   // return firebase.database().ref('views')
//   return firebase.database();
// };

// export default loadDb;

// import firebase from "firebase/app";
// import "firebase/database";

// const config = {
//   databaseURL: "https://ibaslogic-website-default-rtdb.firebaseio.com/",
// };

// function initFirebase() {
//   if (!firebase.apps.length) {
//     firebase.initializeApp(config);
//   }
// }

// initFirebase();

// export { firebase };

// import firebase from "firebase/app";
// import "firebase/database";

// const config = {
//   databaseURL: "https://ibaslogic-website-default-rtdb.firebaseio.com/",
// };

// function initFirebase() {
//   if (!firebase.apps.length) {
//     firebase.initializeApp(config);
//   }
// }

// initFirebase();

// export { firebase };
