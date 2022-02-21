const jwt = require("jsonwebtoken");

// app.post('/post_user', postReg )

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
  res.json(Post.filter((post) => post.username === req.username.name));
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
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, data) => {
      if (err) return res.sendStatus(406);
      req.username = data.username;
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
