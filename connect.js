const mongoose = require("mongoose");

const connect = async () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/AT");
};

module.exports = connect;
