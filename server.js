const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 9000;
const path = require("path");
const appRoutes = require("./routes/index");
const Multer = require("multer");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/images", express.static("images"));
// console.log(__dirname);

app.use("/app", appRoutes);

const storage = Multer.diskStorage({
  destination: "./images",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = Multer({
  storage: storage,
}).single("file");

app.post("/image", upload, Files);

function Files(req, res) {
  try {
    const data = req.file;
    return res.status(200).send(data);
  } catch (error) {
    console.log("err");
  }
}

app.post("/post_user", postToken);

function postToken(req, res) {
  try {
    const data = req.body;
    const atoken = jwt.sign(data, process.env.ACCESS_TOKEN);
    res.json(atoken);
    const result = createRegUserByID(data, atoken);
    return res.status(200);
  } catch (error) {
    console.log("err");
  }
}

app.get("/getPK", authenticateToken, (req, res) => {
  res.json(Post.filter((post) => post.username === req.user.name));
});

const Post = [
  {
    id: 101,
    username: "PK",
  },
  {
    id: 10212121,
    username: "MS",
  },
  {
    id: 103,
    username: "MK",
  },
];

function authenticateToken(req, res, next) {
  if (req.headers["auth"]) {
    const access_token = req.headers["auth"];
    const token = access_token && access_token.split(" ")[1];
    if (token === null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
      if (err) return res.sendStatus(406);
      req.user = user;
      next();
    });
  } else {
    res.status(401).send({ error: "UnAuthorized Access" });
  }
}

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  const atoken = jwt.sign(user, process.env.ACCESS_TOKEN);
  res.json({ accesstoken: atoken });
});

app.listen(PORT, () => console.log("Server created", PORT));
