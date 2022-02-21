const express = require("express");

const {
  createBlogLike,
  getBlogLikes,
} = require("../controller/blogLikeController");

const router = express.Router();

router.post("/create/:id", createBlogLike);
router.get("/get", getBlogLikes);

module.exports = router;
