const {Schema , model} = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  userID : {
    type :Schema.Types.ObjectId,
    ref : 'user',
    required : true
  },
  projectName: { type: String, required: true },
  projectDate: { type: String, required: true },
});

const Project = mongoose.model("project", ProjectSchema);

module.exports = Project;
