const express = require("express");
const userCredentialRoute = express.Router();
const bcrypt = require("bcrypt");
const { userCredential_Model } = require("../../Model/users/users.model");
const jwt = require("jsonwebtoken");

userCredentialRoute.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  try {
    bcrypt.hash(password, 4, async (err, hash) => {
      const credential = new userCredential_Model({
        name,
        email,
        password: hash,
      });
      await credential.save();
      res.send(credential);
    });
  } catch (err) {
    res.send("registration failed");
  }
});

userCredentialRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userCredential_Model.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password).then(async (result) => {
        if (result) {
          const token = jwt.sign({ userId: user[0]._id }, "BabyCoder");
          res.send({
            Msg: "successfully login",
            name: user[0].name,
            token: token,
          });
        } else {
          res.send("wrong credential");
        }
      });
    } else {
      res.send("user not found");
    }
  } catch (err) {
    res.send("something went wrong");
    res.send({ Msg: err.message });
  }
});

module.exports = { userCredentialRoute };
