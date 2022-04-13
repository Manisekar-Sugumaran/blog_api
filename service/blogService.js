const { Blog, BlogLikes } = require("../model");
const { Op } = require("sequelize");
const { reject } = require("bcrypt/promises");

const createBlogByID = (data) => Blog.create(data);

// const getBlogCount = () => Blog.count({});

const getBlogDetails = ({ pageNo, tag, search }) =>
  new Promise(async (res, rej) => {
    var statement = {};
    if (tag) statement.categoryId = { [Op.contains]: [{ id: parseInt(tag) }] };
    if (search) statement.title = { [Op.iLike]: "%" + search + "%" };
    Blog.findAndCountAll({
      where: statement,
      limit: 6,
      offset: (pageNo - 1) * 6,
      order: [["created_at", "DESC"]],
      include: [
        {
          model: BlogLikes,
        },
      ],
    }).then((result) => {
      res(result);
    });
  });

const getBlogByIndId = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const sd = await Blog.findAll({});
      const dd = await Blog.findOne({
        where: {
          blogDetailsId: id,
        },
      });
      const s = { sd, dd };
      resolve(s);
    } catch (error) {
      reject(error);
    }
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

const searchBlogBytitle = () => {
  Blog.findAll({
    attributes: [
      "createdAt",
      [Op.fn("date_format", Op.col("createdAt"), "%Y-%m-%d"), "createdAt"],
    ],
  });
};
// const searchBlogBytitle = (search) =>{
// if(isTag){
// Blog.findAll({
//       where: {
//         title: { [Op.like]: "%" + search + "%" },
//       },
//     });

// }else{

// }
// var tagData = Blog.findAll({
//   where: {
//     tag: { id == id }
//   }
// });

//   var blogData = Blog.findAll({
//     where: {
//       title: { [Op.like]: "%" + search + "%" },
//     },
//   });
// }
module.exports = {
  getBlogDetails,
  createBlogByID,
  UpdateBlogById,
  dropBlogById,
  getBlogByIndId,
  // getBlogCount,
  searchBlogBytitle,
};
