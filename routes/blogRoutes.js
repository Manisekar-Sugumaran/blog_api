const express = require("express");
const Multer = require("multer");

const {
  createBlog,
  getBlog,
  UpdateBlog,
  getBlogById,
  dropBlog,
  // searchBlog,
} = require("../controller/blogController");

const storage = Multer.diskStorage({
  destination: "./images",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const router = express.Router();

const upload = Multer({
  storage: storage,
}).single("file");

router.post("/create", createBlog);
// router.get("/search", searchBlog);
router.get("/get", getBlog);
router.get("/get/:id", getBlogById);
router.put("/update/:id", UpdateBlog);
router.delete("/delete/:id", dropBlog);

module.exports = router;
