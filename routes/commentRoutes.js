const express = require("express");

const {
  createComment,
  getComment,
  dropComment,
  getApproved,
  updateApprovedFalse,
  updateApproved,
} = require("../controller/commentController");

const router = express.Router();

router.post("/create/:id", createComment);
router.get("/get/:id", getComment);
router.get("/get_flag/:id", getApproved);
router.put("/update_flag/:id", updateApproved);
router.put("/update_flag_false/:id", updateApprovedFalse);
router.delete("/delete", dropComment);

module.exports = router;
