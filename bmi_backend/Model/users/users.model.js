const mongoose = require("mongoose");

const userCredential_Schema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
  {
    versionKey: false,
  }
);

const userCredential_Model = mongoose.model(
  "usersCreden",
  userCredential_Schema
);

module.exports = { userCredential_Model };
