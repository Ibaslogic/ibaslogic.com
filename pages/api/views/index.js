// import db from "../../../lib/db_admin";

// export default async function handler(_, res) {
//   const snapshot = await db.ref("views").once("value");
//   const views = snapshot.val();

//   const allViews = Object.values(views).reduce((total, value) => total + value);

//   return res.status(200).json({ total: allViews });
// }

// // import { google } from "googleapis";

// // let googleAuth;

// // export default async (_, res) => {
// //   googleAuth = new google.auth.GoogleAuth({
// //     credentials: {
// //       client_email: process.env.GOOGLE_CLIENT_EMAIL,
// //       client_id: process.env.GOOGLE_CLIENT_ID,
// //       private_key: process.env.GOOGLE_PRIVATE_KEY,
// //     },
// //     scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
// //   });

// //   const analytics = google.analytics({
// //     auth,
// //     version: "v3",
// //   });

// //   console.log(analytics);

// //   const startDate = req.query.startDate;

// //   const response = await analytics.data.ga.get({
// //     "end-date": "today",
// //     ids: "ga:208260482",
// //     metrics: "ga:pageviews",
// //     "start-date": startDate,
// //   });

// //   return res.status(200).json({
// //     // pageViews: response.data.rows[0][0],
// //   });
// // };
