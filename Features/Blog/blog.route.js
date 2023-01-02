const express = require("express");
const app = express.Router();
const Blog = require("./blog.model.js");
app.get("/", async (req, res) => {
  const { page, limit, category } = req.query;
  console.log(page, limit, category);
  let data = await Blog.find()
    .limit(limit)
    .skip((page - 1) * limit);

  if (category) {
    data = await Blog.find({ category: category })
      .limit(limit)
      .skip((page - 1) * limit);
  }

  res.send(data);
});


module.exports = app;
