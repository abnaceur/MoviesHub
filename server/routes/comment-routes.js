const express = require("express");
const commentController = require("../controllers/comment-controller");

const router = express.Router();

// uid = UserId, mid = MovieId, cid = CommentId
router.post("/:uid/:mid", commentController.newComment);
router.get("/:mid", commentController.getComments);
router.delete("/:cid", commentController.deleteComment);

module.exports = router;
