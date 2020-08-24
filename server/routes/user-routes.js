const express = require("express");
const userController = require("../controllers/user-controller");

const router = express.Router();

// uid = UserId, mid = MovieId, cid = CommentId
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/update", userController.update);
router.post("/updatePassword", userController.updatePassword);
router.get("/:uid", userController.getProfile);

module.exports = router;
