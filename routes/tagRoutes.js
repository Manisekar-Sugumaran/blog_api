const express = require("express");
const { getTag } = require("../controller/tagController");

const router = express.Router();

router.get("/get", getTag);

module.exports = router;
