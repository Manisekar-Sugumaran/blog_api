const express = require("express");

const blog = require("./blogRoutes");
const comment = require("./commentRoutes");
const tag = require("./tagRoutes");
const user = require("./userRoutes");
const blogLikes = require("./blogLikesRoute");

const app = express();

app.use("/blog", blog);
app.use("/comment", comment);
app.use("/tag", tag);
app.use("/user", user);
app.use("/blogLikes", blogLikes);

module.exports = app;
