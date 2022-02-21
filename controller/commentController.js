const { commentService } = require("../service/index");

const {
  createCommentById,
  getCommentById,
  getApprovedById,
  updateApprovedById,
  dropCommentById,
  updateApprovedFalseById,
} = commentService;

const createComment = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await createCommentById(id, data);
    return res.status(200).send(result);
  } catch (error) {
    console.log("err");
  }
};

const getComment = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getCommentById(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).send("err");
  }
};

const getApproved = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getApprovedById(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).send("err");
  }
};

const updateApproved = async (req, res) => {
  try {
    const data = { isApproved: true };
    const { id } = req.params;
    const result = await updateApprovedById(id, data);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).send("err");
  }
};

const updateApprovedFalse = async (req, res) => {
  try {
    const data = { isApproved: false };
    const { id } = req.params;
    const result = await updateApprovedFalseById(id, data);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).send("err");
  }
};

const dropComment = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await dropCommentById(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).send("err");
  }
};

module.exports = {
  createComment,
  getComment,
  getApproved,
  updateApproved,
  dropComment,
  updateApprovedFalse,
};
