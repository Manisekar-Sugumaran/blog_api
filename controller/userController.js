const { userService } = require("../service/index");
const jwt = require("jsonwebtoken");

const { createUserById, getUserDetails } = userService;

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const result = await createUserById(data);
    return res.status(200).json(result);
  } catch (error) {
    console.log("err");
  }
};

const getUser = async (req, res) => {
  try {
    const data = req.body;
    const result = await getUserDetails(data);
    // return res.json(result);
    if (result) {
      const token = await jwt.sign(
        result.userDetailId,
        process.env.ACCESS_TOKEN
      );
      result.token = token;
      return res.status(200).json(result);
    }
  } catch (error) {
    return res.status(400).send("err");
  }
};

module.exports = {
  createUser,
  getUser,
};
