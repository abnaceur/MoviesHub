const express = require("express");

const router = express.Router();

const DUMMY_COMMENTS = [
  {
    id: "comment1",
    commentaire: "film trop cool",
    Titre: "Armagedon",
    id_film: "film1",
    id_creator: "user1",
  },
];

// router.get("/", (req, res, next) => {
//   console.log("GET Request in Comments");
//   res.json({ message: "it works" });
// });

router.get("/:cid", (req, res, next) => {
  const commentId = req.params.cid; // {cid: 'comment1'}

  const comment = DUMMY_COMMENTS.find((c) => {
    return c.id === commentId;
  });

  res.json({ comment });
});

// router.get('/user/:uid/movies/:moviesid/comments', (req, res, next) => {
//     const userId = req.params.uid
// });

module.exports = router;
