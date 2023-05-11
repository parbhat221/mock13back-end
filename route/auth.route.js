const bcrypt = require("bcrypt");
const express = require("express");
var jwt = require("jsonwebtoken");
const { SignupModel } = require("../model/signup.model");
const login = express.Router();

login.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    bcrypt.hash(password, 5, async function (err, hash) {
      // result == true
      if (err) {
        res.status(400).send({ msg: "error in signup" });
      }
      if (hash) {
        let item = new SignupModel({ email, password: hash });
        await item.save();
        res.status(200).send({ msg: "signup is done" });
      }
    });
  } catch (error) {
    res.status(400).send({ msg: "error in signup 1" });
  }
});

login.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const { password: hash, _id } = await SignupModel.findOne({ email });
  console.log(hash, _id);
  try {
    bcrypt.compare(password, hash, async function (err, result) {
      // result == true
      if (err) {
        res.status(400).send({ msg: "error in login" });
      }
      if (result) {
        // modify
        res.status(200).send({ token:'Bearer '+ jwt.sign({ userId: _id }, "masai") });
      }
    });
  } catch (error) {
    res.status(400).send({ msg: "error in signup 1" });
  }
});

module.exports = { login };
