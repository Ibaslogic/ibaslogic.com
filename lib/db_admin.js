const admin = require("firebase-admin");

const {
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_PRIVATE_KEY,
  NEXT_PUBLIC_FIREBASE_PROJECT_ID,
} = process.env;

const config = {
  credential: admin.credential.cert({
    client_email: FIREBASE_CLIENT_EMAIL,
    private_key:
      FIREBASE_PRIVATE_KEY[0] === "-"
        ? FIREBASE_PRIVATE_KEY
        : JSON.parse(FIREBASE_PRIVATE_KEY),
    project_id: NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  }),
  databaseURL: "https://ibaslogic-website-default-rtdb.firebaseio.com/",
};

export default !admin.apps.length ? admin.initializeApp(config) : admin.app();

// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert({
//       client_email: FIREBASE_CLIENT_EMAIL,
//       private_key:
//         FIREBASE_PRIVATE_KEY[0] === "-"
//           ? FIREBASE_PRIVATE_KEY
//           : JSON.parse(FIREBASE_PRIVATE_KEY),
//       project_id: NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     }),
//     databaseURL: "https://ibaslogic-website-default-rtdb.firebaseio.com/",
//   });
// }

// export default admin.database();
