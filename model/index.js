const Sequelize = require("sequelize");
const sequelizeObj = require("../config/dbs");

const blogsModel = require("./blogs");
const commentsModel = require("./comments");
const tagsModel = require("./tags");
const usersModel = require("./users");
const blogLikesModel = require("./blogLikes");

const Blog = blogsModel(sequelizeObj, Sequelize);
const Comment = commentsModel(sequelizeObj, Sequelize);
const Tag = tagsModel(sequelizeObj, Sequelize);
const User = usersModel(sequelizeObj, Sequelize);
const BlogLikes = blogLikesModel(sequelizeObj, Sequelize);

Blog.hasMany(Comment, {
  targetKey: "blogDetailsId",
  foreignKey: "blogId",
});

User.hasMany(Blog, {
  targetKey: "userDetailId",
  foreignKey: "userId",
});

Tag.hasOne(Blog, {
  targetKey: "tagDetailId",
  foreignKey: "categoryId",
});

Blog.hasMany(BlogLikes, {
  targetKey: "blogDetailsId",
  foreignKey: "blogId",
});

User.hasMany(BlogLikes, {
  targetKey: "userDetailId",
  foreignKey: "userId",
});

module.exports = {
  Blog,
  Comment,
  Tag,
  User,
  BlogLikes,
};
