const express = require("express");

const {
  createBlogLike,
  getBlogLikes,
  updateLikes,
  // updateLikesFalse,
  dropLike,
  getBlogLikesByIndividual,
} = require("../controller/blogLikeController");

const router = express.Router();

router.post("/create/:id", createBlogLike);
router.get("/get", getBlogLikes);
router.get("/get_ind/:id?/:blogId?", getBlogLikesByIndividual);
router.put("/update_flag/:id", updateLikes);
// router.put("/update_flag_false/:id", updateLikesFalse);
router.delete("/delete_like/:id", dropLike);

module.exports = router;
