const { BlogLikes } = require("../model");

const createBlogLikeById = (id, blogId) => {
  // BlogLikes.create({
  //   userId: id,
  //   blogId: a,
  // });

  BlogLikes.findOne({
    where: {
      userId: id,
      blogId,
    },
  })
    .then((result) => {
      if (!result) {
        BlogLikes.create({
          userId: id,
          blogId,
        });
      } else {
        BlogLikes.destroy({
          where: { userId: id, blogId },
        });
      }
    })
    .catch((err) => {});
};
const getBlogLikesById = () => BlogLikes.findAll();

const getBlogLikesByIndividualId = ({ userId, blogId }) =>
  BlogLikes.findOne({
    where: {
      userId,
      blogId,
    },
  })
    .then((result) => {
      if (!result) {
        BlogLikes.create({
          userId,
          blogId,
        });
      } else {
        BlogLikes.destroy({
          userId,
          blogId,
        });
      }
    })
    .catch((err) => {});

const updateLikedById = (id, data, blogId) =>
  BlogLikes.update(data, {
    where: {
      userId: id,
      blogId,
    },
  });

// const updateLikedFalseById = (id, data, blogId) =>
//   BlogLikes.update(data, {
//     where: {
//       userId: id,
//       blogId,
//     },
//   });

const dropLikeById = (id) =>
  BlogLikes.destroy({
    where: {
      blogId: id,
    },
  });

module.exports = {
  createBlogLikeById,
  getBlogLikesById,
  updateLikedById,
  // updateLikedFalseById,
  dropLikeById,
  getBlogLikesByIndividualId,
};
