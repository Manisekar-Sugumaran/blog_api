const { BlogLikes } = require("../model");

const createBlogLikeById = (id, data) =>
  BlogLikes.create({
    likes: data.likes,
    userId: data.userId,
    isLiked: data.isLiked,
    blogId: id,
  });

const getBlogLikesById = () => BlogLikes.findAll({});

const updateLikedById = (id, data, blogId) =>
  BlogLikes.update(data, {
    where: {
      userId: id,
      blogId,
    },
  });

const updateLikedFalseById = (id, data, blogId) =>
  BlogLikes.update(data, {
    where: {
      userId: id,
      blogId,
    },
  });

module.exports = {
  createBlogLikeById,
  getBlogLikesById,
  updateLikedById,
  updateLikedFalseById,
};
