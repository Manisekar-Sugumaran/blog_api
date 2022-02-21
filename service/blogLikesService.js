const { BlogLikes } = require("../model");

const createBlogLikeById = (id, data) =>
  BlogLikes.create({
    likes: data.likes,
    userId: data.userId,
    isLiked: data.isLiked,
    blogId: id,
  });

const getBlogLikesById = () => BlogLikes.findAll({});

module.exports = {
  createBlogLikeById,
  getBlogLikesById,
};
