const connect = require("./Config/connect.js");
const express = require("express");
const cors = require("cors");
const ProjectRoute = require("./Features/Project/project.route.js");
const BlogRoute = require("./Features/Blog/blog.route.js");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/project", ProjectRoute);
app.use("/blog", BlogRoute);
app.listen(8001, async () => {
  try {
    await connect();
    console.log("data connected");
  } catch (err) {
    console.log(err.message, "not connected");
  }

  console.log(`listening on http://localhost:8001`);
});
