const mongoose = require("mongoose");

const connect = async () => {
  return mongoose.connect(
    "mongodb+srv://mongo:mongo@cluster0.7ydz8wg.mongodb.net/at?retryWrites=true&w=majority"
  );
};

module.exports = connect;
