const { Blog } = require("../model");
const { Op } = require("sequelize");

const createBlogByID = (data) => Blog.create(data);

const getBlogCount = () => Blog.count({});

const getBlogDetails = ({ pageNo }) =>
  new Promise(async (res, rej) => {
    Blog.findAll({
      limit: 5,
      offset: (pageNo - 1) * 5,
      order: [["created_at", "DESC"]],
    })
      .then((result) => {
        res(result);
      })
      .catch((err) => {
        rej(err);
      });
  });

const getBlogByIndId = (id) =>
  Blog.findOne({
    where: {
      blogDetailsId: id,
    },
  });

const UpdateBlogById = (id, data) =>
  Blog.update(data, {
    where: {
      blogDetailsId: id,
    },
  });

const dropBlogById = (id) =>
  Blog.destroy({
    where: {
      blogDetailsId: id,
    },
  });

const searchBlogBytitle = (search) =>
  Blog.findAll({
    where: {
      title: { [Op.like]: "%" + search + "%" },
    },
  });

module.exports = {
  getBlogDetails,
  createBlogByID,
  UpdateBlogById,
  dropBlogById,
  getBlogByIndId,
  getBlogCount,
  searchBlogBytitle,
};
