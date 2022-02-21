const express = require("express");
const { User } = require("../model");
const jwt = require("jsonwebtoken");

const { createUser, getUser } = require("../controller/userController");

const router = express.Router();

router.post("/create", createUser);

function authenticateToken(req, res, next) {
  try {
    if (req.headers["auth"]) {
      const access_token = req.headers["auth"];
      const token = access_token && access_token.split(" ")[1];
      if (token === null) return res.sendStatus(401);
      jwt.verify(token, process.env.ACCESS_TOKEN, (err, data) => {
        if (err) return res.sendStatus(406);
        req.body.email = data.email;
        req.body.password = data.password;
        next();
      });
    } else {
      res.status(401).send({ error: "UnAuthorized Access" });
    }
  } catch (error) {
    console.log(error.message);
  }
}

router.post("/get", getUser);
module.exports = router;
