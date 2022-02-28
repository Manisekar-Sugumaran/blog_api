const { Blog } = require("../model");
const { Op } = require("sequelize");

const createBlogByID = (data) =>
  Blog.create({
    categoryId: data.categoryId,
  });

const getBlogCount = () => Blog.count({});
// Blog.findAll({
//   where: {
//     categoryId: {
//       $contains: [{ id: 1 }, { id: 3 }],
//     },
//   },
// })

// const getBlogDetails = () =>
//   new Promise(async (res, rej) => {
//     Blog.findAll({
//       where: {
//         categoryId: { [Op.contains]: ["id"] },
//       },
//     })
//       .then((result) => {
//         res(result);
//         console.log(result);
//       })
//       .catch((err) => {
//         rej(err);
//       });
//   });

const getBlogDetails = ({ pageNo, tag, search }) =>
  new Promise(async (res, rej) => {
    console.log(pageNo + " - " + tag + "-" + search);
    tag = tag ? tag + "," : null;
    var tag2 = tag ? " " + tag + "," : null;
    var queryString = ["1,%"];

    // First check tags
    if (tag) {
      // check search query else global search
      if (search) {
        Blog.findAll({
          // where: {
          //   cId: { [Op.like]: "%" + tag2 + "%" }, //1,
          // },
          where: {
            // cId: { $in: { $iLike: { $any: queryString } } },
            // cId: { [Op.like]: "%" + tag + "%" }, //1,
            cId: { [Op.like]: "%" + tag2 + "%" },
          },
          where: {
            title: { [Op.like]: "%" + search + "%" },
          },
          limit: 5,
          offset: (pageNo - 1) * 5,
          order: [["created_at", "DESC"]],
        }).then((result) => {
          console.log(result);
          res(result);
        });
      } else {
        Blog.findAll({
          where: {
            // cId: { [Op.like]: "%" + tag + "%" }, //1,
            cId: { [Op.like]: "%" + tag2 + "%" },
          },
          // limit: 5,
          // offset: (pageNo - 1) * 5,
          // order: [["created_at", "DESC"]],
        }).then((result) => {
          res(result);
        });
      }
    } else if (search) {
      Blog.findAll({
        where: {
          title: { [Op.like]: "%" + search + "%" },
        },
        limit: 5,
        offset: (pageNo - 1) * 5,
        order: [["created_at", "DESC"]],
      }).then((result) => {
        res(result);
      });
    } else {
      Blog.findAll({
        limit: 5,
        offset: (pageNo - 1) * 5,
        order: [["created_at", "DESC"]],
      }).then((result) => {
        res(result);
      });
    }
  });
// Blog.findAll({
//   where: {
//     cId: { [Op.like]: "%" + id + "%" }, //1,
//   },
//   limit: 5,
//   offset: (pageNo - 1) * 5,
//   order: [["created_at", "DESC"]],
// }).then((result) => {
//   let st = result.map((d) => parseIntArrays(d.cId));
//   res(st);
// });
// var data = {};
// if (id) {
//   data.id = id;
// }
// if (search) {
//   data.search = search;
// }
// console.log(data);
// Blog.findAll({
//   where: {
//     categoryId: {
//       [Op.in]: id,
//     },
//     title: { [Op.like]: "%" + search + "%" },
//   },

//   limit: 5,
//   offset: (pageNo - 1) * 5,
//   order: [["created_at", "DESC"]],
// })
//   .then((result) => {
//     res(result);
//   })
//   .catch((err) => {
//     rej(err);
//   });

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

const searchBlogBytitle = (search) => {
  Blog.findAll({
    where: {
      title: { [Op.like]: "%" + search + "%" },
    },
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
  getBlogCount,
  searchBlogBytitle,
};
