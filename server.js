require("dotenv").config();
const connect = require("./connect.js");
const Project = require("./schema.js");
const express = require("express");
const cors = require("cors");
const Port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const data = await Project.find();
  res.send(data);
});

app.get("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await Project.findById(id);
  res.send(data);
});

//post
app.post("/", async (req, res) => {
  const { projectName, projectDate } = req.body;
  console.log(req.body);
  try {
    const p = await Project.findOne({ projectName });
    if (!p) {
      const data = await Project.create({ projectName, projectDate });
      const updated = await Project.find();
      res.status(200).send(updated);
    } else {
      res.status(404).send({ message: "project already exists" });
    }
  } catch (err) {
    res.status(401).send(err.message);
  }
});
//delete
app.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const data = await Project.deleteOne({ _id: id });
  const updated = await Project.find();
  res.send(updated);
});

//update
app.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const data = await Project.updateOne(
    { _id: id },
    {
      $set: {
        projectName: req.body.projectName,
        projectDate: req.body.projectDate,
      },
    }
  );
  const updated = await Project.find();
  res.send(updated);
});

app.listen(8001, async () => {
  await connect();
  console.log(`listening on http://localhost:8001`);
});
