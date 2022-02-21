const { Comment } = require("../model");

const createCommentById = (id, data) =>
  Comment.create({
    blogId: id,
    comment: data.comment,
  });

const getCommentById = (id) =>
  Comment.findAll({
    // attributes: ["commentDetailsId", "comment", "isApproved"],
    where: {
      blogId: id,
    },
  });

const getApprovedById = (id) =>
  Comment.findOne({
    attributes: ["isApproved"],
    where: {
      commentDetailsId: id,
    },
  });

const updateApprovedById = (id, data) =>
  Comment.update(data, {
    where: {
      commentDetailsId: id,
    },
  });

const updateApprovedFalseById = (id, data) =>
  Comment.update(data, {
    where: {
      commentDetailsId: id,
    },
  });

const dropCommentById = (id) =>
  Comment.destroy({
    where: {
      blogId: id,
    },
  });

module.exports = {
  createCommentById,
  getCommentById,
  getApprovedById,
  updateApprovedById,
  dropCommentById,
  updateApprovedFalseById,
};
