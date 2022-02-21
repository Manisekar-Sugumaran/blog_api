const { User } = require("../model");
const jwt = require("jsonwebtoken");

const createUserById = (data) => User.create(data);

const getUserDetails = (data) =>
  User.findOne({
    where: {
      email: data.email,
      password: data.password,
    },
  });

// function postToken(req, res) {
//   try {
//     const data = req.body;
//     const atoken = jwt.sign(data, process.env.ACCESS_TOKEN);
//     const result = User.create(data);
//     res.json(data);
//     console.log(data);
//     return res.status(200);
//   } catch (error) {
//     console.log("err");
//   }
// }

// // router.get("/get", authenticateToken, (req, res) => {
// //   res.json(User.filter((user) => user.email === req.user));
// // });

const authenticateToken = async (req, res, next) => {
  try {
    if (req.headers["auth"]) {
      const access_token = req.headers["auth"];
      const token = access_token && access_token.split(" ")[1];
      if (token === null) return res.sendStatus(401);
      jwt.verify(token, (err, data) => {
        if (err) return res.sendStatus(406);
        req.body.email = data.email;
        next();
      });
    } else {
      res.status(401).send({ error: "UnAuthorized Access" });
    }
  } catch (error) {
    console.log("err");
  }
};

module.exports = {
  createUserById,
  getUserDetails,
};
