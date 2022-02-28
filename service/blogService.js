const { Blog } = require("../model");
const { Op } = require("sequelize");

const createBlogByID = (data) => Blog.create(data);

// const getBlogCount = () => Blog.count({});

const getBlogDetails = ({ pageNo, tag, search }) =>
  new Promise(async (res, rej) => {
    var statement = {};
    if (tag) statement.categoryId = { [Op.contains]: [{ id: parseInt(tag) }] };
    if (search) statement.title = { [Op.like]: "%" + search + "%" };
    Blog.findAndCountAll({
      where: statement,
      limit: 6,
      offset: (pageNo - 1) * 6,
      order: [["created_at", "DESC"]],
    }).then((result) => {
      res(result);
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

// const searchBlogBytitle = (search) => {
//   Blog.findAll({
//     where: {
//       title: { [Op.like]: "%" + search + "%" },
//     },
//   });
// };

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
  // searchBlogBytitle,
};
