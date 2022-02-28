const express = require("express");

const {
  createBlogLike,
  getBlogLikes,
  updateLikes,
  updateLikesFalse,
} = require("../controller/blogLikeController");

const router = express.Router();

router.post("/create/:id", createBlogLike);
router.get("/get", getBlogLikes);
router.put("/update_flag/:id", updateLikes);
router.put("/update_flag_false/:id", updateLikesFalse);

module.exports = router;
