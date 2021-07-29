import db from "../../../lib/db_admin";

export default async (req, res) => {
  if (req.method === "POST") {
    const ref = db.ref("likes").child(req.query.id);

    const { snapshot } = await ref.transaction((currentLikes) => {
      if (currentLikes === null) {
        return 1;
      }

      return currentLikes + 1;
    });

    return res.status(200).json({
      total: snapshot.val(),
    });
  }

  if (req.method === "GET") {
    const snapshot = await db.ref("likes").child(req.query.id).once("value");
    const likes = snapshot.val();

    return res.status(200).json({ total: likes });
  }
};

// import db from "../../../lib/db_admin";

// export default async (req, res) => {
//   // check for query parameter

//   if (!req.query.id) {
//     return res.status(400).json({
//       error: 'Missing "id" query parameter',
//     });
//   }
//   const ref = db.ref("likeCount").child(req.query.id);
//   const { snapshot } = await ref.transaction((currentLikes) => {
//     if (currentLikes === null) {
//       return 1;
//     }

//     return currentLikes + 1;
//   });

//   return res.status(200).json({
//     total: snapshot.val(),
//   });
// };

// // import db from "../../../lib/db_admin";

// // export default async (req, res) => {
// //   // check for query parameter

// //   if (!req.query.id) {
// //     return res.status(400).json({
// //       error: 'Missing "id" query parameter',
// //     });
// //   }
// //   const ref = db.ref("likes").child(req.query.id);
// //   const { snapshot } = await ref.transaction((currentLikes) => {
// //     if (currentLikes === null) {
// //       return 1;
// //     }

// //     return currentLikes + 1;
// //   });

// //   return res.status(200).json({
// //     total: snapshot.val(),
// //   });
// // };
