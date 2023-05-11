const express = require("express");
const app = express();
const cors = require("cors");
const { connect } = require("mongoose");
const { connection } = require("./db");
const { login } = require("./route/auth.route");
const { user } = require("./route/user.route");
const { score } = require("./route/score.route");

app.use(cors());
app.use(express.json());
app.use("/auth", login);
app.use("/user", user);
app.use('/score', score)

app.listen(4500, async (req, res) => {
  try {
    await connection;
    console.log("server is running");
  } catch (error) {
    console.log("server is not running");
  }
});
