const { blogLikesService } = require("../service");

const { createBlogLikeById, getBlogLikesById } = blogLikesService;

const createBlogLike = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await createBlogLikeById(id, data);
    return res.sendStatus(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getBlogLikes = async (req, res) => {
  try {
    const result = await getBlogLikesById();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).send("err");
  }
};

module.exports = {
  createBlogLike,
  getBlogLikes,
};
