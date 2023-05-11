const express = require("express");
const { ScoreModel } = require("../model/score.model");
const score = express.Router();

score.get("/", async (req, res) => {
  let body = req.body;
  console.log(body)
  try {
    let data = await ScoreModel.find(body);
    console.log(data)
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send("error in getting the scores");
  }
});

score.post("/", async (req, res) => {
  let body = req.body;
  console.log(body)
  try {
    let data = new ScoreModel(body);
    await data.save();
    res.status(200).send("score data is stored");
  } catch (error) {
    res.status(400).send("error in posting the scores");
  }
});

module.exports = { score };
