const { blogLikesService } = require("../service");

const {
  createBlogLikeById,
  getBlogLikesByIndividualId,
  updateLikedById,
  // updateLikedFalseById,
  dropLikeById,
  getBlogLikesById,
} = blogLikesService;

const createBlogLike = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const { blogId } = data;
    const result = await createBlogLikeById(id, blogId);
    return res.status(200).json(result);
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

const updateLikes = async (req, res) => {
  try {
    const data = { isLiked: true };
    const { id } = req.params;
    const blogId = req.body;
    const result = await updateLikedById(id, data, blogId);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).send("err");
  }
};

const getBlogLikesByIndividual = async (req, res) => {
  try {
    // const { id, blogId } = req.params;
    // const data = req.body;
    const result = await getBlogLikesByIndividualId({ ...req.query });
    return result;
  } catch (error) {
    return res.status(400).send("err");
  }
};

// const updateLikesFalse = async (req, res) => {
//   try {
//     const data = { isLiked: false };
//     const { id } = req.params;
//     const blogId = req.body;
//     const result = await updateLikedFalseById(id, data, blogId);
//     return res.status(200).json(result);
//   } catch (error) {
//     return res.status(400).send("err");
//   }
// };

const dropLike = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await dropLikeById(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).send("err");
  }
};

module.exports = {
  createBlogLike,
  getBlogLikes,
  updateLikes,
  // updateLikesFalse,
  dropLike,
  getBlogLikesByIndividual,
};
