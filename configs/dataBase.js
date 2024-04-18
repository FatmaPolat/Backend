const mongoose = require("mongoose");

const dataBaseConnection = mongoose.connect(
  "mongodb+srv://fatmapolat:BytMig123@cluster0.xjzartt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

module.exports = {
  dataBaseConnection,
};
