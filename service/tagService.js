const { Tag } = require("../model");

const getTagById = () =>
  Tag.findAll({
    // where: {
    //   tagDetailId: id,
    // },
  });

module.exports = {
  getTagById,
};
