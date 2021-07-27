import admin from "firebase-admin";

const {
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_PRIVATE_KEY,
  NEXT_PUBLIC_FIREBASE_PROJECT_ID,
} = process.env;

// const firebasePrivateKey = FIREBASE_PRIVATE_KEY;

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: FIREBASE_CLIENT_EMAIL,
      private_key:
        FIREBASE_PRIVATE_KEY[0] === "-"
          ? FIREBASE_PRIVATE_KEY
          : JSON.parse(FIREBASE_PRIVATE_KEY),
      // private_key: firebasePrivateKey.replace(/\\n/g, "\n"),
      project_id: NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
    databaseURL: "https://ibaslogic-website-default-rtdb.firebaseio.com/",
  });
}

export default admin.database();
